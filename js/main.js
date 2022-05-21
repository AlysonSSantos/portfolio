
const abrirSidebar = () => {
    document.getElementById("menuLateral").style.width="15rem";
}

const fecharSidebar = () => {
    document.getElementById("menuLateral").style.width=0;
}

const redirecionarAoHome = () => {
    window.scrollTo(0, 0)
    document.getElementById3("bottomNavTextHome").style.color="#4D5ACB"
    const setColor = setTimeout(function(){
        document.getElementById("bottomNavTextSobre").style.color="#fff"
    }, 2000)
}

const redirecionarAoSobre = () => {
    location.href="#sobre"
    document.getElementById("bottomNavTextSobre").style.color="#4D5ACB"
    const setColor = setTimeout(function(){
        document.getElementById("bottomNavTextSobre").style.color="#fff"
    }, 2000)
}

const redirecionarAConhecimentos = () => {
    location.href="#conhecimentos"
    document.getElementById("bottomNavTextConhecimentos").style.color="#4D5ACB"
    const setColor = setTimeout(function(){
        document.getElementById("bottomNavTextConhecimentos").style.color="#fff"
    }, 2000)
}

const redirecionarAosProjetos = () => {
    location.href="#projetos"
    document.getElementById("bottomNavTextProjetos").style.color="#4D5ACB"
    const setColor = setTimeout(function(){
        document.getElementById("bottomNavTextProjetos").style.color="#fff"
    }, 2000)
}

const redirecionarAoContate_me = () => {
    location.href="#contatar"
    document.getElementById("bottomNavTextContate").style.color="#4D5ACB"
    const setColor = setTimeout(function(){
        document.getElementById("bottomNavTextContate").style.color="#fff"
    }, 2000)
}


const fixarDesktopMenu = () =>{
    window.onscroll = () =>{
        var top = document.documentElement.scrollTop

        if(top > 636){
            document.getElementById("BottomNavigation").style.display="block"
        }else{
            document.getElementById("BottomNavigation").style.display="none"
        }
    }
}

const redirect = (way) =>{
    switch(way){
        case "facebook":
            window.open("https://www.facebook.com/alyson.santos.07/", "_blank")
        break

        case "instagram":
            window.open("https://www.instagram.com/alyson_s_/", "_blank")
        break

        case "linkedin":
            window.open("https://www.linkedin.com/in/alyson-santos-54995322a/", "_blank")
        break

        case "github":
            window.open("https://github.com/AlysonSSantos", "_blank")
        break
        case "githubRepo":
            window.open("https://github.com/AlysonSSantos?tab=repositories", "_blank")
        break
        case "websitelimpeza":
            window.open("https://info.matiasprocleaning.com/contact-us", "_blank")
        break
        case "listadegastos":
            window.open("http://lista-de-gastos.vercel.app/", "_blank")
        break
        case "login":
            window.open("https://login-seven-mu.vercel.app/", "_blank")
        break
        case "pedrapapeltesoura":
            window.open("https://pedra-papel-tesoura-beta.vercel.app/", "_blank")
        break
        case "pokedex":
            window.open("https://pokedex-l2d20g23o-alysonssantos.vercel.app/", "_blank")
        break
    }
       
}





