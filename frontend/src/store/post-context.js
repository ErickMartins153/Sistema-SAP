import { createContext, useState } from "react";

const dummyId = new Date().toISOString() + Math.random().toString();
const DUMMY_POST = {
  id: dummyId,
  user: "Fulano de tal",
  imageUri: null,
  description:
    "Lorem ipsum dolor sit amet. Et quia architecto et ipsa fugiat est voluptate voluptatem",
  date: new Date(),
};

export const PostContext = createContext({
  posts: [],
  addPost: (userId, date, imageUri, description) => {},
  deletePost: (postId) => {},
});

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([DUMMY_POST]);

  function addPost(user, date, imageUri, description) {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: new Date().toISOString() + Math.random().toLocaleString(),
        user,
        date,
        imageUri,
        description,
      },
    ]);
  }

  function deletePost(postId) {
    setPosts((prevPosts) => prevPosts.filter((post) => post !== postId));
  }

  const value = {
    posts: posts,
    addPost: addPost,
    deletePost: deletePost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
