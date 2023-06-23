export interface User {
  name: string;
  age: number;
  isAuth: boolean;
  favorites: number[];
}

export class UserService {
  constructor() {}

  getUser = async () => {
    return await new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve({
          name: "Eger Kuzmich",
          age: 32,
          isAuth: true,
          favorites: [1, 2, 3],
        });
      }, 1000);
    });
  };
}
