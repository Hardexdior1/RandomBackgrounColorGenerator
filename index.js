
let small=document.querySelector('.small')
small.textContent='coded by <>oluwadamilare</>'








function Colors(){
  let colors = [
    "#440",
    "#406",
    "#e40",
    "#cd0",
    "#4de",
    "#4e0",
    "#85d",
    "#48d",
    "#140",
    "#234",
    "#4a0",
    '#004fab',
    '#008000',
    '#008080',
    '#008',
    '#708090',
    '#8a2be2',
    '#ffd700',
    '#808b67',
    '#8b4513',
    '#ff4500',
    '#457',
    '#2f0',
    '#f40',
    '#f38'



    ];
  
  let colorsValue=document.querySelector('.colorsValue');
  let random=Math.floor(Math.random()*colors.length);
  
  let randomAndColors=colors[random];
  colorsValue.textContent=randomAndColors
  
  document.body.style.background=randomAndColors
}




// Colors()

let generateColors=document.querySelector('.generateColors')
generateColors.addEventListener('click',()=>{
  Colors();
})