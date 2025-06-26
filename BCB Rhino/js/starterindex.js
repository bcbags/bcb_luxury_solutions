
document.addEventListener("keypress", function() {
		soundcheck(event.key;
	});

function soundCheck(event) {
		var buttonInnerHtml = this.innerHTML;
		switch (this.innerHTML) {
			
			case ("Learn more"):
				var signIn = new Audio('./components/sounds/snare.mp3'); 
	signIn.play();
				break;
				
			case ("Sign-in"):
				this.innerHTML = "Sign-out";
				var tom1 = new Audio('./components/sounds/tom1.mp3'); 
	tom1.play();
				break;
				
			case ("s"):
				var tom2 = new Audio('sounds/tom2.mp3'); 
	tom2.play();
				break;
				
			case ("d"):
				var tom3 = new Audio('sounds/tom3.mp3'); 
	tom3.play();
				break;
				
			case ("j"):
				var tom4 = new Audio('sounds/tom4.mp3'); 
	tom4.play();
				break;
				
			case ("k"):
				var kick = new Audio('sounds/kick.mp3'); 
	kick.play();
				break;
				
			case ("l"):
				var crash = new Audio('sounds/crash.mp3'); 
	crash.play();
				break;
				
				
			default:
				
		}
	}*/
// JavaScript Document