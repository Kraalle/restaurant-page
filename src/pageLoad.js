import createRestaurantHomePage from "./home";
import createTabs from "./tabs";

function loadPage() {
    createTabs();
    createRestaurantHomePage();
}

export default loadPage;