# GoFoods

A front-end food ordering app built for a school project (theme: **Food & Dining**). Browse local restaurants, filter by cuisine, price and rating, build a cart from one restaurant, and place an order. There is no backend or database; everything runs in the browser.


## Features

- **Home:** hero with search, browse by cuisine, featured restaurants, how it works
- **Restaurants:** live search plus filters for cuisine (multi-select), price level and minimum rating, removable active-filter chips, and sorting (top rated, fastest delivery, lowest price)
- **Restaurant menu:** dish category tabs, `+ Add` buttons that turn into quantity steppers, and an order sidebar
- **Cart:** change quantities, remove items, delivery fee and total
- **One restaurant per cart:** adding a dish from another restaurant asks whether to start a new cart
- **Checkout:** form validation (name, 11-digit phone number, address), payment method and notes
- **Confirmation:** order summary with order ID, status and total
- Responsive layout for phone, tablet and desktop

## Tech stack

- [React](https://react.dev/) with [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for multi-page routing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- React Context API for cart state

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/TODO-your-username/gofoods.git
cd gofoods
npm install
npm run dev
```

Then open the local address shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/restaurants` | Restaurant list with filters |
| `/restaurants/:id` | Restaurant menu |
| `/cart` | Cart |
| `/checkout` | Checkout |
| `/confirmation` | Order confirmation |
| `*` | Page not found |

## How it follows the project requirements

- **Front-end only:** no backend or database. All data lives in JavaScript files.
- **Multi-page routing:** six pages plus a 404, using React Router.
- **State management:** the cart and the last placed order are kept in a React Context (`CartContext`).
- **Dynamic filtering:** the restaurant list filters and sorts live from the data; the menu page filters dishes by category.
- **No hardcoded text in components:** every label, heading, message and placeholder comes from `src/content/content.js`. Restaurants, dishes, cuisines and categories come from `src/data/`.
- **Models based on the class diagram:** each class in `src/models/` matches a class in the diagram, and the data files create their objects with those classes.

## Project structure

```
gofoods/
├── docs/
│   ├── class-diagram.md      # Mermaid class diagram
│   └── class-diagram.png
├── public/
│   └── images/               # optional photos (placeholders show if missing)
├── src/
│   ├── components/           # Navbar, Footer, Layout, cards, icons, dialog
│   ├── content/
│   │   └── content.js        # all UI text
│   ├── context/
│   │   └── CartContext.jsx   # cart and order state
│   ├── data/                 # categories, cuisines, restaurants, menu items
│   ├── models/               # Category, Cuisine, Restaurant, MenuItem,
│   │                         # CartItem, Cart, Order
│   ├── pages/                # one file per route
│   ├── utils/
│   │   └── formatPrice.js    # peso formatting helper
│   ├── App.jsx               # routes
│   ├── main.jsx              # entry point
│   └── index.css             # Tailwind and fonts
└── package.json
```

 


## Author

Edrian Karl V. Cardoso, CSIT340 G11