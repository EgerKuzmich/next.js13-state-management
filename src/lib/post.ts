export class PostService {
  constructor() {}

  getPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => json);
  };
}
