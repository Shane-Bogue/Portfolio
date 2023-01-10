"use strict";

// Create a class
class project {
    constructor (title, description, link) {
        this.title = title;
        this.description = description;
        this.link = link;
    }
}

const Projects = [
    new project (
        '',
        '',
        '',
    ),
    new project (
        'Calculator',
        'A calculator website made with javscript.',
        'https://shane-bogue.github.io/Calc/',
    ),
    new project (
        'FlexBox',
        'Simple FlexBox Practice.',
        'https://shane-bogue.github.io/FlexBox/',
    ),
    new project (
        'Arizona',
        'My first website.',
        'https://shane-bogue.github.io/Arizona/',
    ),
    new project (
        'Jquery',
        'A template website made with the javascript library <i>Jquery</i>.',
        'https://shane-bogue.github.io/Jquery/',
    ),
    new project (
        'Full Stack Developer',
        'Hey, I\'m <i> Shane Bogue</i>. I\'m a Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus enim beatae exercitationem dolorum ipsum totam provident recusandae eaque iure culpa aliquid, nostrum ipsam itaque unde nihil. Molestias, numquam sequi!',
        'https://shane-bogue.github.io/Resume/',
    ),
    new project (
        'Quiz',
        'A 10 question quiz (Kahoot.it Inspired!) over css principles utilizing intermediate javascript concepts.',
        'https://shane-bogue.github.io/Quiz/',
    ),
    new project (
        'Game',
        'A javascript game made with the intent and to design for mobile first with a very simple game loop.',
        'https://shane-bogue.github.io/Space/',
    ),
    new project (
        'Photo Gallery',
        'A photo gallery template utilizing a simple grid, and creating an responsize interface to display a mastery of css selectors.',
        'https://shane-bogue.github.io/UV/',
    ),
    new project (
        'Form',
        'A fundraising form to display a mastery of html forms and regex.',
        'https://shane-bogue.github.io/Form/',
    )];

window.scrollTo({top: 0, behavior: 'smooth'});

const cards = () => {
    let cardNumber = 0;
    let cardSelected = document.querySelector('.⬜:nth-child(5)');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const cardList = document.querySelectorAll('.⬜')
    const footer = document.querySelector('footer')
    const half = ((cardList.length+1)/2)
    colorCards()

    
    cardList.forEach(ele => {
            ele.addEventListener("click", function click () {
            title.textContent = `${Projects[ele.id].title}`
            description.innerHTML = `${Projects[ele.id].description}`
            footer.style.marginLeft = `${Math.round(-1 * (ele.id - half)*(100/cardList.length))}%`
            if (ele == cardSelected) window.open( `${Projects[ele.id].link}`, '_blank');
            cardSelected = ele;
            cardNumber = half - ele.id
            colorCards()
        });
    })

    function colorCards() {
        let id = 0;
        cardList.forEach(ele => {
            ele.children[0].textContent = ''
            id++
            cardNumber++
            ele.id = id
            ele.style.opacity = scale(cardNumber)
            ele.style.width = `${16* scale(cardNumber)}vh`
            ele.style.height = `${16* scale(cardNumber)}vh`
            if (cardNumber < 1 || cardNumber > cardList.length) {
                ele.style.width = `0vw`
                ele.style.height = `0vw`
            }
            if (ele.style.opacity < .99) {ele.style.opacity -= .3}
        })
        cardSelected.children[0].textContent = 'Click Me!'
        cardSelected.children[0].style.color = 'white'
        cardSelected.style.backgroundColor = 'white'
    }

    function scale(x){
        return (-1 * (x-half)**2+half**2)/half**2
    }
}

cards()
