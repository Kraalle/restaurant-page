const createAboutUsPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    const aboutUsTitle = document.createElement('h1');
    aboutUsTitle.textContent = 'Contact Us'
    const phone = document.createElement('div');
    const email = document.createElement('div');
    const address = document.createElement('div');
    phone.textContent = 'Phone Number: 123-456-7890';
    email.textContent = 'ouremail@restaurant.com';
    address.textContent = '12345 Restaurant Ave';

    const contactInfo = [phone, email, address];

    pageContent.appendChild(aboutUsTitle);
    content.appendChild(pageContent);
    for (let info of contactInfo) {
        pageContent.appendChild(info);
    }
}

export default createAboutUsPage;