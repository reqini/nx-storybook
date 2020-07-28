import React from 'react'

// Material Components
import { makeStyles } from '@material-ui/core/styles'

// Components
import EventChannel from './EventChannel'
import Event from './Event'

const listEvents = [
    {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200,
        active: true
    },
    {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
    },
    {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
    },
    {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200,
        block: true
    },
    {
        title: "Los Simpsons",
        time: "12:30 - 13:45",
        width: 200
    },
    {
        title: "Casados con hijos",
        time: "13:45 - 16:45",
        width: 600
    },
    {
        title: "Los Simuladores - Segunda Temporada",
        time: "16:45 - 19:00",
        width: 300
    },
    {
        title: "Los Simuladores - Segunda Temporada",
        time: "19:00 - 20:00",
        width: 200
    },
]

const useStyles = makeStyles(theme => ({
    containerEvents: () => ({
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: 1280
    }),
    contentChannelsFixed: {
        width: 153
    },
    contentEvents: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
}));

export default function ContainerEvents({
    height,
    width,
}) {

    const classes = useStyles({ height, width });

    return (
        <div className={`${classes.containerEvents}`}>
            <div className={classes.contentChannelsFixed}>
                <EventChannel active numberChannel={28} />
            </div>
            <div className={classes.contentEvents}>
                {listEvents.map((item, id) => (
                    <Event block={item.block} active={item.active} title={item.title} time={item.time} width={item.width} />
                ))
                }
            </div>
        </div>
    );
}