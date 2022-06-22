import "../sass/main.sass";

import dateSelect from "./modules/date-select";
import buttons from "./modules/buttons";

window.addEventListener("DOMContentLoaded", () => {
	dateSelect({
		selectDateContainer: ".page-main__choice__choose-date-container",
		selectDateInnerContainer: ".page-main__choice__choose-date-container__inner",
		selectDateContentBlock: ".page-main__choice__choose-date-content",
		selectDateElements: ".page-main__choice__choose-date-content__item",
		btnNext: ".page-main__choice__btn-next",
		btnPrev: ".page-main__choice__btn-prev"
	});

	buttons({
		selectDate: ".page-main__choice__choose-date-content__item__date",
		selectTime: ".page-main__choice__choose-session-time__time",
		selectSeat: ".page-main__choice__choose-seat__seat"
	});
});
