import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
// import youtube from "../Api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [videoSelected, setVideoSelected] = useState(null);
  const [videos, onInput] = useVideos("football");

  useEffect(() => {
    setVideoSelected(videos[0]);
  }, [videos]);

  return (
    <div className="ui container mt-3">
      <SearchBar whenFormSubmit={onInput} />
      <div className="row">
        <div className="col-12 col-lg-8">
          <VideoDetail video={videoSelected} />
        </div>
        <div className="col-12 col-lg-4">
          <VideoList
            select={(video) => setVideoSelected(video)}
            videos={videos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
