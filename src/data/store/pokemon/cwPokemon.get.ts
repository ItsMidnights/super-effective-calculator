import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { SECPokemonRecord } from "../../../types/pokemon.types";
import { getPokemonByName, getWeaknessesByTypes } from "../../api/pokemon.get";
import { Pokemon } from "../../model/pokemon.model";

interface ResponseError {};

export const getCWPokemon = createAsyncThunk("cwPokemon/get", async (term: string, {
  getState, 
  requestId
}) => {

  const {
    id,
    name,
    weight,
    types,
    sprite
  } = await getPokemonByName(term);

  const weakAgainst = await getWeaknessesByTypes(types);


});