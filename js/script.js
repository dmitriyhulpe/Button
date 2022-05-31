const button = document.querySelectorAll('.button');

button.forEach(function(index) {
	index.addEventListener('click', function(event) {
		event.preventDefault();
		
		let x = event.clientX - event.target.offsetLeft;
		let y = event.clientY - event.target.offsetTop;

		let ripples = document.createElement('span');
		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.appendChild(ripples);

		setTimeout(function() {
			ripples.remove()
		}, 1000);
	});
});