var navbar = document.querySelector('#navbar');
var logo_welcome = document.querySelector('#logo-welcome');
console.log(document.querySelector('body'));

document.addEventListener('scroll', e=>{
	// console.log(document.documentElement.scrollTop);
	let logo_wel_width = 50-(document.documentElement.scrollTop)*45/380;
	logo_welcome.setAttribute('style', `width: ${logo_wel_width}vw`);
	// if(navbar.getBoundingClientRect().height > logo_welcome.getBoundingClientRect().height){
	// 	console.log('wfwfdvwefv');
	// }
	if(document.documentElement.scrollTop >= 230){
		let opacity = (document.documentElement.scrollTop - 230)/300;
		let height = 15 - (document.documentElement.scrollTop - 230)*7/500;
		if(height < 7.8){
			height = 7.8;
		}
		navbar.setAttribute('style', `background:rgba(30, 41, 56, ${opacity}) !important;` + `height: ${height}vh !important`);
	}else{
		navbar.setAttribute('style', 'background:rgba(30, 41, 56, 0) !important');
		// navbar.setAttribute('style', `height: 15vh !important`);
	}
});
