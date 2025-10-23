# Food Order & Delivery App

A React-based food ordering application with a clean, responsive design. Users can browse food items by category, add items to their cart, and manage their orders.

## Features

- **Category Navigation**: Browse appetizers, drinks, snacks, and main dishes
- **Dynamic Data Fetching**: Fetches food data from a JSON server
- **Cart Management**: Add, remove, and clear items from the cart using React Context
- **Responsive Design**: Works well on both desktop and mobile devices
- **Location Selector**: Choose delivery location
- **Footer**: Company information, contacts, and social links

## Technologies Used

- React 18
- React Context API for state management
- CSS for styling
- JSON Server for mock API

## Installation

1. Clone the repository or navigate to the food-app directory
2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

1. Start the JSON server (in a separate terminal):
   ```
   npx json-server --watch db.json --port 3001
   ```

2. Start the React app:
   ```
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
food-app/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── FoodCard.jsx
│   │   ├── FoodList.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
│
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

## API Endpoints

The app fetches data from the following endpoints:
- `http://localhost:3001/appetizers`
- `http://localhost:3001/drinks`
- `http://localhost:3001/snacks`
- `http://localhost:3001/mainDishes`

## Usage

1. Select a category from the navigation tabs
2. Browse the food items in the selected category
3. Click "Add to Cart" to add items to your cart
4. Click the cart icon to view and manage your cart
5. Use the "Remove" button to remove items or "Clear Cart" to empty the cart

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is open source and available under the [MIT License](LICENSE).
