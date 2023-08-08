import { useState } from "react";
import { ChangeHeaderViewModel } from "../model/headerModel";

const useChangeHeaderViewModel = (): ChangeHeaderViewModel => {
  const [newTitle, setNewTitle] = useState<string>('');

  const updateTitle = () =>{
    setNewTitle('');
  };

  return {
    newTitle,
    setNewTitle,
    updateTitle,
  };
};

export default useChangeHeaderViewModel;