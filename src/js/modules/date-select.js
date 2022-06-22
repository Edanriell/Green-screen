function dateSelect({
	selectDateContainer,
	selectDateInnerContainer,
	selectDateContentBlock,
	selectDateElements,
	btnNext,
	btnPrev
}) {
	const container = document.querySelector(selectDateContainer);
	const innerContainer = document.querySelector(selectDateInnerContainer);
	const content = document.querySelector(selectDateContentBlock);
	const allDates = document.querySelectorAll(selectDateElements);
	const nextDate = document.querySelector(btnNext);
	const previousDate = document.querySelector(btnPrev);

	const computedWidth = window.getComputedStyle(innerContainer).width;
	let offset = 0;

	content.style.width = `${100 * allDates.length}%`;
	innerContainer.style.transition = "0.25s ease-out";
	container.style.overflow = "hidden";

	allDates.forEach(element => {
		element.style.width = computedWidth;
	});

	function clearStringFromDigits(string) {
		return parseInt(string, 10);
	}

	function createDates() {
		allDates.forEach(element => element.remove());
		const _DAYS = 7;

		for (let i = 0; i < _DAYS; i++) {
			const _DATE = new Date();
			_DATE.setHours(24 * i);
			const _DAY = new Intl.DateTimeFormat("ru-RU", { weekday: "long" }).format(_DATE);
			const _DAYLONG = new Intl.DateTimeFormat("ru-RU", {
				day: "numeric",
				month: "long"
			}).format(_DATE);

			const dateBox = document.createElement("li");
			dateBox.classList.add("page-main__choice__choose-date-content__item");
			dateBox.innerHTML = `
        <button
          type="button"
          class="page-main__choice__choose-date-content__item__date"
        >
          <span
            class="page-main__choice__choose-date-content__item__date__full-date"
            >${_DAYLONG}</span
          ><span
            class="page-main__choice__choose-date-content__item__date__short-date"
            >${_DAY}</span
          >
        </button>
      `;
			content.appendChild(dateBox);
		}
	}

	createDates();

	nextDate.addEventListener("click", () => {
		if (offset > (clearStringFromDigits(computedWidth) / 3 + 10) * allDates.length) {
			offset = 0;
		} else {
			offset += clearStringFromDigits(computedWidth) / 3 + 10;
		}
		innerContainer.style.transform = `translateX(-${offset}px)`;
	});

	previousDate.addEventListener("click", () => {
		if (offset === 0) {
			offset = (clearStringFromDigits(computedWidth) / 3 + 10) * (allDates.length + 1);
		} else {
			offset -= clearStringFromDigits(computedWidth) / 3 + 10;
		}
		innerContainer.style.transform = `translateX(-${offset}px)`;
	});
}

export default dateSelect;
