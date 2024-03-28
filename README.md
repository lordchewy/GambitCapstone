# Gambit

## Overview

My app is a card game called gambit, User select a hero and fights undead monsters. game will split into enemy phase and player phase where players will draw 5 cards at the start of their turn to use either defensively or offensively.

### Problem

I grew up playing card games and wanted to make one from my own art. Something easy to pick up yet every time you play changes would occur in either hero composition and enemy composition to keep encounters fresh.

### User Profile

my App would mostly be used for gamers either playing through steam or in real time with physical cards. fans of pokemon and yugioh would have an attraction to the concept.

### Features

-main menu functionality to start a run
-react app to use state for enemy/player turns
-api to call and render cards
-css animation for user interaction and card draws.
-logic for attacking, defending.
-potential for unique card effects(to be determined based on complexity)

## Implementation
Using react states for characters and turns, player objects will render and update information in real time with useEffect upon health changes. The main state of the game will be determined with a useState for count which will determine if players can play(above 4) and when this value touches zero the enemy plays and the state resets until win/loss occurs. Card will operate as functions with a count increase(to progress count state). Before each match a select screen will render chosen character based on id from an api call and using useParams this will translate to the player character upon linking to start game. 

### Tech Stack

-react
-express
-react-spring
-axios
-react-router-dom
-sass
-nodemon
-knexjs

To run program, first clone both GambitCapstone and Gambit server. In the command line terminal run "npm i" in both parent folders to install dependencies and run 'npm start' in GambitCapstone folder to start react app and run 'npm run start' in the server folder to start database.

### APIs
Current api is run as a database with knexjs

### Sitemap

-main menu page(start button and hero library)
-start run page which will let you select heroes before every run
-transition to board game page
-on board game page i will use states to render active turn.
-board page will also need to contain all the logic available for combat. and a next round button.
-a defeat page and victory page

### Mockups

![routing between pages](./src/assets/wireFrame/page-routing-mockup.png)
![main page](./src/assets/wireFrame/main.png)
![game page](./src/assets/wireFrame/gamePage.png)
![hero list page](./src/assets/wireFrame/heroPage.png)
![next round](./src/assets/wireFrame/nextroundpage.png)

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

data would be used to render enemies and heroes, the api call objects would provide the card design and card attributes.

### Endpoints

since this api will only render cards only a get request would be necessary, perhaps adding a post to make a scoreboard.

### Auth

Not for now.

## Roadmap

1-build a basic page for two 3 vs 3 cards and focus on building game logic(backend)
2-once basic game logic is set up react front end will be built for board page
3-styling and animation for card hover, attacking/defending and active player
4-drawing card animation with randomizing which cards are drawn
5-build api calls to dynamically generate the 3vs3 cards and card drawn into hand
6-once combat is functional, begin process of building the other pages with correcting routing.

## Nice-to-haves

-i'd like to add more complex card effects
-more heroes and drawings, these are hand made so they will be added as more are produced.
-a more complex game design, adding potential for a rogue lite mechanic where every run (win or lose) players would be rewarded with new cards to make next runs easier. this would add a greater sense of progression.
-wayyyyyy down the line would be animating all monsters and heroes.
