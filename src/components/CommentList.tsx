import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

interface ICommentList {
  comments: any;
}

export class CommentList extends Component<ICommentList> {
  render() {
    const comments = this.props.comments;
    return (
      <>
        {comments?.length > 0 ? 
          <>
            <List style={{ background: '#f2f6fc', maxHeight: 500, overflow: 'auto' }}>
              {comments.map((comment:any) => (
                <>
                  <ListItemButton component={Link} to={`/comment?commentId=${comment.id}`}>
                    <ListItemAvatar>
                      <Avatar>{comment.name.substring(0, 1).toUpperCase()}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${comment.name} (${comment.email})`}
                      secondary={comment.body}
                    />
                  </ListItemButton>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
          </>
          : ""
        }
      </>
    )
  }
} 
export default CommentList;