var cards = document.querySelectorAll(".w-card");

for(var i=0; i<cards.length; ++i){
	cards[i].setAttribute('data-toggle', 'modal');
	cards[i].setAttribute('data-target', `#modal${i+1}`);
}