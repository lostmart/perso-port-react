export default class LightBoxClass {
	constructor(
		width,
		height,
		background,
		filter,
		borderRadius,
		opacity,
		top,
		left
	) {
		this.width = width ?? '0'
		this.height = height ?? '0'
		this.background = background ?? 'none'
		this.filter = filter ?? 'none'
		this.borderRadius = borderRadius ?? '0'
		this.opacity = opacity ?? 0
		this.top = top ?? '0'
		this.left = left ?? '0'
	}
}
