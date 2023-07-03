import axios from 'axios';

export default async function getData() {
  return await axios
    .get('https://swapi.dev/api/people/')
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
