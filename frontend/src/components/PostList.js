import { useContext, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import Post from "./Post";
import { PostContext } from "../store/post-context";
import Fallback from "./Fallback";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const postCtx = useContext(PostContext);

  useEffect(() => {
    setPosts([...postCtx.posts]);
  }, [postCtx.posts]);

  function handleRefresh() {}
  function renderPost(post) {
    return <Post postData={post.item} />;
  }

  if (posts.length === 0) {
    return <Fallback />;
  }

  return (
    <>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(post) => post.id}
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </>
  );
}
