import { Grid } from '@nextui-org/react'
import React from 'react'

const NotFound = () => {
    return (
        <Grid css={{ display: 'flex', justifyContent: 'center' }} justify='center'>
            <img
                style={{ objectFit: 'cover' }}
                width="100"
                height="100"
                src="https://img.icons8.com/cotton/64/page-not-found.png" alt="page-not-found" />
        </Grid>
    )
}

export default NotFound