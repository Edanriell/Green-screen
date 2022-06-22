function changeDateField({ ticket, selectedDate }) {
	const ticketFields = document.querySelectorAll(ticket);
	const date = document.querySelector(selectedDate);

	ticketFields[1].innerText = date.innerText;
}

function changeTimeField({ ticket, selectedTime }) {
	const ticketFields = document.querySelectorAll(ticket);
	const time = document.querySelector(selectedTime);

	ticketFields[2].innerText = time.innerText;
}

function changePlaceAndRow({ ticket, selectedPlace }) {
	const ticketFields = document.querySelectorAll(ticket);
	const seats = document.querySelectorAll(selectedPlace);
	const values = [];
	const valuesData = new Set();

	for (let i = 0; i < seats.length; i++) {
		values.push(+seats[i].innerText);
	}
	for (let i = 0; i < seats.length; i++) {
		valuesData.add(+seats[i].dataset.row);
	}

	// eslint-disable-next-line no-unused-expressions
	seats.length <= 0
		? (ticketFields[4].innerText = "Выберете место")
		: (ticketFields[4].innerText = values.sort());
	// eslint-disable-next-line no-unused-expressions
	seats.length <= 0
		? (ticketFields[3].innerText = "Выберете место")
		: (ticketFields[3].innerText = Array.from(valuesData));
}

export { changeDateField, changeTimeField, changePlaceAndRow };
