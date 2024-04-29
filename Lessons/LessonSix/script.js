//TROCAR ITEM DA AULA
function changeContent(classitem, link) {
    var classContent = document.getElementsByClassName("classContent");

    // esconde todos os conteúdos
    for (var i = 0; i < classContent.length; i++) {
        classContent[i].style.display = "none";
    }

    // mostra o item selecionado
    document.getElementById("class" + classitem).style.display = "block";
    
    // Remove o destaque do sidebarbox dos itens
    var classLinks = document.getElementsByClassName("classitem");
    for (var i = 0; i < classLinks.length; i++) {
        classLinks[i].classList.remove("selected");
    }
    // Destaca o item atual
    link.classList.add("selected");
}
function killframe(){
    const MF = document.getElementById('mainframe');
    MF.style.display = "none";
    document.getElementById('audiocontrol').style.display = "flex";
    document.getElementById('headericons').style.display = "none";
}

function callframe(){
    document.getElementById('mainframe').style.display = "block";
    document.getElementById('audiocontrol').style.display = "none";
    document.getElementById('headericons').style.display = "flex";
}
function playAudio() {
    const audio = document.getElementById('audiofile');
    audio.play();
  }


    function phonewidth() {
        var screenWidth = window.innerWidth;
        var links = document.getElementsByClassName('classitem');
        var iconClasses = ['fa-fire', 'fa-circle-plus', 'fa-circle-plus', 'fa-circle-plus'];
    
        if (screenWidth <= 767) {
            // Update content and width for smaller screens
            for (var i = 0; i < links.length; i++) {
                links[i].innerHTML = '<i class="fa-solid ' + iconClasses[i] + '"></i>';
                links[i].style.width = '20%';
            }
        } else {
            // Update content for larger screens
            var linkContent = ['Warm-Up', 'Verb to Be', 'Auxiliaries', '3rd Person'];
            for (var i = 0; i < links.length; i++) {
                links[i].innerHTML = '<i class="fa-solid fa-' + getIconClass(linkContent[i]) + '"></i> ' + linkContent[i];
                links[i].style.width = ''; // Reset width
            }
        }
    }
    
    function getIconClass(text) {
        switch (text) {
            case 'Warm-Up':
                return 'fire';
            case 'Verb to Be':
                return 'circle-plus';
            case 'Auxiliaries':
                return 'circle-plus';
            case '3rd Person':
                return 'circle-plus';
            default:
                return '';
        }
    }
    
    window.onload = phonewidth;
    window.onresize = phonewidth; // Call the function when the window is resized
    