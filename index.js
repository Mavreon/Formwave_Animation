const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = 
    //Split string into individual elements...
    label.innerText.split('')
    .map((letter, idx)=> `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('');
});