import axios from 'axios'
import Jumble from '../pages/Jumble/jumble'
import { deleteJumble } from './jumbleService'

const JUMBLE_API_BASE_URL = 'http://localhost:8080/api/jumbles'

class JumblesService {
  getJumbles() {
    return axios.get(JUMBLE_API_BASE_URL)
  }
  getJumbleById(jumbleId) {
    return axios.get(JUMBLE_API_BASE_URL + '/' + jumbleId)
  }
  postJumble(jumble) {
    return axios.post(JUMBLE_API_BASE_URL + '/' + jumble)
  }
  updateJumble(jumbleId, jumble) {
    return axios.put(JUMBLE_API_BASE_URL + '/' + jumbleId, jumble)
  }
  deleteJumble(jumbleId) {
    return axios.delete(JUMBLE_API_BASE_URL + '/' + jumbleId)
  }
}

export default new JumblesService()
