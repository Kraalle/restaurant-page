const createRestaurantMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    const menuTitleDiv = document.createElement('div');
    menuTitleDiv.classList.add('menu-title-div');
    const welcome = document.createElement('h1');
    welcome.textContent = 'Menu';
    welcome.classList.add('menu-title');
    menuTitleDiv.appendChild(welcome);

    const menu = document.createElement('div');
    menu.classList.add('menu-div');
    const foodTitle = document.createElement('h3');
    foodTitle.textContent = 'Food Items';
    menu.appendChild(foodTitle);

    const menuItems = document.createElement('ul');
    menuItems.classList.add('food-list');
    const foodItems = food();

    for (let food of foodItems) {
        const foodItem = document.createElement('li');
        foodItem.textContent = food;
        menuItems.appendChild(foodItem);
    }
    menu.appendChild(menuItems)

    pageContent.appendChild(menuTitleDiv);
    pageContent.appendChild(menu);

    content.appendChild(pageContent);
}

const food = () => {
    return ['Steak', 'Cheeseburger', 'Salad', 'Tacos'];
}

export default createRestaurantMenuPage;