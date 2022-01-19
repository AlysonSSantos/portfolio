const abrirSidebar = () => {
    document.getElementById("menuLateral").style.width="15rem";
}

const fecharSidebar = () => {
    document.getElementById("menuLateral").style.width=0;
}

const redirecionarAoHome = () => {
    window.scrollTo(0, 0)
}

const redirecionarSobre = () => {
    window.scrollTo(0, 679)
}


const redirecionarAConhecimentos = () => {
    window.scrollTo(0, 857)
}

const redirecionarAosProjetos = () => {
    window.scrollTo(0, 1180)
}

const redirecionarAoContate_me = () => {
    window.scrollTo(0, 1550)
}