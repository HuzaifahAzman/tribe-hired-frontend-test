import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

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
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>{comment.name.substring(0, 1).toUpperCase()}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${comment.name} (${comment.email})`}
                      secondary={comment.body}
                    />
                  </ListItem>
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