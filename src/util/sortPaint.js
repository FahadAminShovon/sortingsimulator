import { SORTED_COLOR } from "../consts/colors";
import { ANIMATION_SPEED_MS } from "../consts/animation";
// pains sorted bars green
export const sortPaint = (animations, setButtonDisable) => {
	const elements = document.getElementsByClassName('array-item');
	const len = elements.length;
	for (let i = 0 ; i < len; i++){
		setTimeout(() => {
			elements[i].style.backgroundColor = SORTED_COLOR;
		}, (animations.length + i) * ANIMATION_SPEED_MS);
	}
	setTimeout(() => {
		setButtonDisable(false)
	}, (animations.length + len) * ANIMATION_SPEED_MS);
}
