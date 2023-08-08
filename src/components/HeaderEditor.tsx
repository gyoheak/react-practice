import React, {useState} from 'react';
import useChangeHeaderViewModel from '../viewModel/changeHeaderViewModel';

const HeaderEditor: React.FC = () => {

  const {newTitle, setNewTitle, updateTitle} = useChangeHeaderViewModel();

  return (
    <div>
      <input
        type='text'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder='Enter a new Title'
        />
        <button onClick={updateTitle}>Change Title</button>
    </div>
  )
}

export default HeaderEditor;