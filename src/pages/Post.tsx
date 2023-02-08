import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState<any>(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get("postId") ?? 0;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <p>Post</p>
      {postId}
      {JSON.stringify(post)}
    </>
  )
}
export default Post;