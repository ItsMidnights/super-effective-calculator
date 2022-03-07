module.exports = {
  type: "expo",
  database: "pokemon.db",
  driver: require("expo-sqlite"),
  entities: [
    "**/*/*.model.ts"
  ],
  synchronize: true
}