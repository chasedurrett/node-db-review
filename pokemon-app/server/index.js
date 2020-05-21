const express = require("express");
const app = express();
const wildCtrl = require("./controllers/wildPokemonController");
const caughtCtrl = require("./controllers/caughtPokemonController");
const SERVER_PORT = 4000;

app.use(express.json());

// wild pokemon
app.get('/api/wild-pokemon', wildCtrl.getThreeRandomPokemon)

// caught pokemon
app.get('/api/pokemon', caughtCtrl.getCaughtPokemon)
app.post('/api/pokemon', caughtCtrl.catchPokemon)
app.put('/api/pokemon/:pokemon_id', caughtCtrl.editPokemonName)
app.delete('/api/pokemon/:pokemon_id', caughtCtrl.deletePokemon)




app.listen(SERVER_PORT, () => {
  console.log(`Server activated port ${SERVER_PORT}`);
});
