
interface HeaderPageViewModel {
  title: string;
  setTitle: (title: string) => void;
}

interface ChangeHeaderViewModel {
  newTitle: string;
  setNewTitle: (title: string) => void;
  updateTitle: () => void;
}

export {HeaderPageViewModel, ChangeHeaderViewModel}