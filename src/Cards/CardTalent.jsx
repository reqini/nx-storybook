import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	cardTalent: ({ width, height, bgSize, borderRadius, image }) => ({
		backgroundImage: `url(${image || 'http://clarovideocdn5.clarovideo.net/pregeneracion//cms/images/202001/75478_Default_Passangers-now_16154434.jpg'})`,
		position: 'relative',
		margin: height * 0.06,
		backgroundSize: bgSize || 88,
		backgroundPosition: 'center',
		border: `1px solid ${theme.palette.primary.main}`,
		borderRadius: borderRadius || '50%',
		height: height || 88,
		width: width || 88,

		"&:hover": {
			width: width + width * 0.06,
			height: height + height * 0.06,
			backgroundSize: bgSize + bgSize * 0.13,
			border: `3px solid ${theme.palette.primary.main}`,
			margin: 0
		},
		"&:focus": {
			width: width + width * 0.13,
			height: height + height * 0.13,
			backgroundSize: bgSize + bgSize * 0.13,
			marginTop: 0,
		}
	}),
	typographyTitle: ({ width }) => ({
		color: 'white',
		marginTop: 5,
		textAlign: 'center',
		width: width
	}),
	typographyRol: ({ width }) => ({
		color: 'white',
		fontSize: 12,
		textAlign: 'center',
		width: width
	})
}));

const CardTalent = ({ width, height, bgSize, borderRadius, title, image, children, infoTalent = false }) => {

	const classes = useStyles({ width, height, bgSize, borderRadius, image });

	return (
		<React.Fragment>
			<div className={`${classes.cardTalent}`}>
				{children}
			</div>
			<Typography className={classes.typographyTitle} variant="body1">{title}</Typography>
			{infoTalent && <Typography className={classes.typographyRol} variant="body2" noWrap>{infoTalent}</Typography>}
		</React.Fragment>
	)
}
export default CardTalent