
import React from 'react'

import styles from './Home.module.scss'

import {
  Grid,
  Paper,
  Box
} from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

export default function Home() {
  return (
    <div className={styles.home}>
      <Grid container spacing={5} justifyContent="center">
        <Grid item lg={3} md={3} sm={2} xs={2}>
          <section className={styles['home__left-section']}>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                height: 270,
                borderRadius: '10px'
              },
            }}
          >
            <Paper variant="outlined" />
          </Box>
          </section>
        </Grid>
        <Grid item lg={4} md={4} sm={8} xs={8}>
          <section className={styles['home__center-section']}>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 130,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 60,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 200,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 200,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 200,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 200,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 200,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
          </section>
        </Grid>
        <Grid item xs={3}>
          <section className={styles['home__right-section']}>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 220,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 220,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                  height: 220,
                  borderRadius: '10px'
                },
              }}
            >
              <Paper variant="outlined" />
            </Box>
          </section> 
        </Grid>
      </Grid>
    </div>
  )
}
