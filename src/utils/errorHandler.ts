import {useState} from 'react';
import { ErrorHandler } from '../model/ErrorModel';

const useErrorHandler = (): ErrorHandler => {
  const [error, setError] = useState<Error | null>(null);

  const clearError = () => {
    setError(null);
  };

  return {
    error,
    setError,
    clearError,
  };
};

export default useErrorHandler;