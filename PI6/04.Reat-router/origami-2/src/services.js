
export const getPosts = async()=>{

  const url = 'http://localhost:9999/api/origami/';

  const res = await fetch(url);
  const posts = await res.json();
  return posts;
}