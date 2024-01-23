import { Grid } from '@mui/material'
import React from 'react'

export default function Content() {
    return (
        <div className='content'>

            <Grid container
                direction="column"
                style={{ height: "100%" }}
            >

                <Grid item xs={7}>66 Chat</Grid>

                <Grid item xs={5}></Grid>



            </Grid>


        </div>
    )
}
