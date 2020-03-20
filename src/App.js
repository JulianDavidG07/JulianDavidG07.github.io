import React, { useState, Fragment } from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, HeaderDaz, FooterDaz } from "./components";

import youtube from "./api/youtube";

export default () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Fragment>
        <Grid style={{ justifyContent: "center" }}>
        <HeaderDaz />
            <SearchBar onSubmit={handleSubmit} />
            <VideoDetail video={selectedVideo} />
            <FooterDaz />
        </Grid>
    </Fragment>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      }
    });

    setSelectedVideo(videos[0]);
  }
}
