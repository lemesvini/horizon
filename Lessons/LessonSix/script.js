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

// FETCH DOS VOCABS DO JSON
const vocabDiv1 = document.getElementById('vocab1'); // Select the container div for vocab1EN
const vocabDiv2 = document.getElementById('vocab2'); // Select the container div for vocab1PT
const vocabDiv3 = document.getElementById('vocab3col1'); // Select the container div for vocab3col1
const vocabDiv4 = document.getElementById('vocab3col2'); // Select the container div for vocab3col2

fetch('./vocab.json')
    .then(res => res.json())
    .then(data => {
        const enData1 = data.vocab1EN;
        const ptData1 = data.vocab1PT;

        if (enData1.length !== ptData1.length) {
            console.error('Error: English and Portuguese word arrays have different lengths');
            return;
        }

        for (let i = 0; i < enData1.length; i++) {
            // Create a new div for each word pair
            const wordPairDiv1 = document.createElement('div');
            wordPairDiv1.className = 'vocabitems';
            wordPairDiv1.innerHTML = `
                <p class="vocaben">${enData1[i]}</p>
                <p class="vocabpt">${ptData1[i]}</p>
            `;
            vocabDiv1.appendChild(wordPairDiv1); // Append to vocabDiv1

        }
    })
    .catch(error => {
        console.error('Error Fetch:', error);
    });

    fetch('./vocab.json')
    .then(res => res.json())
    .then(data => {
        const enData2 = data.vocab2EN;
        const ptData2 = data.vocab2PT;

        if (enData2.length !== ptData2.length) {
            console.error('Error: English and Portuguese word arrays have different lengths');
            return;
        }

        for (let i = 0; i < enData2.length; i++) {
            // Create a new div for each word pair
            const wordPairDiv1 = document.createElement('div');
            wordPairDiv1.className = 'vocabitems';
            wordPairDiv1.innerHTML = `
                <p class="vocaben">${enData2[i]}</p>
                <p class="vocabpt">${ptData2[i]}</p>
            `;
            vocabDiv2.appendChild(wordPairDiv1); // Append to vocabDiv2

        }
    })
    .catch(error => {
        console.error('Error Fetch:', error);
    });

    fetch('./vocab.json')
    .then(res => res.json())
    .then(data => {
        const enData3 = data.vocab3EN;
        const ptData3 = data.vocab3PT;

        if (enData3.length !== ptData3.length) {
            console.error('Error: English and Portuguese word arrays have different lengths');
            return;
        }

        for (let i = 0; i < enData3.length; i++) {
            // Create a new div for each word pair
            const wordPairDiv1 = document.createElement('div');
            wordPairDiv1.className = 'vocabitems';
            wordPairDiv1.innerHTML = `
                <p class="vocaben">${enData3[i]}</p>
                <p class="vocabpt">${ptData3[i]}</p>
            `;
            vocabDiv3.appendChild(wordPairDiv1); // Append to vocabDiv3

        }
    })
    .catch(error => {
        console.error('Error Fetch:', error);
    });

    fetch('./vocab.json')
    .then(res => res.json())
    .then(data => {
        const enData4 = data.vocab4EN;
        const ptData4 = data.vocab4PT;

        if (enData4.length !== ptData4.length) {
            console.error('Error: English and Portuguese word arrays have different lengths');
            return;
        }

        for (let i = 0; i < enData4.length; i++) {
            // Create a new div for each word pair
            const wordPairDiv1 = document.createElement('div');
            wordPairDiv1.className = 'vocabitems';
            wordPairDiv1.innerHTML = `
                <p class="vocaben">${enData4[i]}</p>
                <p class="vocabpt">${ptData4[i]}</p>
            `;
            vocabDiv4.appendChild(wordPairDiv1); // Append to vocabDiv4

        }
    })
    .catch(error => {
        console.error('Error Fetch:', error);
    });

    function phonewidth() {
        var screenWidth = window.innerWidth;
        var links = document.getElementsByClassName('classitem');
        var iconClasses = ['fa-fire', 'fa-spell-check', 'fa-circle-plus', 'fa-circle-plus', 'fa-pen'];
    
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
    