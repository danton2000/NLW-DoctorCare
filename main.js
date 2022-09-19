//adicionando um evento direto na janela, funcão q recebe scroll
//ouvinte
window.addEventListener('scroll', onScroll)

//quando carregar o arquivo executa o onScroll
onScroll()

// scroll é rolagem, ligar o scroll
//DOM = é o nosso html modelo modelo como objeto para o javascript
function onScroll() {
    // console.log('Scroll pagina')
    // gerencia os scrolls da pagina
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuattCurrentSection()
}

function activateMenuattCurrentSection() {
    // ativar o menu na sessão do momento(atual)
    // pegando o tamanho da view com js + a localizacao do scroll na tela, e dividindo por 2, para ter uma linha invisiel no meio daquela "sessao"
    // linha alvo
    const targetLine = scrollY + innerHeight / 2
    // console.log(targetLine)
    // verificar se a sessao passou da linha
    // quais dados vou precissar
    //offsetTop qual é o top desse elemento
    const sectionTop = home.offsetTop
    // console.log(home.offsetTop)
    // 01:53
}

function showNavOnScroll() {
    // mostrar nav ao fazer scroll
    if (scrollY > 0) {
        //Adicionando uma classe na tag navigation_bar
        navigation_bar.classList.add('scroll')
    } else {
        navigation_bar.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    // console.log(scrollY)
    // mostrar nav ao fazer scroll
    if (scrollY > 550) {
        //Adicionando uma classe na tag navigation_bar
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
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
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services header,
    #services .cards,
    #about header,
    #about content`)
