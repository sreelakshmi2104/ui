import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Layout from '../layout/Layout'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import img1 from '../../assets/images/award.jpg';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';
import { Paper } from '@material-ui/core';
const data = [
  {
    src:{img1},
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src:{img1},
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40 M views',
    createdAt: '3 years ago',
  },
  {
    src:{img1},
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
    
  const { loading = false } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Layout>
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Paper align="center">
        <Box key={index} width={400} marginRight={0.5} my={5}>
            
          {item ? (
            <img style={{ width: 300, height: 300 }} alt={item.title} src={img1} />
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}

          {item ? (
            <Box  pr={2}>
                     {/* <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        SEND
      </Button> */}
           <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.channel}
              </Typography>
              {/* <Typography variant="caption" color="textSecondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography> */}
      <Fab variant="extended" color="secondary" onClick={handleClickOpen} >SEND<SendIcon/></Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
        <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
       
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
     
            </Box>
          ) : (
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
        </Paper>
      ))}
    </Grid>
    </Layout>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box overflow="hidden">
      {/* <Media loading /> */}
      <Media />
    </Box>
  );
}