      import React, { useState } from 'react';
      import ImageGrid from 'react-fb-image-grid'; 
      import FbImageLibrary from 'react-fb-image-grid'

      

      const FacebookPost = ({ title, date, images, profilePic, username }) => {
        const [liked, setLiked] = useState(false);
        const [showEmojis, setShowEmojis] = useState(false);

        const handleLikeClick = () => {
          setLiked(!liked);
        };

        const toggleEmojis = () => {
          setShowEmojis(!showEmojis);
        };

        return (
          <div className="facebook-post">
            <div className="post-header">
              <img src={profilePic} alt={username} className="profile-pic" />
              <div className="post-info">
                <span className="username">{username}</span>
                <span className="post-date">
                  {new Date(date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="post-content">
              <p className="post-title">{title}</p>
              {images.length > 0 && (
                <>
                <ImageGrid images={images} />
                <FbImageLibrary images={['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hitler_portrait_crop.jpg/220px-Hitler_portrait_crop.jpg','https://mcmscache.epapr.in/post_images/website_350/post_25237546/full.jpg']} /> 
              </>
              )}
            </div>
            <div className="post-actions">
              <button
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={handleLikeClick}
                onMouseEnter={toggleEmojis}
                onMouseLeave={toggleEmojis}
              >
                {liked ? '❤️' : '👍'}
                {showEmojis && (
                  <div className="emoji-list">
                    <span role="img" aria-label="Smiley">
                      😀
                    </span>
                    <span role="img" aria-label="Heart Eyes">
                      😍
                    </span>
                    <span role="img" aria-label="Wow">
                      😲
                    </span>
                    <span role="img" aria-label="Thumbs Up">
                      👍
                    </span>
                    <span role="img" aria-label="Heart">
                      ❤️
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>
        );
      };

      export default FacebookPost;
