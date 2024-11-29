const express = require('express');
const mssql = require('mssql');
const app = express();
const port = 3000;

// Database configuration
const config = {
  user: 'khichij@uni.coventry.ac.uk',
  password: 'CovUni@123',
  server: 'healtcare-database-server.database.windows.net',
  database: 'healtcareserver-db',
  options: {
    encrypt: true // Use this if you're connecting to a server with SSL enabled
  }
};

app.get('/', async (req, res) => {
  try {
    await mssql.connect(config);
    const result = await mssql.query('SELECT * FROM your_table_name');
    res.send(result.recordset);
  } catch (err) {
    console.error('Error connecting to the database:', err);
    res.send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
