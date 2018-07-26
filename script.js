let humanScore = 0
let compScore = 0

$('.human .button').hover(function() {
	$(this).toggleClass('hovered')
});

$('.human .button').click(function() {
	let humanMove = $(this).attr('data-move')
	let compMove = Math.floor(Math.random() * 3);

	$('.button').removeClass('win lose tie')

	console.log(`human chose ${humanMove}`)
	console.log(`computer chose ${compMove}`)
	
	if (humanMove == compMove) {
		$('.result h2').html("It's a tie!");
		$(this).toggleClass('tie');
		$(`.comp [data-move=${compMove}]`).toggleClass('tie');

	} else if (((humanMove + 1) % 3) == compMove) {
		$('.result h2').html('You Lose!');
		compScore += 1;
		$('.comp .score').html(`Score: ${compScore}`);
		$(this).toggleClass('lose');
		$(`.comp [data-move=${compMove}]`).toggleClass('win');		
	} else {
		$('.result h2').html('You Win!');
		humanScore += 1;
		$('.human .score').html(`Score: ${humanScore}`);
		$(this).toggleClass('win');
		$(`.comp [data-move=${compMove}]`).toggleClass('lose');
	}

	if (humanScore == 5) {
		$('.win-screen').toggle()
		$('.win-screen').css("display", "flex")
		$('.blur-wrapper').toggleClass('blur')
	}

	if (compScore == 5) {
		$('.lose-screen').toggle()
		$('.lose-screen').css("display", "flex")
		$('.blur-wrapper').toggleClass('blur')
	}
	
});

$('.replay').click(function() {
	location.reload();
});



