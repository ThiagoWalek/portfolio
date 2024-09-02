var res = document.getElementById('res');
var data_atual = new Date();
hora = data_atual.getHours();
if (hora < 12) {
    res.innerHTML = "Bom dia!";
} else if (hora < 18) {
    res.innerHTML = "Boa tarde!";
} else if (hora >= 18) {
    res.innerHTML = "Boa noite!";
}

// function menu() {
//     var items1 = document.querySelectorAll('nav.container > button');//ao inves do getElementsByClassName use para classes o querySelectorAll
//     var img = document.querySelector('nav.container > img');
//     img.style.background = "blue";

//     if(items1.style.display === "block"){
//         console.log("Entrou if 1");
//         items1.style.display = 'none';
//     } else if(items1.style.display == "none") {
//         items1.style.display = "block";
//         console.log("Entrou if 2");
//     }
// }
function menu() {
    var items1 = document.getElementsByClassName('items1');//ao inves do getElementsByClassName use para classes o querySelectorAll
    var nav_container = document.querySelector('nav.container')
    var header_container = document.querySelector('header.container')
    var img = document.querySelector('nav.container > img');

    for (var i = 0; i < items1.length; i++) {
        if (items1[i].style.display == "block") {
            console.log("Entrou if 1");
            items1[i].style.display = 'none';
            items1[i].style.width = '200px';
            nav_container.style.flexFlow = 'row nowrap';
            header_container.style.justifyContent = 'flex-start';
            header_container.style.flexFlow = 'row nowrap';
            header_container.style.height = '100px';
        } else {
            console.log("Entrou if 2");
            items1[i].style.display = 'block';
            items1[i].style.width = '100%';
            nav_container.style.flexFlow = 'column nowrap';
            header_container.style.justifyContent = 'flex-start';
            header_container.style.flexFlow = 'column nowrap';
            header_container.style.height = '345px';
        }
    }
}