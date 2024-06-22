window.addEventListener('DOMContentLoaded', () => {
    var footer = document.getElementById('footer');
    var footerHeight = footer.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var windowHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  
    if (windowHeight > window.innerHeight) {
        footer.style.position = 'relative';
        footer.style.bottom = '1%';
    } else {
        footer.style.position = 'absolute';
        footer.style.bottom = '1%';
        footer.style.left = '5%';
    }

    // ------------------------------------------------
    let accueil = document.querySelector('nav a#a');
    let about = document.querySelector('nav a#b');
    let project = document.querySelector('nav a#c');
    let contact = document.querySelector('nav a#d');
    let sections = document.querySelectorAll('section');

    function getCurrentSection() {
        let currentSection = '';
        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section.id;
            }
        });
        return currentSection;
    }

    function updateNav() {
        let currentSection = getCurrentSection();
        if(!currentSection) return;
        
        accueil.classList.remove('selected');
        about.classList.remove('selected');
        project.classList.remove('selected');
        contact.classList.remove('selected');
        
        switch(currentSection) {
            case 'accueil':
                accueil.classList.add('selected');
                break;
            case 'about':
                about.classList.add('selected');
                break;
            case 'projects':
                project.classList.add('selected');
                break;
            case 'contact':
                contact.classList.add('selected');
                break;
        }
    }

    window.addEventListener('scroll', updateNav);
    updateNav();

    // --------------------------------------------------------
    

    let buttons = document.querySelectorAll('nav a');
    let list = Array.from(buttons);
    list.push(document.querySelector('a.about'))
    
    list.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            if (button.getAttribute('href') == "#accueil") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {

                const targetId = button.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});