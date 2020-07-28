import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	cardSearch: ({ width, height, borderRadius }) => ({
		background: theme.palette.grayColor.main,
		border: `1px solid ${theme.palette.primary.main}`,
		height: height || 225,
		width: width || 290,
		margin: 10,
		borderRadius: borderRadius || 6,
		overflow: 'hidden',

		"&:hover": {
			background: theme.palette.colorActive.main,
			width: width + width * 0.06,
			height: height + height * 0.06,
			margin: 0
		},
		"&:focus": {
			background: theme.palette.colorActive.main,
			width: width + width * 0.06,
			height: height + height * 0.06,
			marginTop: 0,
		}
	}),
	cardSearchImage: ({ bgSize, image }) => ({
		backgroundImage: `url(${image || 'http://clarovideocdn5.clarovideo.net/pregeneracion//cms/images/202001/75478_Default_Passangers-now_16154434.jpg'})`,
		position: 'relative',
		backgroundSize: bgSize || 'cover',
		width: '100%',
		height: 160,
		boxShadow: theme.shadowBox.generic,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	}),
	cardSearchContent: {
		padding: 10
	},
	title: ({ width }) => ({
		color: 'white',
		fontSize: 16
	}),
	subTitle: ({ width }) => ({
		color: theme.palette.fontColorPrimary.main,
		width: width,
		fontSize: 16
	})
}));

const CardSearch = ({ width, height, bgSize, borderRadius, title = false, image, children, subTitle }) => {

	const classes = useStyles({ width, height, bgSize, borderRadius, image, subTitle });

	return (
		<div className={`${classes.cardSearch}`}>
			<div className={`${classes.cardSearchImage}`}>
				{children}
			</div>
			<div className={classes.cardSearchContent}>
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
export default CardSearch