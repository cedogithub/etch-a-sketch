let container = document.querySelector('.container');
let div = document.createElement('div');
let gridCount = document.querySelector('.grid-count')

function makeRows(rows,columns) {
    container.style.setProperty("--grid-rows", rows)
    container.style.setProperty("--grid-columns", columns)

    for (let i = 0; i < (rows*columns); i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = 'grid-item';
    }


}
makeRows(16,16);
color();
function color(){
    let gridItem = document.querySelectorAll('.grid-item');
for (let i = 0; i < gridItem.length; i++) {
     gridItem[i].addEventListener('mouseover', (e) =>{
       e.target.style.backgroundColor = 'red';
     })
   }
}


gridCount.addEventListener('click', (e) =>{
    let param = parseInt(prompt('number of squares per side'));
    container.innerHTML =''
    makeRows(param,param)
    color();
})    

