// cusrtom hook

import { useState, useEffect } from "react";
import youtube from "../Api/youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onInput(defaultTerm);
  }, [defaultTerm]);

  const onInput = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, onInput];
};

export default useVideos;
