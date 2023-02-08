import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

interface IPostList {
  posts: any;
}

export class PostList extends Component<IPostList> {
  render() {
    const posts = this.props.posts;
    return (
      <>
        {posts.length > 0 ? 
          <>
            <List style={{ background: '#f2f6fc', maxHeight: 500, overflow: 'auto' }}>
              {posts.map((post:any) => (
                <>
                  <ListItemButton component={Link} to={`/post?postId=${post.id}`}>
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
} 
export default PostList;