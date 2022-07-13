const KEY = "qNTfdnVmaVjThHwcK8cepravKUFGToKI";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

export const allEvents = () => {
  const url = `${BASE_URL}/apikey=${KEY}`;
  return url;
};
