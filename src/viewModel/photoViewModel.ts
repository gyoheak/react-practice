import {useState, useEffect} from 'react';
import fetchPhotos from '../model/Api';

interface Photo {
  id: string;
  download_url: string;
  author: string;
}

interface ViewModel {
  photos: Photo[];
  loading: boolean;
  error: Error | null;
}

const useViewModel = (): ViewModel => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPhotosData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPhotos(2, 100);
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPhotosData();
  }, []);

  return {
    photos,
    loading,
    error,
  };
};

export default useViewModel;