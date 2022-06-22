import { changeDateField, changeTimeField, changePlaceAndRow } from "./ticket";

function buttons({ selectDate, selectTime, selectSeat }) {
	const selectDateBtns = document.querySelectorAll(selectDate);
	const selectTimeBtns = document.querySelectorAll(selectTime);
	const selectSeatBtns = document.querySelectorAll(selectSeat);

	function clearBtn(btns) {
		btns.forEach(btn => {
			if (btns === selectDateBtns) {
				btn.classList.remove("page-main__choice__choose-date-content__item__date-selected");
				btn.querySelectorAll("span")[0].classList.remove(
					"page-main__choice__choose-date-content__item__date-selected__full-date"
				);
				btn.querySelectorAll("span")[1].classList.remove(
					"page-main__choice__choose-date-content__item__date-selected__short-date"
				);
			} else if (btns === selectTimeBtns) {
				btn.querySelector("button").classList.remove(
					"page-main__choice__choose-session-time__time__selected"
				);
				btn.querySelector("span").classList.remove(
					"page-main__choice__choose-session-time__time__selected__text-content"
				);
			}
		});
	}

	selectDateBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			clearBtn(selectDateBtns);
			btn.setAttribute("data-selected", "true");
			btn.classList.add("page-main__choice__choose-date-content__item__date-selected");
			btn.querySelectorAll("span")[0].classList.add(
				"page-main__choice__choose-date-content__item__date-selected__full-date"
			);
			btn.querySelectorAll("span")[1].classList.add(
				"page-main__choice__choose-date-content__item__date-selected__short-date"
			);
			changeDateField({
				ticket: ".page-main__payment__ticket__content dd",
				selectedDate:
					".page-main__choice__choose-date-content__item__date-selected__full-date"
			});
		});
	});

	selectTimeBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			clearBtn(selectTimeBtns);
			btn.querySelector("button").classList.add(
				"page-main__choice__choose-session-time__time__selected"
			);
			btn.querySelector("span").classList.add(
				"page-main__choice__choose-session-time__time__selected__text-content"
			);
			changeTimeField({
				ticket: ".page-main__payment__ticket__content dd",
				selectedTime: ".page-main__choice__choose-session-time__time__selected"
			});
		});

		selectSeatBtns.forEach(seat => {
			seat.addEventListener("click", evt => {
				if (evt.target === seat.querySelector("button")) {
					if (
						!seat
							.querySelector("button")
							.classList.contains("page-main__choice__choose-seat__seat__selected")
					) {
						seat.querySelector("button").classList.add(
							"page-main__choice__choose-seat__seat__selected"
						);
					} else if (
						seat
							.querySelector("button")
							.classList.contains("page-main__choice__choose-seat__seat__selected")
					) {
						seat.querySelector("button").classList.remove(
							"page-main__choice__choose-seat__seat__selected"
						);
					}
				}
				changePlaceAndRow({
					ticket: ".page-main__payment__ticket__content dd",
					selectedPlace: ".page-main__choice__choose-seat__seat__selected"
				});
			});
		});
	});
}

export default buttons;
