import axios from 'axios';

export default async function getSpeciesData(url: string) {
  return await axios
    .get(`${url}`)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
