
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
   // console.log(arrayBombs);



    const bigBox = document.getElementById('big-box');
    bigBox.innerHTML = ''; // Serve per sfuotare bigbox ogni folta che viene cliccato il tasto play 
    
    for (let i = 1; i <= boxNumber; i++){


        const box = createItem(i,boxOnARow);

        //Inserisce l'elemento box creato, con tutte le modifiche, all'interno del padre
        bigBox.appendChild(box);

        box.addEventListener('click', function(){
            
            // if(arrayBombs.includes(this.textContent)){
            //     this.classList.add('boom');
            // }else{
                this.classList.add('active');
            // }  
        })
        // console.log(box);
        // for (let j = 0; j < arrayBombs.length; j++){
            // }
    }
    console.log(arrayBombs);

})





//******* FUNCTION ******

function createItem(i,boxOnARow){
    //Crea il div dei quadrati
    const box = document.createElement('div')
    const size = `calc(100% / ${boxOnARow})`;
    //aggiunge al div dei quadrati la classe del css
    box.classList.add('cubox');
    //Aggunge lunghezza ed altezza con style inline
    box.style.width = size;
    box.style.height = size;
        
    box.innerHTML = i;

    return box;
 }