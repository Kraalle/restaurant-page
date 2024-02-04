
const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList = 'page-content';

    const welcome = document.createElement('div');
    welcome.classList = 'welcome-div';
    const welcomeTitle = document.createElement('h1');
    welcomeTitle.textContent = 'Worlds Best Restaurant';
    welcome.appendChild(welcomeTitle);

    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review-div');
    const reviewTitle = document.createElement('h3');
    const review = document.createElement('div');
    reviewTitle.textContent = "Review";
    review.textContent = '"The best restaurant I have ever been too!" - Legit Reviewer';
    reviewDiv.appendChild(reviewTitle);
    reviewDiv.appendChild(review);

    const availability = document.createElement('div');
    availability.classList.add('availability-div');
    const availabilityTitle = document.createElement('h3');
    availabilityTitle.textContent = 'Hours';
    availability.append(availabilityTitle);
    const hoursAndDays = document.createElement('ul');
    const days = ['Sunday', 'Monday', 'Tuestday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let day of days) {
        const hourAndDay = document.createElement('li');
        hourAndDay.textContent = `${day}: 8am - 8pm`;
        hoursAndDays.appendChild(hourAndDay);
    }
    availability.append(hoursAndDays);


    const location = document.createElement('div');
    location.classList.add('location-div');
    const locationTitle = document.createElement('h3');
    locationTitle.textContent = 'Location';
    location.appendChild(locationTitle);
    const address = document.createElement('div');
    address.textContent = '123 Good Restaurant, Restaurant, Arizona';
    location.appendChild(address);

    pageContent.appendChild(welcome);
    pageContent.appendChild(reviewDiv);
    pageContent.appendChild(availability);
    pageContent.appendChild(location);
    content.appendChild(pageContent)

    
}


export default createRestaurantHomePage;