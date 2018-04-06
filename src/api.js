export const fetchMeetups = (callback) => {
  fetch("/reactjs-dallas/events?&sign=true&photo-host=public&page=20")
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    })
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      callback(jsonData);
    })
    .catch((error) => {
      console.log(error)
    })
}