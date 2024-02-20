# Getting Started with Memory Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) especially for Planable's interview process.

## About the Game

The goal of the game is to match pairs of cards with identical symbols within a grid of face-down cards. Players can flip two cards at a time, and if they match, those cards remain face-up. The game continues until all pairs are successfully matched.

## How to Play

1. Run the game by following the command below.

### `npm run start`

2. The game will open in your default browser at [http://localhost:3000](http://localhost:3000).
3. Click on any card to flip it and reveal the cat.
4. Click on another card to flip it and reveal the cat.
5. If the cats match, the cards will remain face-up. If they don't, the cards will flip back to their original state.
6. Continue flipping cards until all pairs are matched.
7. Once all pairs are matched, a modal will appear to congratulate you on your win.
8. Click the "New Game" button to restart the game.
9. The goals is to match all pairs in the fewest number of moves.
10. Enjoy!

## Architecture

**Overview:**
<br>
The Memory Game follows a component-based architecture, utilizing UI components for styling consistency and reusability. Components are composed using UI components such as buttons and flex boxes. These components encapsulate their own logic and UI, promoting modularization and ease of maintenance.

**Component Composition:**
<br>
Components are composed using UI components and are responsible for implementing rendering logic. They encapsulate specific functionalities such as card flipping, game logic, and UI rendering

**Page Composition:**
<br>
Pages are composed from components and contain fetchers that retrieve data from APIs. Pages orchestrate the flow of data by passing it down to components as props. This approach allows for a clear separation of responsibilities, with pages focusing on routing and data management while components handle rendering and interaction.

**State Management:**
<br>
The game state is managed using React's built-in state management. The game state is stored in the `MemoryGame` page and is passed down to child components as props. This approach allows for a single source of truth and promotes data consistency across the game.

**Styling:**
<br>
The game's UI components are styled using styled-components, promoting reusability and consistency across the game.

**Folder Structure:**
<br>
The game follows a modular folder structure, with types, utils, api endpoints, ui components, components and pages organized into separate directories. This approach promotes code organization and ease of maintenance.

    memory-game-planable
    ├── src                     # Source files
    │   ├── api                 # API endpoints
    │   ├── assets              # Images (also could be fonts, audio, etc.)
    │   ├── ui                  # Reusable UI components
    │   ├── components          # Components that implement reusable UI components from the UI/ folder and logic.
    │   ├── pages               # Pages
    │   ├── types               # TypeScript types
    │   └── utils               # Utility functions 
    └── package.json            # List of dependencies and scripts

## Known Limitations & Issues

* Game doesn't provide multiplayer support
* Number of displayed cards could not be customized
* There is an issue with preloading of images - Users may not see the picture due to the rapid flip of the card.
  <br>
  **Note: Could be fixed by handling the onLoad event on the image.**
* API Endpoint always sends 10 images if limit is greater than 1

## Potential Next Steps for Productionization

1. **Multiplayer Support:**
   <br>
   Add support for multiplayer games, allowing users to compete against each other in real-time.
2. **Customizable number of cards:**
   <br>
   Allow users to customize the number of cards displayed, providing a more challenging experience.
3. **Improved Image Preloading:**
   <br>
   Preload images to ensure they are displayed correctly when the card is flipped.
4. **Leaderboard:**
   <br>
   Add a leaderboard to track the best scores and times.
5. **Accessibility:**
   <br>
   Ensure the game is accessible to all users by adding support for keyboard navigation.
6. **Mobile Support:**
   <br>
   Optimize the game for mobile devices, ensuring a seamless experience across all devices.
7. **Testing:**
   <br>
   Add unit and integration tests to ensure the game is stable and reliable.
8. **Error Handling:**
   <br>
   Add error handling to gracefully handle API errors and network issues.
9. **SEO:**
   <br>
   Optimize the game for search engines by adding metadata and structured data
10. **Analytics:**
    <br>
    Add analytics to track user interactions and game performance.
11. **Localization:**
    <br>
    Add support for multiple languages to make the game accessible to a global audience.
12. **Deployment:**
    <br>
    Deploy the game to a production environment, ensuring it is stable and reliable.
