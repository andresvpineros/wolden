import React from 'react';
import { Grid, Button } from '@mui/material';
import styles from './Login.module.scss'

function Login() {
	return (
			<Grid className={styles.login} container>
          <Grid className={styles['login-image--container']} md={6}>
            <Button variant='contained'>Primary</Button>
          </Grid>
          <Grid className={styles['login-form--container']} md={6}>
            <Button variant='contained'>Secondary</Button>
          </Grid>
      </Grid>
	);
}

export default Login;
