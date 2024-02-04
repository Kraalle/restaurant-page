import createRestaurantHomePage from "./home";
import createAboutUsPage from "./about";
import createRestaurantMenuPage from "./menu";

const createTabs = () => {
    const header = document.querySelector('#header');
    const homeTab = document.createElement('div')
    homeTab.classList.add('home-tab');
    const menuTab = document.createElement('div')
    menuTab.classList.add('menu-tab');
    const contactTab = document.createElement('div')
    contactTab.classList.add('contact-tab');

    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    contactTab.textContent = 'Contact';

    homeTab.addEventListener('click', () => {
        clearContents();
        createRestaurantHomePage();
    });

    menuTab.addEventListener('click', () => {
        clearContents();
        createRestaurantMenuPage();
    });

    contactTab.addEventListener('click', () => {
        clearContents();

        createAboutUsPage();
    });
    

    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

}

const clearContents = () => {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');

    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;