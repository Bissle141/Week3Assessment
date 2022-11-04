console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');

	alert("Your form has been submitted!")
}

const imgCompliment = () => {
	alert('You are frustratingly beautiful ^-^')
}

let form = document.querySelector('#contact');
let image = document.querySelector('img')

form.addEventListener('submit', handleSubmit);

image.addEventListener('mouseover', imgCompliment);