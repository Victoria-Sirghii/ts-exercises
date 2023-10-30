"use strict";
//2. Fix the TS errors.
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStudent = exports.students = void 0;
exports.students = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
];
function showStudent(user) {
    console.log(`${user.name}, ${user.age}`);
}
exports.showStudent = showStudent;
exports.students.forEach(showStudent);
