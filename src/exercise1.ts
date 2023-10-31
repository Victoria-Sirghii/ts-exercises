//s Fix the TS errors.

export const users = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function showStudent(user) {
  console.log(`${user.name}, ${user.age}`);
}

users.forEach(showStudent);
