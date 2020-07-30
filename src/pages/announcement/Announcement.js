import React from 'react';
import { Form, Field } from 'react-final-form'
import { TextField, Checkbox } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  FormControlLabel,
} from '@material-ui/core';
import Layout from '../layout/Layout';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateIcon from '@material-ui/icons/Create';

const onSubmit = async values => {
};


function Announcement() {
  return (
      <Layout>
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      {/* <Typography variant="h4" align="center" component="h1" gutterBottom>
         Announcement
      </Typography> */}
      <Typography variant="h5" align="center" component="h2" gutterBottom>
        Enter the Announcement
      </Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }} >
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    margin="dense"
                    name="Subject"
                    component={TextField}
                    type="text"
                    label="Subject"
                    color="secondary"
                  />
                </Grid>
              
                <Grid item xs={12}>
                  <Field
                    name="content"
                    fullWidth
                    required
                    margin="dense"
                    component={TextField}
                    type="text"
                    label="Content"
                    color="secondary"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                         < CreateIcon/>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    label="Confirm"
                    control={
                      <Field
                        name="confirm"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={submitting}
                  >
                    Post
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
    </Layout>
  );
}

export default Announcement;

