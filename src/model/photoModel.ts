interface Photo {
  id: string;
  download_url: string;
  author: string;
}

interface ViewModel {
  photos: Photo[];
  loading: boolean;
  error: Error | null;
  setRefetch: () => void;
}

export {Photo, ViewModel}