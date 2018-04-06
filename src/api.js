export const fetchMeetups = (callback) => {
  fetchData("/reactjs-dallas/events?&sign=true&photo-host=public&page=20", callback);
}

export const fetchAttendees = (callback, eventID) => {
  fetchData(`/reactjs-dallas/events/${eventID}/rsvps?&sign=true&photo-host=public`, callback);
}

const fetchData = (url, callback) => {
  fetch(url)
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