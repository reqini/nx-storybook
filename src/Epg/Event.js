import React from 'react'

// Material Components
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    event: ({ width, background, height }) => ({
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
        width: width || 200,
        height: height || 90,
        background: background || theme.palette.epg.main,
        color: 'white',

        '&:focus': {
            background: background || theme.palette.epg.focus,
        },
        '&:hover': {
            background: background || theme.palette.epg.focus,
        }
    }),
    eventActive: () => ({
        background: theme.palette.epg.active
    }),
    eventBlock: () => ({
        color: 'silver!important',

        '&:focus': {
            background: theme.palette.epg.focusBlock,
        },
        '&:hover': {
            background: theme.palette.epg.focusBlock,
        }
    }),
    imageBlock: ({ imageBlock }) => ({
        position: 'absolute',
        backgroundImage: `url(${imageBlock})` && 'url(https://cdn.pixabay.com/photo/2017/03/19/03/47/material-icon-2155441_960_720.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 25,
        height: 25,
        right: 5,
        top: 5
    }),
    eventBlockActive: {
        background: theme.palette.epg.activeBlock,
        color: 'silver!important'
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        width: '100%'
    }
}));

export default function Event({
    title,
    time,
    height,
    width,
    background,
    imageBlock,
    block = false,
    active = false
}) {

    const classes = useStyles({ title, time, height, width, background, block, active, imageBlock });

    return (
        <div noIndex="0" className={`${classes.event} ${active && classes.eventActive} ${block && classes.eventBlock}`}>
            {block && <div className={classes.imageBlock} />}
            <Typography noWrap className={classes.title} variant="h2">{title}</Typography>
            <Typography variant="body2">{time}</Typography>
        </div>
    );
}