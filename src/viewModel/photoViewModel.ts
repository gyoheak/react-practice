import {useState, useEffect} from 'react';
import fetchPhotos from './api';
import { ViewModel, Photo } from '../model/PhotoModel';
import useErrorHandler from '../utils/ErrorHandler';

const photoViewModel = (): ViewModel => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refetch, setRefetch] = useState<boolean>(false);
  
  const {error, setError, clearError} = useErrorHandler();

  const fetchPhotosData = async () => {
    try {
      const data = await fetchPhotos(2, 100);
      return data;
    } catch (error) {
      setError(error);
      throw error;
    }
  };

  useEffect(() => {
    setLoading(true);
    clearError();
    fetchPhotosData()
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [refetch]);

  return {
    photos,
    loading,
    error,
    setRefetch: () => setRefetch(!refetch),
  };
};

export default photoViewModel;