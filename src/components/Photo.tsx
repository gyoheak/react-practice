import React, {useState} from "react";

interface PhotoProps {
  id: string;
  url: string;
  author: string;
}

const Photo: React.FC<PhotoProps> = ({id, url, author}) =>{
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <img key={id} src={url} alt={author} style={{ cursor: 'pointer' }} />
        <p>Author: {author}</p>
      </div>
      {isClicked && (
        <div>
          <img src={url} alt={author} style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }} />
          <p>Author: {author}</p>
        </div>
      )}
    </div>
  );
};

export default Photo;