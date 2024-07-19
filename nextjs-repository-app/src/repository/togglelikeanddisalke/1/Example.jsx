import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Example = () => {

    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
      setLiked(!liked);
    };
    
  return (
    <>
       <div className="flex items-center">
        <button onClick={toggleLike} className="text-blue-500 mr-2 focus:outline-none">
            <FontAwesomeIcon icon={liked ? faThumbsUp : faThumbsDown} />
            <span className="ms-3">{liked ? 'Liked' : 'Disliked'}</span>
        </button>
        
    </div>
    </>
  );
};

export default Example;
