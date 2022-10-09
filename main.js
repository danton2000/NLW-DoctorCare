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
    //passando o nome da sessao como parametro
    //será que da pra mandar um for no .menu, pegando os links(nome)? TEM ATÉ TEM, só que eu preciso enviar o obj que está no id da section, e não o texto do id
    activateMenuattCurrentSection(home)
    activateMenuattCurrentSection(services)
    activateMenuattCurrentSection(testimonys)
    activateMenuattCurrentSection(about)
    activateMenuattCurrentSection(contact)
}

function activateMenuattCurrentSection(section) {
    // ativar o menu na sessão do momento(atual)
    // pegando o tamanho da view com js + a localizacao do scroll na tela, e dividindo por 2, para ter uma linha invisiel no meio daquela "sessao"
    // linha alvo
    const targetLine = scrollY + innerHeight / 2
    // console.log(targetLine)
    // verificar se a sessao passou da linha
    // quais dados vou precissar
    //offsetTop qual é o top desse elemento
    const sectionTop = section.offsetTop
    // console.log(home.offsetTop)
    //tamanho da sessao, Deslocamento de altura
    const sectionHeight = section.offsetHeight
    // console.log(sectionHeight)

    //verificar se a parte do top(sectionTop) passou da linha imaginaria(targetLine)
    //o topo da sessão chegou ou passou da linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    console.log(
        'O topo da seção chegou ou passou da linhas ? ',
        sectionTopReachOrPassedTargetLine
    )

    //verificaar se a base está abaixo da linha alvo
    //quais dados vou precissar?
    //sessao termina onde
    //top da sessao + o tamanho dela é igual ao fim da sessao
    const sectionEndAt = sectionTop + sectionHeight

    // console.log(sectionEndAt)
    // final da sessao passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndAt <= targetLine

    console.log(
        'O fundo da seção passou da linhas ? ',
        !sectionEndPassedTargetLine
    )

    //limites da seção, top tem que ter passado, e o fundo não tem que ter passado
    const sectionBoundaries =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    // console.log(sectionBoundaries)

    //pesquisa pelo seletor menu(.menu a)
    //getAtrribute = pegar o abributo que eu tenho na section, atributo id da section
    const sectionId = section.getAttribute('id')

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    //começa removendo a class, se entrar no if ele add a classe
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
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
    #testimonys header,
    #testimonys .cards,
    #about header,
    #about content`)

// Slider

let $responsiveCarousel = document.querySelector(".js-carousel--responsive");
 
new Glider($responsiveCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".js-carousel--responsive-dots",
    arrows: {
      prev: ".js-carousel--responsive-prev",
      next: ".js-carousel--responsive-next",
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  });