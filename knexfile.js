module.exports = {

  // For development on your local machine.
  development: {
    client: 'postgres',
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations'     // Directory to migration files of the project.
    },
    seeds: {
      directory: './src/seeds'          // Directory to seeds files of the project.
    },
    connection: {
      host: "localhost",
      user: "ashishbakliwal",
      password: "",
      database: "twitter-clone"           // Create Database with same name on your local machine in postgres or change the name these with your database name.
    }
  }
};
