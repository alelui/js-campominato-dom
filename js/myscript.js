// alert('Ciaone');

const playBtn = document.getElementById('play');
// console.log(playBtn);

playBtn.addEventListener('click', function(){

    const bigBox = document.getElementById('big-box');
    bigBox.innerHTML = '';

    const levelSelected = parseInt(document.getElementById('level').value);
    // console.log(levelSelected);
    let boxNumber;

    switch (levelSelected){
        case 1:
            boxNumber = 100;
            break;
        case 2:
            boxNumber = 81;
            break;
        case 3:
            boxNumber = 49;
            break;
    }

    let boxOnARow = Math.sqrt(boxNumber);
    // console.log(boxNumber);
    // console.log(boxOnARow);
    
    for (let i = 1; i <= boxNumber; i++){

        const box = document.createElement('div')
        const size = `calc(100% / ${boxOnARow})`;
        box.classList.add('cubox');
        box.style.width = size;
        box.style.height = size;

        box.innerHTML = i

        bigBox.appendChild(box);
    }
})