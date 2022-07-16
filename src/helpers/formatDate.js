import moment from "moment";

export const formatDate = (input) => {
  const [year, month, day] = input.split("-");
  return `${day}.${month}.${year}`;
};

export const dayOfDate = (input) => {
  const [year, month, day] = input.split("-");

  return `${day}`;
};

export const monthNameOfDate = (input) => {
  const [year, month, day] = input.split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let trimmedMonth = month.replace(/^0+/, "");
  return monthNames[trimmedMonth];
};
