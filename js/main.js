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
