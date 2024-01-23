import { Grid } from '@mui/material'
import React from 'react'
import SamplePrompt from '../components/SamplePrompt'

export default function Content() {
    return (
        <div className='content'>

            <Grid container
                direction="column"
                style={{ height: "100%" }}
                alignItems="center"
                justifyContent="center"
            >

                <Grid item xs={7}>66 Chat</Grid>

                <Grid item xs={5}>

                    <SamplePrompt promptTitle={'Hello'} />
                    <SamplePrompt promptText={'Goodbye'} />

                </Grid>



            </Grid>


        </div>
    )
}
