const KEY = "qNTfdnVmaVjThHwcK8cepravKUFGToKI";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
export const eventListBySearch = (keyword) => {
  const url = `${BASE_URL}?apikey=${KEY}&keyword=${keyword}`;
  //console.log(url);
  return url;
};
