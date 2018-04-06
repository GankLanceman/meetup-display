let apiBaseUrl = process.env.NODE_ENV === "production" ? "https://api.meetup.com" : "";
let token = "";

export const fetchMeetups = (callback) => {
  fetchData(`${apiBaseUrl}/reactjs-dallas/events?photo-host=public&page=20${token.length > 0 ? "&access_token=" + token : ""}`, callback);
}

export const fetchAttendees = (callback, eventID) => {
  fetchData(`${apiBaseUrl}/reactjs-dallas/events/${eventID}/rsvps?photo-host=public${token.length > 0 ? "&access_token=" + token : ""}`, callback);
}

export const fetchToken = () => {
  if (process.env.NODE_ENV === "production" && window.location.hash.indexOf("access_token=") === -1) {
    window.location.replace("https://secure.meetup.com/oauth2/authorize?client_id=ggv55li95hi4ngb21r2qi9ctef&response_type=token&redirect_uri=https://ganklanceman.github.io/meetup-display/");
  }
  else {
    const tokenIdentifier = "access_token="
    const accessTokenStartIndex = window.location.hash.indexOf(tokenIdentifier);
    const accessTokenEndIndex = window.location.hash.indexOf("&", accessTokenStartIndex);
    token = window.location.hash.substring(accessTokenStartIndex + tokenIdentifier.length, accessTokenEndIndex);
  }
}

const fetchData = (url, callback) => {
  if(process.env.NODE_ENV === "production" && window.location.hash.indexOf("access_token=") === -1) {
    return "No access token present"
  }

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