import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostList from '../components/PostList';
import CommentList from '../components/CommentList';
import { useSearchParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Container,
  IconButton,
  TextField,
  Button,
  Stack,
  Grid,
  CardContent,
  Card,
  Typography
} from '@mui/material';

const Post = () => {
  // const [isFetch, setIsFetch] = useState<boolean>(true);
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [filteredComments, setFilteredComments] = useState<any[]>([]);
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
        setFilteredComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

      // setIsFetch(false);
    }
  }, [postId])

  // Filter sections
  const filterCommentsFn = (name: string = "", email: string = "", body: string = "") => {
    let x = comments;

    if (name && name !== ""){
      x = x.filter((c:any) => c.name.includes(name) )
    }
    if (email && email !== ""){
      x = x.filter((c:any) => c.email.includes(email) )
    }
    if (body && body !== ""){
      x = x.filter((c:any) => c.body.includes(body) )
    }

    
    setFilteredComments(x);
  }
  

  const initialValues = {
    name: "",
    email: "",
    body: "",
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
        ...formValues,
        [name]: value,
    });
  };

  const [formValues, setFormValues] = useState(initialValues);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    filterCommentsFn(formValues.name, formValues.email, formValues.body);
  };
  // end filter sections

  return (
    <>
      <Container maxWidth="sm">
        <h1>
          <IconButton aria-label="Back" onClick={() => window.location.href = './'}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          {`Post ${postId}`}
        </h1>
        
        {post ?
          <PostList posts={[post]} disableLink={false} />
          : "Loading..."
        }

        <h3>Comments</h3>

        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
              Filter
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <br />
                <Grid item>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <br />
                <Grid item>
                  <TextField
                    fullWidth
                    id="body"
                    name="body"
                    label="Body"
                    type="text"
                    value={formValues.body}
                    onChange={handleInputChange}
                  />
                </Grid>
                <br />
                <Grid item>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" color="primary" type="submit">
                      Submit
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => setFilteredComments(comments)}>
                      Reset
                  </Button>
                </Stack>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>

        <br />
        {filteredComments?.length > 0 ?
          <CommentList comments={filteredComments}/>
          : "Loading..."
        }
      </Container>
    </>
  )
}
export default Post;