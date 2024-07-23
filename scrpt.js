
let resultado = document.querySelector('.resultado');

let inputvlr1 =document.getElementById('primervlr');
let inputvlr2 =document.getElementById('sdovlr');
let total = 0;

document.addEventListener('click', e =>{
    document.getElementById('#conitem1').style.display = 'none';
    document.getElementById('#conitem2').style.display = 'none';
    document.getElementById('#conitem3').style.display = 'none';
    if(e.target.matches('#Calculador')){
        document.getElementById('#conitem1').style.display = 'flex';
    }else if(e.target.matches('#Ejercicio')){
        document.getElementById('#conitem2').style.display = 'flex';
    }
    else if(e.target.matches('#Soluciones')){
        document.getElementById('#conitem3').style.display = 'flex';
    }else if(e.target.matches('#bsuma')){
        document.getElementById('#conitem3').style.display = 'inline';
        total = ((parseFloat(inputvlr2.value)*parseFloat(inputvlr2.value)) - (parseFloat(inputvlr1.value)*parseFloat(inputvlr1.value)))/2
        resultado.innerHTML = total;
    }
})
