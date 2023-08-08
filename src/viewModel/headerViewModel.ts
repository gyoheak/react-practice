import {useState, useEffect} from 'react';
import { HeaderPageViewModel } from '../model/headerModel';

const useHeaderPageViewModel = (): HeaderPageViewModel => {
  const [title, setTitle] = useState<string>('Welcome to my MVVM world');

  return {
    title,
    setTitle,
  };
};

export default useHeaderPageViewModel;