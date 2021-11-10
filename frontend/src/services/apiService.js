import axios from 'axios'
import { jumbles } from './featureService'

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

//Map GET
//JumbleMapList GET

//Categories GET
export const getCategories = (token, categories) =>
  axios.get(`/api/categories`, headers(token)).then(response => response.data)

// Category GET
export const getCategory = (token, category) =>
  axios
    .get(`/api/categories/category`, headers(token))
    .then(response => response.data)

//JumbleList (all Jumbles) GET
export const getJumbleList = (token, jumbles) =>
  axios.get(`/api/jumbles`, headers(token)).then(response => response.data)

//Jumble GET
export const getJumbleById = (token, jumbleId) =>
  axios
    .get(`/api/jumbles/${jumbleId}`, headers(token))
    .then(response => response.data)

//Add Jumble POST
export const postJumble = (token, user_id, jumble) =>
  axios
    .post(`/api/jumbles/new`, jumble, headers(token))
    .then(response => response.data)

//Edit Jumble PUT - DELETE
export const updateJumbleName = (token, jumbleId, jumbleName) =>
  axios
    .put(`/api/jumbles/edit/${jumbleId}`, jumbleName, headers(token))
    .then(response => response.data)

export const updateJumbleImage = (token, jumbleId, jumbleImage) =>
  axios
    .put(`/api/jumbles/edit/${jumbleId}`, jumbleImage, headers(token))
    .then(response => response.data)

export const updateJumbleAdresse = (token, jumbleId, jumbleAdresse) =>
  axios
    .put(`/api/jumbles/edit/${jumbleId}`, jumbleAdresse, headers(token))
    .then(response => response.data)

export const updateJumbleTermine = (token, jumbleId, jumbleTermine) =>
  axios
    .put(`/api/jumbles/edit/${jumbleId}`, jumbleTermine, headers(token))
    .then(response => response.data)

export const updateJumbleZeiten = (token, jumbleId, jumbleZeiten) =>
  axios
    .put(`/api/jumbles/edit/${jumbleId}`, jumbleZeiten, headers(token))
    .then(response => response.data)

export const updateJumbleWebsite = (token, jumbleId, jumbleWebsite) =>
  axios
    .put(`/api/jumbles/edit/${jumbleId}`, jumbleWebsite, headers(token))
    .then(response => response.data)

export const deleteJumble = (token, jumbleId) =>
  axios
    .delete(`/api/jumbles/edit/${jumbleId}`, headers(token))
    .then(response => response.data)

//Add Rezension GET - POST
export const getRezensionsList = (token, jumbleId, rezensionId) =>
  axios
    .get(`/api/jumbles/${jumbleId}/${rezensionId}`, headers(token))
    .then(response => response.data)

export const postRezension = (token, jumbleId, rezensionId, user_id, rating) =>
  axios
    .post(
      `api/jumbles/${jumbleId}/${rezensionId}}`,
      rezensionId,
      rating,
      headers(token)
    )
    .then(response => response.data)

//Signup User POST
export const postUser = credentials =>
  axios.post(`/api/user/signup`, credentials).then(response => response.data)

//Profile bzw User GET
// export const getUserById = (token, userId) =>
//   axios
//     .get(`/api/user/${userId}`, headers(token))
//     .then(response => response.data)

// //Edit Profile bzw User PUT - DELETE
// export const updateUserName = (token, userId, newusername) =>
//   axios
//     .put(`/api/user/edit/${userId}`, { username: newusername }, headers(token))
//     .then(response => response.data)

// export const updateUserImage = (token, userId, userImage) =>
//   axios
//     .put(`/api/user/edit/${userId}`, userImage, headers(token))
//     .then(response => response.data)

// export const updateUserEmail = (token, userId, email) =>
//   axios
//     .put(`/api/user/edit/${userId}`, email, headers(token))
//     .then(response => response.data)

// export const updateUserPassword = (token, passwords) =>
//   axios
//     .put(
//       `/api/user/edit/${userId}`,
//       { password: passwords.newPassword, oldPassword: passwords.oldPassword },
//       headers(token)
//     )
//     .then(response => response.data)

// export const updateUserText = (token, userId, userText) =>
//   axios
//     .put(`/api/user/edit/${userId}`, userText, headers(token))
//     .then(response => response.data)

// export const deleteUser = (token, userId) =>
//   axios
//     .delete(`/api/user/edit/${userId}`, headers(token))
//     .then(response => response.data)
