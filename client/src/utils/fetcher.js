import axios from "axios";

export const fetcher = async url => {
  let res = await axios(url);
  let data = await res.data;
  return data;
};
