import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	cardRents: ({ width, height, borderRadius }) => ({
		background: '#1c1e1d',
		border: `1px solid ${theme.palette.primary.main}`,
		height: height || 225,
		width: width || 290,
		margin: 10,
		borderRadius: borderRadius || 6,
		overflow: 'hidden',

		"&:hover": {
			width: width + width * 0.06,
			height: height + height * 0.06,
			margin: 0
		},
		"&:focus": {
			width: width + width * 0.06,
			height: height + height * 0.06,
			marginTop: 0,
		}
	}),
	cardRentsImage: ({ bgSize, image }) => ({
		backgroundImage: `url(${image || 'http://clarovideocdn5.clarovideo.net/pregeneracion//cms/images/202001/75478_Default_Passangers-now_16154434.jpg'})`,
		position: 'relative',
		backgroundRepeat: 'no-repeat',
		backgroundSize: bgSize || 'cover',
		width: '100%',
		height: 140,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	}),
	cardRentsContent: {
		padding: 10
	},
	title: () => ({
		color: 'white',
		fontSize: 16
	}),
	subTitle: ({ width }) => ({
		color: 'red',
		width: width,
		fontSize: 16
	})
}));

const CardRents = ({ width, height, bgSize, borderRadius, title = false, image, children, subTitle }) => {

	const classes = useStyles({ width, height, bgSize, borderRadius, image, subTitle });

	return (
		<div className={`${classes.cardRents}`}>
			<div className={`${classes.cardRentsImage}`}>
				{children}
			</div>
			<div className={classes.cardRentsContent}>
				{title &&
					<Typography className={classes.title} variant="body1" noWrap>
						{title}
					</Typography>
				}
				{subTitle &&
					<Typography className={classes.subTitle} variant="body2" noWrap>
						{subTitle}
					</Typography>
				}
			</div>
		</div>
	)
}
export default CardRents