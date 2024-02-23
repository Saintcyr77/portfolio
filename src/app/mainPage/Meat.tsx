import React from 'react'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const Meat = () => {
  return (
      <Grid container spacing={1}>
          
          <Grid item xl={6} md={6} lg={6} sm={12}>
              
              <Box className="w-full p-14 flex flex-col ">
                  
                  <h1 className='text-white'>Sarthak Bhatt</h1>

                  <h3 className='text-white'>Unemployed engineer currently</h3>

                  <p style={{color:"#7B899D"}}>I build pixel-perfect, engaging, and accessible digital experiences.</p>
                  

                  
              </Box>

              <Box className="my-10 w-full p-14 flex flex-col gap-8">
                  <div className='flex content-center'>
                      <hr className='text-white my-2 mr-3' style={{width:"60px"}} />
                      <span className='text-white'>About</span>
                      
                  </div>
                  <div className='flex content-center'>
                      <hr className='text-white my-2 mr-3' style={{width:"60px"}} />
                      <span className='text-white'>Experiance</span>
                      
                  </div>
                  <div className='flex content-center'>
                      <hr className='text-white my-2 mr-3' style={{width:"60px"}} />
                      <span className='text-white'>Project</span>
                      
                  </div>
                  
              </Box>
              
          </Grid>
          <Grid item xl={6} md={6} lg={6} sm={12}>
              
          </Grid>
          </Grid>
  )
}

export default Meat