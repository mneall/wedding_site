	var slideIndex = 1,
		myAutoPlay,
		dots;
	showDivs(slideIndex);

	function plusDivs(n) {
  		showDivs(slideIndex += n);
	}

	function currentDiv(n){
		stopAnimate();
		showDivs(slideIndex = n);
	}

	function showDivs(n) {
	  	var i;
	  	var x = document.getElementsByClassName("mySlides");
	  	var dotCollection = document.getElementsByClassName("dot");
	  	var elements = Array.prototype.slice.call(x);
	  	dots = Array.prototype.slice.call(dotCollection);

	  	elements.forEach(function(element){
	  		element.classList.remove('show');
	  	});
	  	dots.forEach(function(dot){
	  		dot.classList.remove('w3-white');
	  	});
	  	if (n > x.length) {slideIndex = 1}
	  	if (n < 1) {slideIndex = x.length}
	  	x[slideIndex-1].classList.add('show');
	  	dots[slideIndex-1].classList.add('w3-white');
	}
	function animate(){
		slideIndex = dots.length;
		myAutoPlay = setInterval(function(){ plusDivs(1) }, 4000);
	}

	animate();

	function stopAnimate(){
		clearInterval(myAutoPlay);
	}
