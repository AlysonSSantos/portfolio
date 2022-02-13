const abrirSidebar = () => {
    document.getElementById("menuLateral").style.width="15rem";
}

const fecharSidebar = () => {
    document.getElementById("menuLateral").style.width=0;
}

const redirecionarAoHome = () => {
    window.scrollTo(0, 0)
}

const redirecionarAoSobre = () => {
    location.href="#sobre"
}

const redirecionarAConhecimentos = () => {
    location.href="#conhecimentos"
}

const redirecionarAosProjetos = () => {
    location.href="#projetos"
}

const redirecionarAoContate_me = () => {
    location.href="#contatar"
}

/*
const fixarDesktopMenu = () =>{
    if(window.scrollY > 200){
        document.getElementById("header").style.position="fixed"
    }else{
        document.getElementById("header").style.position="relative"
    }
}
*/