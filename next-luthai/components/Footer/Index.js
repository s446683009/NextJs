import React from 'react'
import PropTypes from 'prop-types'
import { dividerClasses, Grid } from '@mui/material'

function Footer({ trasnalte: t }) {
    return (
        <div>
            <Grid container >
                <Grid item xs={6} md={6} sm={12}>
                    {t("footer_web")}
                </Grid>
                <Grid item xs={6} md={6} sm={12}>
                    {t("footer_email")}
                </Grid>
            </Grid>
        </div>
    )
}



export default Footer;