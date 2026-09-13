const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kvs_site',
  password: 'root',
  multipleStatements: true,
}) //создаем соединение с сервером, информация о бд

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('Connected')
  } else {
    console.log('Connection Failed')
  }
}) //подключение бд к серверу

module.exports = mysqlConnection
