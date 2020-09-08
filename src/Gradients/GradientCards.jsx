import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	backgroundGradientLanding: ({width}) => ({
		width: width || null,
		position: 'absolute',
		backgroundImage:' linear-gradient(to left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.6685049019607843) 40%, rgba(0, 0, 0, 0) 100%)',
		top: -12,
		bottom: 0,
		right: -1
	})
}));

const GradientCards = ({width}) => {

	const classes = useStyles({width});

	return (
		<div className={classes.backgroundGradientLanding} />
	)
}
export default GradientCards