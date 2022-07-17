import { dayOfDate, formatDate, monthNameOfDate } from "../helpers/formatDate";

const inputDateData = "2022-07-18";

test("dayOfDate function works properly", () => {
  expect(dayOfDate(inputDateData)).toEqual("18");
});

test("formatDate function works correctly", () => {
  expect(formatDate(inputDateData)).toEqual("18.07.2022");
});

test("monthNameOfDate function returns the month of name properly", () => {
  expect(monthNameOfDate(inputDateData)).toEqual("Aug");
});
