import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
})

export default {
  async getObjects() {
    try {
      const response = await api.get('/objects')
      return response.data
    } catch (error) {
      throw error.response.data
    }
  },

  async createObject(objectData) {
    try {
      const response = await api.post('/objects', objectData)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Не удалось сохранить объект')
    }
  },

  async updateObject(id, objectData) {
    try {
      const response = await api.put(`/objects/${id}`, objectData)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  },

  async deleteObject(id) {
    try {
      const response = await api.delete(`/objects/${id}`)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  },
}
