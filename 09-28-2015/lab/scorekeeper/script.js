		$('#result').css('color', 'red');

		var score = 0;

		$('#reset').on('click', reset);
		$('#add5').on('click', addFive);
		$('#add10').on('click', addTen);
		$('#min1').on('click', minusOne);

		function reset() {
			score = 0;
			updateResult(score);
		}

		function addFive() {
			score = score + 5;
			updateResult(score);
		}

		function addTen() {
			score = score + 10;
			updateResult(score);
		}

		function minusOne() {
			score = score - 1;
			updateResult(score);
		}

		function updateResult(pizza) {
			$('#result').html(pizza);
		}