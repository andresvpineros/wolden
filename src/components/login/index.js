import React from 'react';
import {
	Grid,
	Button,
	Box,
	Typography,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton
} from '@mui/material';
import styles from './Login.module.scss';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircle from '@mui/icons-material/AccountCircle';
import facebookLogin from '../../assets/images/FacebookComponent.svg';
import googleLogin from '../../assets/images/GoogleComponent.svg';

function Login() {
	const [ values, setValues ] = React.useState({
		email: '',
		password: '',
		showPassword: false
	});
	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<Grid className={styles.login} container>
			<Grid className={styles['login-image--container']} md={6}>
				<Box>
					<Box />
				</Box>
			</Grid>
			<Grid className={styles['login-form--container']} md={6}>
				<div className={styles['login-title__center']}>
					<Box className={styles['login-logo--container']}>
						<Typography>W</Typography>
						<Typography>olden</Typography>
					</Box>
				</div>
				<div className={styles['login-form']}>
					<form>
						<Box className={styles['login-title--size']}>
							<Typography>Login</Typography>
						</Box>
						<FormControl sx={{ m: 1, width: '25ch' }}>
							<InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
							<OutlinedInput
								id="outlined-adornment-email"
								type="email"
								value={values.email}
								onChange={handleChange('email')}
								startAdornment={
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								}
								label="Email"
							/>
						</FormControl>
						<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? 'text' : 'password'}
								value={values.password}
								onChange={handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								startAdornment={
									<InputAdornment position="start">
										<LockIcon />
									</InputAdornment>
								}
								label="Password"
							/>
						</FormControl>
						<Box className={styles['login-form--button__submit']}>
							<Button variant="contained">Submit</Button>
						</Box>
					</form>
				</div>
        <div>
          <Box className={styles['login-forgotpassword']}>
            <Typography>Did you forgot your password? <a href='#'>Click Here</a></Typography>
          </Box>
          <Box>
            <Typography>Log in with social media.</Typography>
            <div className={styles['login-line']}></div>
            <Box>
              <img src={facebookLogin} alt='facebook log in' />
              <Typography>or</Typography>
              <img src={googleLogin} alt='google log in' />
            </Box>
          </Box>
          <Box>
            <Typography>Don't have an account? <a href='#'>Click Here</a></Typography>t
          </Box>
        </div>
			</Grid>
		</Grid>
	);
}

export default Login;
