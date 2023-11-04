import LightBoxClass from '../../classes/LightBox'

// let there be lights ...
export const mainLight = new LightBoxClass({
	width: '99%',
	height: '80%',
	background:
		'radial-gradient(circle, rgb(255, 255, 255) -19%, rgb(9, 13, 18) 50%)',
	filter: 'blur(25px)',
	borderRadius: '50%',
	opacity: 0.2,
	top: '-60%',
})

export const secLight = new LightBoxClass({
	width: '100%',
	height: '100%',
	background:
		'linear-gradient(244deg, rgba(163, 255, 148, 0.035) 22.51%, rgb(33 48 67) 95.16%)',
	filter: 'blur(90px)',
	borderRadius: '50%',
	opacity: 0.5,
	top: '-170px',
})
