"use strict";
//2. Fix the TS errors.
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStudent = exports.users = void 0;
exports.users = [
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
function showStudent(user) {
    console.log(`${user.name}, ${user.age}`);
}
exports.showStudent = showStudent;
exports.users.forEach(showStudent);
