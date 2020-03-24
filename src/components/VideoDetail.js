import React, {Fragment} from "react";
import { CardContent, Typography, Box } from "@material-ui/core";


export default ({ video }) => {
  if (!video) return <div>...</div>;
  /* Condition that states that if the searchbar is not used, print ... */

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  /* Concatenate the entered term to the API request URL */

  return (
    /* Component return the results of the search in this case a video and its details */
    <Fragment>
      <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "50%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
          src={videoSrc}
          frameBorder="0"
          />
      </div>
      <CardContent>
          <Typography variant="h3" color="textSecondary" component="p">
          <Box fontWeight="fontWeightBold" m={1}>
            {video.snippet.title} <br></br>
            {video.snippet.channelTitle}
          </Box>
          </Typography>
        </CardContent>
    </Fragment>
  );
}
