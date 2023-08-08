import React from 'react';
import photoViewModel from '../viewModel/photoViewModel';
import Photo from '../components/Photo';

const PhotoList: React.FC = () => {
  const {photos, loading, error} = photoViewModel();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {photos.map((photo) => (
        <Photo key={photo.id} id={photo.id} url={photo.download_url} author={photo.author} />
      ))}
    </div>
  );
}

export default PhotoList;