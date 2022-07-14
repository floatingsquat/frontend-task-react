const KEY = "qNTfdnVmaVjThHwcK8cepravKUFGToKI";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
export const eventListBySearch = (keyword, page = 1) => {
  const url = `${BASE_URL}?apikey=${KEY}&keyword=${keyword}&page=${page}`;
  console.log(url);

  return url;
};
