let tabs = document.querySelectorAll("nav ul li");
let pages = document.querySelectorAll("main");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
        tabs.forEach(tab => {
            tab.classList.remove('current');
        });
        pages.forEach(page => {
            page.classList.remove('active')
        })
        tabs[i].classList.add('current')
        pages[i].classList.add('active')
    })
}