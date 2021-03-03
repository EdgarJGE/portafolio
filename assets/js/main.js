//Get Elememnts
let work1 = document.getElementById('work-1');
let work2 = document.getElementById('work-2');
let work3 = document.getElementById('work-3');
let work4 = document.getElementById('work-4');

//Change the visibility of an element
const showElement = (tech) => {
    const isVisible = document.getElementById(tech).style.visibility;
    if (isVisible === 'hidden') {
        document.getElementById(tech).style.visibility = 'visible';
    } else {
        document.getElementById(tech).style.visibility = 'hidden';
    }
}

//Runs the function when the user clicks an element
work1.onclick = function () {
    showElement('technologies-1');
}
work2.onclick = function () {
    showElement('technologies-2');
}
work3.onclick = function () {
    showElement('technologies-3');
}
work4.onclick = function () {
    showElement('technologies-4');
}


