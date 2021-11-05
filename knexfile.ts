

 const development = {
    client: "mysql",
    connection: {
      host:process.env.DB_HOST||'',
      port:process.env.DB_PORT,
      user: "root",
      password: "Password.root1",
      database: "bartender",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

  


export default {development};