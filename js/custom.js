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
		goTo('3', 1000);
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

	setTimeout(() => {
		goTo('6-1');
	}, 15000);
})

let repaire = 0;

$('.compass').on('click', function (e) {
	e.stopPropagation()



	if ($(e.target).hasClass('to-repaire')) {
		$(e.target).addClass('repaired');
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
	$('.screen-2__man').removeClass('interviewed');
	$('.screen').removeClass('show-btn');
	$('.to-repaire').removeClass('repaired');
	$('.compass').removeClass('clicked');
	goTo('1');
});

let typed;

function goTo(screen, delay = 0) {
	let 	screenActive = document.querySelector(`.screen-${screen}`),
			screenAbout = screenActive.dataset.about;

	if (typed) {
		typed.destroy()
	}

	setTimeout(() => {

		document.querySelectorAll('.screen').forEach(el => {
			el.classList.remove('active');
		});
		screenActive.classList.add('active')
		if (screenAbout) {
			typed = new Typed(`#screen-${screen}__typed`, {
				strings: [screenAbout],
				onComplete() {
					screenActive.classList.add('show-btn')
					typed.stop()
				},
				// typeSpeed: 30
			});
			
		}
		
	}, delay);
}

function checkWin() {
	if (repaire == 7) {
		goTo('7');
	}
}