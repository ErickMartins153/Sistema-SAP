import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import Post from "./Post";
import { PostContext } from "../store/post-context";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const postCtx = useContext(PostContext);

  useEffect(() => {
    setPosts([...postCtx.posts]);
  }, [postCtx.posts]);

  function renderPost(post) {
    return <Post postData={post.item} />;
  }

  return (
    <>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(post) => post.id}
      />
    </>
  );
}
