const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr<10) {
        hr = '0' + hr;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (seg < 10) {
        seg = '0' + seg;
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})

// FUNCAO PARA DATA

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const calendario = setInterval(function time(){
    let dateToday = new Date();
    let d = dateToday.getDate();
    let m = dateToday.getMonth();
    let a = dateToday.getFullYear();

    if (m) {
        m = m + 1;
    }

    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = a;
})