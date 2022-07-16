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
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let trimmedMonth = month.replace(/^0+/, "");
  return monthNames[trimmedMonth];
};
