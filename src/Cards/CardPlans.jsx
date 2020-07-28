import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardLandscape from './CardLandscape'
import ChipContainer from '../Chip'

const useStyles = makeStyles(theme => ({
	channelsPlans: {
		fontWeight: 900,
		fontSize: 20,
		margin: '3px 0 0 10px',
		color: 'white',
		position: 'relative'
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
	},
	listChannelsPlans: {
		width: '100%',
		padding: 0,
		listStyle: 'none',
		overflow: 'hidden',
		display: 'flex',
		position: 'relative',

		'& li': {
			'& img': {
				width: '100%',
			}
		}
	}
}));

const CardPlans = ({ width, height, bgSize, borderRadius, title = false, image, children }) => {

	const classes = useStyles({ width, height, bgSize, borderRadius, image });

	return (
		<CardLandscape
			bgSize={'cover'}
			borderRadius={6}
			height={180}
			image="http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg"
			width={290}
			opacity
		>
			<ChipContainer title="novo" />
			<div className={classes.channelsPlans}>
				8 canais
			</div>
			<div className={classes.pricePlans}>
				<p>R$<b>1</b>,09/dia</p>
			</div>
			<ul className={classes.listChannelsPlans}>
				<li><img src="https://assetsnx.clarobrasil.mobi/assets/s54680_lw_h3_ab.png" alt="O MELHOR DO ESPORTE" /></li>
				<li><img src="https://assetsnx.clarobrasil.mobi/assets/s54680_lw_h3_ab.png" alt="O MELHOR DO ESPORTE" /></li>
				<li><img src="https://assetsnx.clarobrasil.mobi/assets/s54680_lw_h3_ab.png" alt="O MELHOR DO ESPORTE" /></li>
				<li><img src="https://assetsnx.clarobrasil.mobi/assets/s54680_lw_h3_ab.png" alt="O MELHOR DO ESPORTE" /></li>
				<li><img src="https://assetsnx.clarobrasil.mobi/assets/s54680_lw_h3_ab.png" alt="O MELHOR DO ESPORTE" /></li>
			</ul>
		</CardLandscape>
	)
}
export default CardPlans