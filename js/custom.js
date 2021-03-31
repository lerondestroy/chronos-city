document.querySelector('.screen-1').addEventListener('click', function(e) {
	e.currentTarget.classList.add('start')

	setTimeout(() => {
		goTo(2)
		var typed = new Typed('#screen-2__typed', {
			strings: ['В городе происходит что-то странное. Найдите полковника среди людей, только он сможет обьяснить, что делать.'],
		});
	}, 4500);
})





function goTo(screen) {
	document.querySelectorAll('.screen').forEach(el => {
		el.classList.remove('active');
	});
	document.querySelector(`.screen-${screen}`).classList.add('active')
}