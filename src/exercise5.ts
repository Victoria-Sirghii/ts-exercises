// Fix the TS errors.

const students = [
  {
    name: "Martin",
    age: 12,
  },
  {
    name: "Andrew",
    age: 15,
  },
];

function filteredArrayByValue(items, propertyName, valueToFilter) {
  return items.filter((item) => item[propertyName] === valueToFilter);
}

filteredArrayByValue(students, "age", 12);
