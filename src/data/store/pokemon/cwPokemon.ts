import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { SECPokemonRecord } from "../../../types/pokemon.types";

export interface CWPokemonState extends SECPokemonRecord {
  status?: "";
};

const initialState: CWPokemonState = {
  id: 0,
  name: "",
  sprite: "",
  type: [],
  weakAgainst: [],
  status: undefined,
};

export const cwPokemonSlice = createSlice({
  name: "cwPokemon",
  initialState,
  reducers: {},
  extraReducers: {}
});
