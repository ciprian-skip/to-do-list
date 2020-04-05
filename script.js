particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 50,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#636FA4"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000"
			},
			"polygon": {
				"nb_sides": 6
			},
			"image": {
				"src": "img/github.svg",
				"width": 50,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.2,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 0.5,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 100,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 100,
				"size_min": 70,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 200,
			"color": "#ffffff",
			"opacity": 1,
			"width": 2
		},
		"move": {
			"enable": true,
			"speed": 5,
			"direction": "top",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "grab"
			},
			"onclick": {
				"enable": false,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});

var list = document.querySelector('ul');
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementsByClassName("del");

var dels = document.querySelectorAll('.deleteButton');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var removeButton = document.createElement("button");
	removeButton.classList.add("deleteButton");
	li.appendChild(document.createTextNode(input.value));
	removeButton.innerHTML = "<i class='fas fa-times fa-2x'></i>";
	li.appendChild(removeButton);
	ul.appendChild(li);
	removeButton.addEventListener("click", function() {
		this.parentElement.remove();
	});
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strike(ev){
	if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
        del.classList.toggle('dontstrike');
	  }
	}

function removeItem(ev){
	if(ev.target.tagName === "button") {
		ev.target.classList.toggle("inactive");
    }
}

list.addEventListener('click', strike);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
del.addEventListener("click", removeItem);


