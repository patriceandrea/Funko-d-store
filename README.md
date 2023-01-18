# Funko-d-store
An e-commerce application that sells Funko Pop using Nextjs. Stripe is used for payments. 

# About

## Features 
- Views the list of product 
- Adds product(s) to cart
- Removes product(s) from the cart 
- Go to checkout for payment using Stripe (test mode)

## 🎥
### View Products
![](/funko'd/public/funko_1.gif)
### Add to Cart 
![](/funko'd/public/funko_2.gif)
### Chekout Payment 
![](/funko'd/public/funko_3.gif)

# Stripe Testing
 use ``4242 4242 4242 4242`` Visa Card for sucessful testing. 

Stripe Docs on testing: https://stripe.com/docs/testing#cards

# Getting Started 
How to run locally: 

1. `Fork` this repository, then `git clone` your fork of this repository.
2. Change directory to `funko'd` folder
```
cd funko\'d
```
3. Install all dependecies. 
```
npm install
```
4. Start the server 
```
npm run dev
```
5. Go to http://localhost:3000/ to view the site. 

## Dependecies
- Nextjs 
- Sanity.io 
- Stripe 
- React-Hot-Toast
- React-Icons
- Canvas-Confetti

# Ressource 
This is based on JavaScript Mastery's Build and Deploy a Modern Full Stack ECommerce React Application with Stripe: https://www.youtube.com/watch?v=4mOkFXyxfsU. 
This is built for learning purposes only. 