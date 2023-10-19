import LightBoxClass from '../../classes/LightBox'

// let there be lights ...
export const mainLight = new LightBoxClass(
	'99%',
	'80%',
	'linear-gradient(rgb(255 255 255 / 99%) -21%, rgb(116 137 255 / 0%) 94%)',
	'blur(250px)',
	'50%',
	0.5,
	'-38%'
)

export const secLight = new LightBoxClass(
	'100%',
	'100%',
	'linear-gradient(244deg, rgba(163, 255, 148, 0.035) 22.51%, rgba(0, 0, 0, 0.12) 95.16%)',
	'blur(90px)',
	'50%',
	0.5,
	'0'
)
