import axios from "axios";
const API_BASE_URL = "https://proofing-server.herokuapp.com";

export const sendMail = values => {
  axios
    .get(`${API_BASE_URL}/send`, {
      headers: {
        // Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        values
      })
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error));
};
