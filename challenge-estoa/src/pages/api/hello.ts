import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("https://swapi.dev/api/people");
  const data = res.data.results;

  return {
    props: { data },
  };
};
