import React from 'react';
import useViewModel from '../viewModel/photoViewModel';

const PhotoList: React.FC = () => {
  const {photos, loading, error} = useViewModel();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.download_url} alt={photo.author} />
      ))}
    </div>
  );
}

export default PhotoList;