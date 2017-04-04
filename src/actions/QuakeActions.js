import fetch from 'isomorphic-fetch'

const apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

function requestQuakeData() {
  return {
    type: 'FETCH_QUAKE_DATA'
  };
}

function receiveQuakeData(json) {
  return {
    type: 'RECEIVE_QUAKE_DATA',
    features: json
  };
}

module.exports = {
  fetchQuakeData: () => {
    return function (dispatch) {
      dispatch(requestQuakeData());

      return fetch(apiUrl, {
        method: 'get'
      })
      .then(response => response.json())
      .then((data) => {
        // Look at features and sort them
        let features = data.features;
        features.sort((a, b) => {
          return b.properties.time - a.properties.time;
        });
        dispatch(receiveQuakeData(features.slice(0, 15)))
      })
      .catch((err) => {
        console.log('fetchQuakeData error', err);
      });
    };
  }
};
