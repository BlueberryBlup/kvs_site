const express = require('express')
const mysqlConnection = require('../utils/users_db')
const bcrypt = require('bcrypt')

const Router = express.Router() //создание функций промежуточного программного обеспечения

// проверка, что пользователь существует
Router.post('/login', (req, res) => {
  const { phone_number, password } = req.body

  mysqlConnection.query(
    'SELECT * FROM users WHERE phone_number = ?',
    [phone_number],
    async (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ error: 'Ошибка сервера' })
      }

      if (results.length === 0) {
        return res.status(401).json({ error: 'Пользователь не найден' })
      }

      const user = results[0]

      try {
        const isMatch = password === user.password
        if (!isMatch) {
          return res.status(401).json({ error: 'Неверный пароль' })
        }

        res.json({
          message: 'Авторизация успешна',
          user: {
            id: user.id,
            name: user.name,
            phone_number: user.phone_number,
          },
        })
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ошибка сервера' })
      }
    },
  )
})

Router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, results, fields) => {
    if (!err) {
      res.send(results)
    } else {
      console.log(err)
    }
  })
}) //получение пользователей

Router.get('/users/:phone', (req, res) => {
  const phone = req.params.phone

  if (!phone) {
    return res.status(400).json({ error: 'Не указан номер телефона' })
  }

  mysqlConnection.query('SELECT * FROM users WHERE phone = ?', [phone], (err, results) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Ошибка сервера' })
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Пользователь не найден' })
    }

    res.json(results[0])
  })
}) //получение пользователя по номеру телефона

function emptyToNull(value) {
  return value === '' ? null : value
}

Router.post('/register', (req, res) => {
  const { id, name, surname, phone_number, password } = req.body

  mysqlConnection.query(
    'SELECT * FROM users WHERE phone_number = ?',
    [phone_number],
    (err, results) => {
      if (err) {
        console.error('Ошибка SQL запроса:', err)
        return res.status(500).json({ error: 'Ошибка проверки пользователя' })
      }

      if (results.length > 0) {
        return res.status(400).json({ error: 'Этот номер уже зарегистрирован' })
      }

      mysqlConnection.query(
        'INSERT INTO users (id, name, surname, phone_number, password) VALUES (?, ?, ?, ?, ?)',
        [emptyToNull(id), 'Имя', 'Фамилия', phone_number, password],

        (err, result) => {
          if (err) {
            console.error('Ошибка INSERT:', err)
            return res.status(500).json({
              error: 'Ошибка при регистрации',
              details: err.sqlMessage,
            })
          }

          res.json({
            success: true,
            userId: result.insertId,
            phone: phone_number,
          })
        },
      )
    },
  )
}) //регистрация нового пользователя

Router.put('/', (req, res) => {
  let qb = req.body
  const sql =
    'SET @id = ?; SET @name = ? ;SET @password = ?;SET @phone_number = ?;CALL Add_or_Update_QB(@id, @name, @password, @phone_number);'
  mysqlConnection.query(
    sql,
    [qb.id, qb.phone_number, qb.name, qb.password],
    (err, results, fields) => {
      if (!err) {
        res.send('The data for the selected quarterback has been successfully updated.')
      } else {
        console.log(err)
      }
    },
  )
}) //обновление пользователя

Router.delete('/:id', (req, res) => {
  mysqlConnection.query(
    'DELETE FROM users WHERE id= ? ',
    [req.params.id],
    (err, results, fields) => {
      if (!err) {
        res.send('The selected quarterback has been successfully deleted.')
      } else {
        console.log(err)
      }
    },
  )
}) //удаление пользователя

Router.get('/check-phone/:phone', (req, res) => {
  const phone = req.params.phone

  mysqlConnection.query('SELECT * FROM users WHERE phone_number = ?', [phone], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка сервера' })
    }
    res.json({ exists: results.length > 0 })
  })
})

module.exports = Router
