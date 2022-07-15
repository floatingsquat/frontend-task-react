const KEY = "qNTfdnVmaVjThHwcK8cepravKUFGToKI";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events";
export const eventListBySearch = (keyword, page = 1) => {
  const url = `${BASE_URL}.json?apikey=${KEY}&keyword=${keyword}&size=4&page=${page}`;
  return url;
};

export const eventDetailsById = (id) => {
  const url = `${BASE_URL}/${id}.json?apikey=${KEY}`;
  return url;
};
