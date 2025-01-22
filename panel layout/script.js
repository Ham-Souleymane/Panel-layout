const panels = document.querySelectorAll('.panel');
function toggleopen(){
this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click',toggleopen));