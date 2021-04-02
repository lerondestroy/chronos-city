document.querySelector('.screen-1').addEventListener('click', function(e) {
	e.currentTarget.classList.add('start')

	goTo('2', 0)
	e.currentTarget.classList.remove('start')
})

document.querySelector('.screen-2').addEventListener('click', function(e) {
	if (e.target.classList.contains('screen-2__man') || e.target.closest('.screen-2__man')) {
		e.target.closest('.screen-2__man').classList.toggle('interviewed')
	}

	if (e.target.closest('.screen-2__man--boss')) {
		goTo('3', 0);
	}
})

document.querySelector('.screen-3 .btn').addEventListener('click', function(e) {
	goTo('4');
})

document.querySelector('#screen-4__fall').addEventListener('click', function(e) {
	goTo('4-1');
})

document.querySelector('#btn-to-5').addEventListener('click', function(e) {
	goTo('5');
})

document.querySelector('.screen-5 .btn').addEventListener('click', function(e) {
	goTo('6');
})

let repaire = 0;

$('.compass').on('click', function (e) {
	e.stopPropagation()



	if ($(e.target).hasClass('wire')) {
		$(e.target).addClass('repaired');
		repaire += 1;
	}

	if ($(e.target).hasClass('compass__btn')) {
		$(e.target).addClass('selected');
		repaire += 1;
	}

	if ($(e.target).hasClass('compass')) {
		$(e.target).addClass('clicked');
		repaire += 1;
	}
	console.log(e.target, repaire)
	checkWin()
});



$('.go-home').on('click', function () {
	goTo('1');
});


function goTo(screen, delay = 0) {
	let 	screenActive = document.querySelector(`.screen-${screen}`),
			screenAbout = screenActive.dataset.about;


	setTimeout(() => {

		document.querySelectorAll('.screen').forEach(el => {
			el.classList.remove('active');
		});
		screenActive.classList.add('active')
		if (screenAbout) {
			let typed = new Typed(`#screen-${screen}__typed`, {
				strings: [screenAbout],
				onComplete() {
					screenActive.classList.add('show-btn')
				},
				// typeSpeed: 30
			});
		}
		
	}, delay);
}

function checkWin() {
	if (repaire == 6) {
		goTo('7');
	}
}