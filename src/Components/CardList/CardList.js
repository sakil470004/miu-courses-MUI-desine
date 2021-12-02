import { Grid } from '@mui/material'
import React from 'react'
import CardCustom from '../Card/Card'

export default function CardList() {
    return (

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <CardCustom></CardCustom>
                </Grid>
            ))}
        </Grid>

    )
}
