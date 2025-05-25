import { useEffect, useState } from "react";
import "./storyView.css";
export const StoryView = ({
  userData,
  storyData,
  viewHandler,
  indexHandler,
  userIndex,
}) => {
  const [storyIndex, setStoryIndex] = useState(0);

  console.log("userIndex", userIndex);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (storyIndex !== storyData.length) {
        indexHandler(userIndex + 1);
        return;
      } else {
        setStoryIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [userIndex]);

  return (
    <div className="story-page">
      <div className="user-details-story">
        <img
          className="user-dp-story-page"
          src={userData.profilePicture}
          width={10}
          height={10}
          alt={`${userData.username}'s dp`}
        />
        <p>{userData.username}</p>
      </div>
      {storyData.map((data) => (
        <img
          className="story-image"
          loading="lazy"
          src={storyData[storyIndex].mediaUrl}
          key={data.id}
        />
      ))}

      <button className="close-btn" onClick={() => viewHandler(false)}>
        X
      </button>

      <div
        className="right-tap"
        onClick={() => {
          indexHandler(userIndex + 1);
        }}
      ></div>
      <div
        className="left-tap"
        onClick={() => {
          indexHandler(userIndex - 1);
        }}
      ></div>
    </div>
  );
};
