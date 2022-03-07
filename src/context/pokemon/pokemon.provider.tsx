import React, { useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Connection, createConnection, getConnectionManager, getConnectionOptions } from "typeorm";
import { Pokemon } from "../../data/model/pokemon.model";
import { PokemonRepository } from "../../data/repository/pokemon.repository";
import { DatabaseConnectionContext } from "./pokemon.context";

export const DatabaseConnectionProvider: React.FC = ({ children }) => {
  const [connection, setConnection] = React.useState<Connection | null>(null);
  const connectionManager = getConnectionManager();

  const connect = React.useCallback(async () => {
    try {
      const createdConnection = await createConnection({
        type: "expo",
        database: "pokemon.db",
        driver: require("expo-sqlite"),
        entities: [Pokemon],
        synchronize: true
      });

      setConnection(createdConnection);
    } catch (error) {
      console.error(error); 
    }
  }, []);

  const connectDefault = React.useCallback(async () => {
    const defaultConnection = connectionManager.get("default");
    console.log(defaultConnection);
    setConnection(defaultConnection);
  }, []);

  React.useEffect(() => {
    if (connectionManager.has("default")) {
      connectDefault();
    } else {
      connect();
    }
  }, [connect, connection]);

  return connection != null ? (
    <DatabaseConnectionContext.Provider
      value={{
        pokemonRepository: new PokemonRepository(connection),
      }} 
    >
      { children }
    </DatabaseConnectionContext.Provider>
  ) 
  : (
    <View style={{ flex:1, alignItems: "center", justifyContent: "center", height: "100%"}}>
      <Text>Connection: {connection}</Text>
    </View>
  );
}

export const useDatabaseConnection = () => {
  const context = useContext(DatabaseConnectionContext);
  return context;
}