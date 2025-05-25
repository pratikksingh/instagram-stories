import { useState } from "react";
import "./App.css";
import { data } from "./userData";
import { StoryView } from "./components/storyView";

function App() {
  const [isView, setIsView] = useState(false); //state to handle the story UI
  const [userIndex, setUserIndex] = useState(undefined);

  const indexHandler = (index) => {
    if (index === data.length || index < 0) {
      setIsView(false);
    } else {
      setUserIndex(index);
    }
  };

  const viewHandler = (val) => {
    setIsView(() => val);
  };

  return (
    <>
      {isView ? (
        <div className="story-view-container">
          <StoryView
            userData={data[userIndex].user}
            storyData={data[userIndex].items}
            viewHandler={viewHandler}
            indexHandler={indexHandler}
            userIndex={userIndex}
          />
        </div>
      ) : (
        <div className="stories-container">
          {data.map(({ user, items }, index) => {
            return (
              <div className="user-details" key={user.id}>
                <img
                  className="user-dp"
                  src={user.profilePicture}
                  onClick={() => {
                    indexHandler(index);
                    viewHandler(true);
                  }}
                />
                <p className="username">{user.username}</p>
              </div>
            );
          })}
        </div>
      )}

      <h3>Tap any profile above to view the story </h3>
    </>
  );
}

export default App;
