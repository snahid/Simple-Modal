"use strict"
//modal content
var modal = document.getElementById('modal-bd');
//modal btn
var modalbtn = document.getElementById('modalBtn');
//close btn
var closebtn = document.getElementById('colse-btn');
//modal addListner
modalbtn.addEventListener('click', openModal);
//function for open modal
function openModal(){
	modal.style.display = 'block';
}
//close addListener
closebtn.addEventListener('click', closeModal);
//function for close modal
function closeModal(){
	modal.style.display = 'none';
}
window.addEventListener('click', outsideModel);
function outsideModel(e){
	if(e.target == modal){
		modal.style.display = 'none';
	}
}