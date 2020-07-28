import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardLandscape from './CardLandscape'

const useStyles = makeStyles(theme => ({
	channels: {
		display: 'flex',
		position: 'relative',
		
		'& img': {
			height: 45
		},
		'& p': {
			color: 'white',
			width: '100%',
			marginLeft: 10
		}
	},
	gradient: {
		width: 12,
		height: 45,
		background: 'linear-gradient(45deg, #469FFF, #A39AF9)',
		marginRight: 10
	},
	pricePlans: {
		textAlign: 'center',
		width: '100%',
		padding: 0,
		color: 'white',
		position: 'relative',
		margin: '20px 0',

		'& b': {
			fontSize: 28,
    		fontWeight: 500,
		}
	}
}));

const CardChannels = ({ width, height, bgSize, borderRadius, title = false, image, children }) => {

	const classes = useStyles({ width, height, bgSize, borderRadius, image });

	return (
		<CardLandscape
			bgSize={'cover'}
			borderRadius={6}
			height={144}
			image="http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg"
			width={243}
			opacity
		>
			<div className={classes.channels}>
				<div className={classes.gradient} />
				<div><img src="http://assetsnx.clarobrasil.mobi/assets/s92299_lw_h15_aa.png" alt="channel"/></div>
				<div><p>hola que tal como te va</p></div>
			</div>
			<div className={classes.pricePlans}>
				<p>R$<b>1</b>,09/dia</p>
			</div>
		</CardLandscape>
	)
}
export default CardChannels