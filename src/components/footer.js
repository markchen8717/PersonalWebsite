import React from 'react'
import Typography  from "@material-ui/core/Typography"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {' Mark Chen.'}
        </Typography>
    );
};
export default function Footer() {
    return (
        <footer>
            <Copyright/>
        </footer>
    );
};