
const contentDiv = document.getElementById('box1');
const heading = document.getElementById('heading');
const paragraph = document.getElementById('para');

const inputBg = document.getElementById('input-bg');
const inputHeading = document.getElementById('input-heading');
const inputPara = document.getElementById('input-para');
const btnReset = document.getElementById('btn-reset');


function changeBg() {
    contentDiv.style.backgroundColor = inputBg.value;
}

function changeHeadingColor() {
    heading.style.color = inputHeading.value;
}

function changeParaColor() {
    paragraph.style.color = inputPara.value;
}

function resetPage() {
    window.location.reload();
}



inputBg.addEventListener('input', changeBg);
inputHeading.addEventListener('input', changeHeadingColor);
inputPara.addEventListener('input', changeParaColor);
btnReset.addEventListener('click', resetPage);