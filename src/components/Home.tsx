import React, { useState, useEffect } from 'react';
import axios from "axios";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Home() {
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
  
  return (
    <>
      <h1>Home</h1>
      {posts.length > 0 ? 
        <>
          <List>
            {posts.map((post:any) => (
              <>
                <ListItemButton component={Link} to={`/posts?postId=${post.id}`}>
                  <ListItemAvatar>
                    <Avatar>{post.userId}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={post.title}
                    secondary={post.body}
                  />
                </ListItemButton>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
        </>
        : "Loading..."
      }
    </>
  )
}

export default Home;