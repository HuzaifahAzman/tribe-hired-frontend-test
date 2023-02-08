import React, { useState, useEffect } from 'react';
import axios from "axios";
import Container from '@mui/material/Container';
import PostList from '../components/PostList';
import CommentList from '../components/CommentList';
import { useSearchParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

const Post = () => {
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any>(null);
  let [searchParams, ] = useSearchParams();
  let postId = searchParams.get("postId") ?? 0;

  useEffect(() => {
    if (postId > 0){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [postId])

  console.log("tracing comments", comments);
  

  return (
    <>
      <Container maxWidth="sm">
        <h1>
          <IconButton aria-label="Back" onClick={() => window.location.href = './'}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>Home {`Post ${postId}`}
        </h1>
        
        {post ?
          <PostList posts={[post]} disableLink={false} />
          : "Loading..."
        }

        <h3>Comments</h3>
        {comments?.length > 0 ?
          <CommentList comments={comments}/>
          : "Loading..."
        }
      </Container>
    </>
  )
}
export default Post;