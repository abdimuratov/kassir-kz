import axios from 'axios'

const token = '1|3iL54oDS99Uc9dlZiMXIHixUoWgs0G7jIgV9N1Gw'

const headers = {}

if (token) {
  headers['Authorization'] = `Bearer: ${token}`  
}

export default axios.create({
  baseURL: `https://dev.kassir.kz/api`,
  headers,
})
