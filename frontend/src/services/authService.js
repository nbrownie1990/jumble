import axios from 'axios'

export const getToken = credentials =>
  axios
    .post('/api/auth/access_token', credentials)
    .then(response => response.data)
    .then(dto => dto.token)

const headers = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
})


export const postNewUser = credentials =>
  axios.post(`/api/user/register`, credentials).then(response => response.data)

export const putEditUsername = (token, newusername) =>
  axios
    .put(`/api/user/username/edit`, { username: newusername }, headers(token))
    .then(response => response.data)

export const updatePassword = (token, passwords) =>
  axios
    .put(
      `/api/user/updatePassword`,
      { password: passwords.newPassword, oldPassword: passwords.oldPassword },
      headers(token)
    )
    .then(response => response.data)





