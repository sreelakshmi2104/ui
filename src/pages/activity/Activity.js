import React from 'react'
import {Paper,Hidden,Typography} from '@material-ui/core';
import Layout from '../layout/Layout';


export default function Activity() {
    return (
        <Layout>
         <div>
         <Hidden xlUp color="secondary">
         <Paper>
        
         <Typography variant="h4" align="center" component="h1" gutterBottom>
         ACTIVITY
      </Typography>
            </Paper>
            </Hidden> 
            {/* <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Custom icon set</Typography>
        <Rating
          name="customized-icons"
          defaultValue={2}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
      </Box> */}
         </div>
        </Layout>
    )
}