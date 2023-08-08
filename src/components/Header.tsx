import React from 'react';
import useHeaderPageViewModel from '../viewModel/HeaderViewModel';
import HeaderEditor from './HeaderEditor';

const HeaderPage: React.FC = () => {
  const { title } = useHeaderPageViewModel();

  return (
    <div>
      <h1>{title}</h1>
      <HeaderEditor/>
    </div>
  )
}

export default HeaderPage;