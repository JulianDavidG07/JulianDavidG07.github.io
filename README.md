# Dazzler
Website: https://dazzlerapp.herokuapp.com/ 

Dazzler is a site that focuses on quality YouTube content, for example if you type in the name of an artist
dazzler will return the last video uploaded to YouTube by this artist.

On the other hand, if you want, for example, the Spanish-English lyrics of a dazzler song, it will bring you a better score on YouTube using the following format: <Artist> <song name> "letra": Example: Ed sheeran perfect "letra"

Here is a demonstration in case you are lost:

[![Dazzler](http://img.youtube.com/vi/ngDT0xPFNgg/0.jpg)](http://www.youtube.com/watch?v=ngDT0xPFNgg "Dazzler")


## How to run this application
This application loads information using the [Youtube Data API v3](https://developers.google.com/youtube/v3/docs/).

To use it, you need to set up a [Youtube Data v3 API key](https://productioncoder.com/build-youtube-in-react-part-19/) and run the project with `npm` or `yarn`.

**Below, you'll find a step by step explanation**

## Getting a Youtube Data API key
1. Head over to the [Google developers console](https://console.developers.google.com)
2. Create a new project by clicking on `Select project` drop down right next to the logo. Click the `New Project` button an give it a speaking name.
3. Select your project by choosing it in the `Select Dropdown` directly next to the logo in the header.
4. Click the `Enable APIs and Services` button
5. Search for `youtube data`
6. Click on the `Youtube Data API v3`
7. Click the blue enable button
8. In the dashboard, click `Credentials` on the left sidebar
9. Click the `Create Credential` button
10. Which API are you using: `Youtube Data API v3`
11. Where will you be calling the API from: `Web browser`
12. What data are you accessing: `Public data`
13. Click the `What credentials do I need button`
14. **Copy the API key, and paste it into `src/App.js`**
```
const API_KEY = 'AIzaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```
## Install the dependencies
Install the dependencies by running
```
npm install
```

If you are using [yarn](https://yarnpkg.com/lang/en/), please run
```
yarn install
```
## Running the application
**To run the application, execute**
```
npm start
```
or with [yarn](https://yarnpkg.com/lang/en/)
```
yarn start
```

# Features
This application includes the major features
* home feed with infinite scroll
* trending videos for artist
* searching for videos
* watching videos
* displaying comments and video details

# Used technologies
* [React / create-react-app](https://github.com/facebook/create-react-app)
* [material UI](https://material-ui.com/)

## Contribute

Contributions are always welcome!

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)


