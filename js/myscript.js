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
        //Crea il div dei quadrati
        const box = document.createElement('div')
        const size = `calc(100% / ${boxOnARow})`;
        //aggiunge al div dei quadrati la classe del css
        box.classList.add('cubox');
        //Aggunge lunghezza ed altezza con style inline
        box.style.width = size;
        box.style.height = size;

        box.innerHTML = i
        //Inserisce l'lemento box creata, con tutte le modifiche, all interno del padre
        bigBox.appendChild(box);
    }

    box.addEventListener('click', function(){
        this.classList.add('active');
    })
})


function (num){
    
}