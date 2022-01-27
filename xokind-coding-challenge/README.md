# Getting Started with XOKIND-Coding-Challenge
This project was made as a test of my abilities.
As such, I have completed the challenge to the best of my abilities in the time given.  
It is meant to display a list of Places from a _Firestore_ backend, after being authenticated anonymously with _Firebase Authentication_. 
Each place is loaded inside of a Carosel Card element that displays it's picture, name, rating, and price. 
You may update the Places as you wish and it will automatically be reflected in the _Firestore_.

## How to Run the App Locally

1. In your code editor of choice, in an empty directory, run the following git command in your terminal:
```git
git init
git clone https://github.com/Nellak2017/XOKIND-Coding-Challenge.git
```
2. With the github project cloned, you will need to install the dependencies of XOKIND-Coding-Challenge, to do so do the following: 
```bash
npm install 
```
3. When the proper dependencies are installed, run the following command:
```bash
npm start
```
4. It will then run the development version in your _localhost:3000/_ by default. 

## How to use the App

1. When you Run the App Locally, you will be able to login anonymously. Click the sign in anonymously button to sign in. 
2. When signed in, you will then see a carousel of places. You may use the carousel, add, edit, delete, or sign out of the application. 