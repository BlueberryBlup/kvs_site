const express = require('express')
const mysqlConnection = require('../utils/users_db')

const Router = express.Router()

// Получение объектов
Router.get('/objects', (req, res) => {
  mysqlConnection.query('SELECT * FROM objects', (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: 'Ошибка сервера' })
    }
    res.json(results)
  })
})

function emptyToNull(value) {
  return value === '' ? null : value
}

// Создание объекта
Router.post('/objects', (req, res) => {
  const {
    id,
    article,
    type,
    title,
    category,
    active,
    year,
    rooms,
    floors,
    floor,
    price,
    description,
  } = req.body

  mysqlConnection.query(
    'INSERT INTO objects (id, article, type, title, category, active, year, rooms, floors, floor, price, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      emptyToNull(id),
      emptyToNull(article),
      emptyToNull(type),
      emptyToNull(title),
      emptyToNull(category),
      emptyToNull(active),
      emptyToNull(year),
      emptyToNull(rooms),
      emptyToNull(floors),
      emptyToNull(floor),
      emptyToNull(price),
      emptyToNull(description),
    ],
    (err, results) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ error: 'Ошибка сервера' })
      }
      res.json({
        num: results.insertId,
        id,
        article,
        type,
        title,
        category,
        active,
        year,
        rooms,
        floors,
        floor,
        price,
        description,
      })
    },
  )
})

// Обновление объекта
Router.put('/objects/:id', (req, res) => {
  const { article, type, title, category, active } = req.body

  mysqlConnection.query(
    'UPDATE objects SET article = ?, type = ?, title = ?, category = ?, active = ? WHERE id = ?',
    [article, type, title, category, active, req.params.id],
    (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ error: 'Ошибка сервера' })
      }
      res.json({ id: req.params.id, ...req.body })
    },
  )
})

// Удаление объекта
Router.delete('/objects/:id', (req, res) => {
  mysqlConnection.query('DELETE FROM objects WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: 'Ошибка сервера' })
    }
    res.json({ message: 'Объект удалён' })
  })
})

module.exports = Router
