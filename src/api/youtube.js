import axios from 'axios';
/* baseURL from which we will consume the Yotube API through axios*/
export default axios.create(
    {baseURL: 'https://www.googleapis.com/youtube/v3/'}
    );
