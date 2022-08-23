// scroll é rolagem, ligar o scroll
//DOM = é o nosso html modelo modelo como objeto para o javascript
function onScroll() {
    // console.log('Scroll pagina')
    if (scrollY > 0) {
        //Adicionando uma classe na tag navigation_bar
        navigation_bar.classList.add('scroll')
    } else {
        navigation_bar.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
    //mostrando o botao close do menu
    // close_menu_button.style.display = 'block'
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
    //removendo o botao close do menu
    // close_menu_button.style.display = 'none'
}
//1:58 = arrumar o botao de fechar
