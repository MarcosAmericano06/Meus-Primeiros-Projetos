var fundo = document.getElementById("fundo")
var img = document.createElement('img')
img.setAttribute('id', 'foto')
var kite = url('kite.jpg')
var feio = url('wind.jpg')



function teste() {
    //alert('deu certo')
    fundo.style.backgroundImage = "url('wind.jpg')"
}
function teste2() {
    fundo.style.backgroundImage = "url('kite.jpg')"
}
function teste3() {
    fundo.style.backgroundImage = "url('handebol.jpg')"
}