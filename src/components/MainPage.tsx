import React, { useState, useEffect } from 'react';
import axios from "axios";

function MainPage() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  console.log("tracing post", posts);
  console.log("tracing post.length", posts.length);
  
  return <>
    <h1>Main Page</h1>;
    {posts.length > 0 ? 
      posts.map((post:any) => (
        <>
          {post.title}
          <br />
          {post.body}
          <br />
          <hr />
        </>
      )) 
      : "Loading..."
    }
  </>
}

export default MainPage;