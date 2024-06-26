// Dummy data for restaurant listings
const restaurants = [
    { name: 'Restaurant 1', cuisine: 'Italian',image :'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/1/25/0/FN_getty-italian-traditions-pasta_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1453776834832.jpeg' },
    { name: 'Restaurant 2', cuisine: 'Mexican' },
    { name: 'Restaurant 3', cuisine: 'Indian' }
];

// Function to display restaurant listings
function displayRestaurants(restaurants) {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';

    restaurants.forEach(restaurant => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant-item');
        restaurantItem.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>Cuisine: ${restaurant.cuisine}</p>
        `;
        restaurantList.appendChild(restaurantItem);
    });
}

// Event listener for search button
document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchTerm));
    displayRestaurants(filteredRestaurants);
});

// Display all restaurants initially
displayRestaurants(restaurants);
