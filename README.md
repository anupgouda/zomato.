# zomato.
online food delivery app
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Delivery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Food Delivery</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Restaurants</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <section id="search">
        <div class="container">
            <input type="text" id="search-box" placeholder="Search for restaurants...">
            <button id="search-btn">Search</button>
        </div>
    </section>

    <section id="restaurant-list">
        <div class="container">
            <!-- Restaurant listings will be dynamically populated here -->
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
