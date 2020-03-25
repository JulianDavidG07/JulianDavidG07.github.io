import React, { useState, Fragment } from "react";

import { Grid } from "@material-ui/core";
/* Component library for React, to speed up the responsive css development of a project */

import { SearchBar, VideoDetail, HeaderDaz, FooterDaz } from "./components";
/* import React components */

import youtube from "./api/youtube";
/* import baseURL Youtube API */

export default () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  /* React Hooks, handle video state */ 

  return (
    <Fragment>
        <Grid style={{ justifyContent: "center" }}>
        <HeaderDaz /> {/* header of the page containing the logo */}
        <SearchBar onSubmit={handleSubmit} /> {/* Search bar expects content to be typed and user enter */}
        <VideoDetail video={selectedVideo} /> {/* Bring information from the returned API video */}
        <FooterDaz /> {/* Footer of the page containg information about developers */}
        </Grid>
    </Fragment>
  );

  /* Promise that you will use the search API element with the q parameter, using an API key */
  async function handleSubmit(searchTerm) {
    const YOU = 'AIzaSyB8qQyqr1rmmjA-FScIrvjhM540LXAq5p0';
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: YOU,
        q: searchTerm,
      }
    });

    setSelectedVideo(videos[0]);
  }
}
