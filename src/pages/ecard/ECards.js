import React from 'react';
import { makeStyles,Card,CardHeader,CardMedia,CardContent,
  Collapse,Avatar,IconButton,Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import img1 from '../../assets/images/birthday.jpg';
import img2 from '../../assets/images/work anniversary.jpg';
import Grid from '@material-ui/core/Grid';
import Layout from '../layout/Layout';
import logo from '../../assets/images/Logo.jpg';
import targetlogo from '../../assets/images/Target-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    // backgroundColor: red[500],
  },
}));

export default function ECard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Layout>
          <div>

    <Grid container>
    <Grid item xs={12} s={6} md={4}>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="nomination" className={classes.avatar} src={targetlogo}>
          
           </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Birthday"
        subheader="July 22,2020"
      />
      <CardMedia
        className={classes.media}
        image={img1}
        title="birthday"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Send a Wish
        </Typography>
      </CardContent>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Send a Virtual Birthday Wish</Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
<Grid item xs={12} s={6} md={4}>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="Work Anniversary" className={classes.avatar} src={targetlogo}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Work Anniversary"
        subheader="July 22,2020"
      />
      <CardMedia
        className={classes.media}
        image={img2}
        title="Work Anniversary"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Send a Wish
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Send a Virtual Work Anniversary Wish</Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Grid>
    </div>
    </Layout>
  );
}

