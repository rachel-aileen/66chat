import { Grid } from '@mui/material'
import React from 'react'

export default function ChatTab() {
    return (
        <div className='chatTab'>

            <Grid container
                direction="column"
                style={{ height: "100%" }}
            >

                <Grid item xs={3}> Logo </Grid>

                <Grid item xs={9}>Previous chats</Grid>

            </Grid>




        </div >
    )
}
