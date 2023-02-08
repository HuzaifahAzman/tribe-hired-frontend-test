import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPost(res.data);
    })
  }, [])

  console.log("tracing post", post);
  

  return (
    <div>
      {!!post ? JSON.stringify(post) : "Loading"}
    </div>
  );
}

export default App;
