import LightBoxClass from '../../classes/LightBox'

// let there be lights ...
export const mainLight = new LightBoxClass(
	'99%',
	'80%',
	'linear-gradient(rgba(255, 255, 255, 1) 0%, #090d12 73%)',
	'blur(250px)',
	'50%',
	1,
	'-38%'
)

export const secLight = new LightBoxClass(
	'100%',
	'100%',
	'linear-gradient(244deg, rgba(163, 255, 148, 0.035) 22.51%, #090d12 95.16%)',
	'blur(90px)',
	'50%',
	0.5,
	'0'
)
