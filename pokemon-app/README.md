# Pokemon Catching App

## Application Concept and Wireframe
### App Concept
- This is a Pokemon catching app
- We will be utilizing the pokeAPI for data
- Full CRUD
    - GET: get all Pokemon
    - POST: Caught Pokemon posted to array
    - PUT: Give Pokemon a name
    - DELETE: Release Pokemon back into the wild  

### Functionality 

    - Header at top of page to display name of App
    - When app loads, display three images of grass will be loaded
        - when grass is clicked we will reveal a wild pokemon
    - Once we select a pokemon, we will put that pokemon in our pokedex
    - The pokedex will reveal the new caught Pokemon
    - The Pokedex will reveal the name of the caught Pokemon 
    - The pokedex will have a button to release the pokemon
    - Pokedex will update when a pokemon is released

### Endpoints
    - GET: fetch 3 random pokemon from pokeAPI (retreive on front/back)
    - GET: fetch our pokedex
    - POST: push caught Pokemon to pokedex
    - PUT: change pokemon name 
    - DELETE: delete pokemon from pokedex 

### Component Architecture 

    - App.js (stateful: hold our wild pokemon info, this.state.caughtPokemon)
    - Header.js (functional)
    - Finder.js (stateful: axios request to fetch 3 pokemon)
        + Grass.js (stateful: this.state.grassClicked)
    - Pokedex.js (fucntional)
        + Pokemon.js (stateful: this.state.name, this.state.editing)

### Wireframe 
<img src="../sc">