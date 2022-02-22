import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { SECPokemonRecord } from "../../../types/pokemon.types";

interface ResponseError {};

// export const getCWPokemon = createAsyncThunk<{name: string}>("cwPokemon/get", async (name: string, {
//   getState, 
//   requestId
// }) => {

// });