import LightBoxClass from '../../classes/LightBox'

// let there be lights ...
export const mainLight = new LightBoxClass({
	width: '99%',
	height: '80%',
	background: 'linear-gradient(rgba(255, 255, 255, 1) 0%, #090d12 73%)',
	filter: 'blur(250px)',
	borderRadius: '50%',
	opacity: 1,
	top: '-38%',
})

export const secLight = new LightBoxClass({
	width: '100%',
	height: '100%',
	background:
		'linear-gradient(244deg, rgba(163, 255, 148, 0.035) 22.51%, rgb(33 48 67) 95.16%)',
	filter: 'blur(90px)',
	borderRadius: '50%',
	opacity: 0.5,
})
