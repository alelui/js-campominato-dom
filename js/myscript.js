
const playBtn = document.getElementById('play');
playBtn.addEventListener('click', function(){

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


    const bombNumber = 16;
    
    const arrayBombs = [];

   while (arrayBombs.length < bombNumber){
       let randomNum = (Math.floor(Math.random() * boxNumber + 1));
       // esegue un controllo per evitare di inserire un numero gia presente nell'array
       if (!arrayBombs.includes(randomNum)){
           arrayBombs.push(randomNum);
       }
   }
   



    const bigBox = document.getElementById('big-box');
    bigBox.innerHTML = ''; // Serve per svuotare bigbox ogni volta che viene cliccato il tasto play 

    console.log(arrayBombs);
    
    for (let i = 1; i <= boxNumber; i++){

        const box = createItem(i,boxOnARow);

        //Inserisce l'elemento box creato, con tutte le modifiche, all'interno del padre
        bigBox.appendChild(box);

        box.addEventListener('click', function(){
            
            for (let i =0; i < arrayBombs.length; i++){
                if (box.textContent == arrayBombs[i]){
                    box.classList.add('boom');
                }else{
                    box.classList.add('active');
                } 
                // console.log(arrayBombs[i]); 
            }
            console.log(box.textContent);

        })
    }
    
    
})





//******* FUNCTION ******

function createItem(i,boxOnARow){
    //Crea il div dei quadrati
    const box = document.createElement('div')
    const size = `calc(100% / ${boxOnARow})`;
    //aggiunge al div dei quadrati la classe del css
    box.classList.add('cubox');
    //Aggiunge lunghezza ed altezza con style inline
    box.style.width = size;
    box.style.height = size;
        
    box.innerHTML = i;

    return box;
 }