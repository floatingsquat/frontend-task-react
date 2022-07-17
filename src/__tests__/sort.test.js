import { descendingSort } from "../helpers/sort";

const mockData = [{ name: "a" }, { name: "b" }, { name: "c" }];
const sortedMockData = [{ name: "c" }, { name: "b" }, { name: "a" }];

test("descendingSort function is equal (returns) to reversed itself", () => {
  expect(descendingSort(mockData)).toEqual(sortedMockData);
});
