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
  return moment(input).format("MMM");
};
