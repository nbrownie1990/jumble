import axios from 'axios'

const JUMBLE_API_BASE_URL = 'http://localhost:8080/api/v1/jumbles'

class JumblesService {
  getJumbles() {
    return axios.get(JUMBLE_API_BASE_URL)
  }
}

export default new JumblesService()
