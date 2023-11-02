//Create a type for regularUser using Admin interface

interface Admin {
  username: string;
  password: string;
  age: number;
  nationality: string;
}

const regularUser = {
  username: "simple.user",
  password: "aaaaaaa",
};
