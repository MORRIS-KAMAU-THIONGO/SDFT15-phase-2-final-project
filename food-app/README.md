# Food App

A React-based food ordering application that displays food items from a JSON Server and allows users to add items to a cart with localStorage persistence.

## Features

- Display food items fetched from JSON Server
- Add items to cart
- Remove items from cart
- Cart count in navbar
- Total price calculation
- localStorage persistence for cart
- Responsive design

## Setup

1. Clone the repository
2. Navigate to the food-app directory
3. Install dependencies: `npm install`
4. Start JSON Server: `npx json-server --watch db.json --port 3001`
5. In another terminal, start the React app: `npm start`

## Deployment

The app is deployable on Vercel. Build the app with `npm run build` and deploy the `build` folder.

## Technologies Used

- React
- JSON Server
- localStorage
- CSS
