var button = document.querySelector('button.read-button');

function carregar() {
    var card= document.querySelector('.card')
    card.classList.toggle('active')

    if(card.classList.contains('active')){
        return button.textContent= 'Ler menos'
    }

    return button.textContent= 'Ler mais'
}