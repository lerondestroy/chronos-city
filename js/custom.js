document.querySelector('.screen-1').addEventListener('click', function(e) {
	e.currentTarget.classList.add('start')

	setTimeout(() => {
		goTo(2)
		var typed = new Typed('#screen-2__typed', {
			strings: ['В городе происходит что-то странное. Найдите полковника среди людей, только он сможет обьяснить, что делать.'],
		});
	}, 4500);
})

document.querySelector('.screen-2').addEventListener('click', function(e) {
	if (e.target.classList.contains('screen-2__man') || e.target.closest('.screen-2__man')) {
		e.target.closest('.screen-2__man').classList.toggle('interviewed')
	}
})



function goTo(screen) {
	document.querySelectorAll('.screen').forEach(el => {
		el.classList.remove('active');
	});
	document.querySelector(`.screen-${screen}`).classList.add('active')
}