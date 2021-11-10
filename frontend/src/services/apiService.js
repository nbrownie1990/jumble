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

//Map GET
//JumbleMapList GET
//Categories GET
export const getCategories = (token, categories) =>
  axios
    .get(`/api/jumble/findall/${categories}`, headers(token))
    .then(response => response.data)

//JumbleList bzw Category GET
export const getJumbleList = (token, category) =>
  axios
    .get(`/api/jumble/findall/${category}`, headers(token))
    .then(response => response.data)

//Jumble GET
export const getJumbleById = (token, jumbleId) =>
  axios
    .get(`/api/jumble/find/${jumbleId}`, headers(token))
    .then(response => response.data)

//Add Jumble POST
export const postJumble = (token, user_id, jumble) =>
  axios
    .post(`/api/jumble/new/${user_id}`, jumble, headers(token))
    .then(response => response.data)

//Edit Jumble PUT - DELETE
export const updateJumbleName = (token, jumbleId, jumbleName) =>
  axios
    .put(`/api/jumble/edit/${jumbleId}`, jumbleName, headers(token))
    .then(response => response.data)

export const updateJumbleImage = (token, jumbleId, jumbleImage) =>
  axios
    .put(`/api/jumble/edit/${jumbleId}`, jumbleImage, headers(token))
    .then(response => response.data)

export const updateJumbleAdresse = (token, jumbleId, jumbleAdresse) =>
  axios
    .put(`/api/jumble/edit/${jumbleId}`, jumbleAdresse, headers(token))
    .then(response => response.data)

export const updateJumbleTermine = (token, jumbleId, jumbleTermine) =>
  axios
    .put(`/api/jumble/edit/${jumbleId}`, jumbleTermine, headers(token))
    .then(response => response.data)

export const updateJumbleZeiten = (token, jumbleId, jumbleZeiten) =>
  axios
    .put(`/api/jumble/edit/${jumbleId}`, jumbleZeiten, headers(token))
    .then(response => response.data)

export const updateJumbleWebsite = (token, jumbleId, jumbleWebsite) =>
  axios
    .put(`/api/jumble/edit/${jumbleId}`, jumbleWebsite, headers(token))
    .then(response => response.data)

export const deleteJumble = (token, jumbleId) =>
  axios
    .delete(`/api/jumble/edit/delete/${jumbleId}`, headers(token))
    .then(response => response.data)

//Add Rezension GET - POST
export const getRezensionById = (token, jumbleId) =>
  axios
    .get(`/api/jumble/rezension/findall/${jumbleId}`, headers(token))
    .then(response => response.data)

export const postRezension = (token, username, rezension, rating) =>
  axios
    .post(
      `/api/jumble/rezension/new/${username}`,
      rezension,
      rating,
      headers(token)
    )
    .then(response => response.data)

//Signup User POST
export const postUser = credentials =>
  axios.post(`/api/user/signup`, credentials).then(response => response.data)

//Profile bzw User GET
export const getUserById = (token, userId) =>
  axios
    .get(`/api/user/find/${userId}`, headers(token))
    .then(response => response.data)

//Edit Profile bzw User PUT - DELETE
export const updateUserName = (token, userId, newusername) =>
  axios
    .put(`/api/user/edit/${userId}`, { username: newusername }, headers(token))
    .then(response => response.data)

export const updateUserImage = (token, userId, userImage) =>
  axios
    .put(`/api/user/edit/${userId}`, userImage, headers(token))
    .then(response => response.data)

export const updateUserEmail = (token, userId, email) =>
  axios
    .put(`/api/user/edit/${userId}`, email, headers(token))
    .then(response => response.data)

export const updateUserPassword = (token, passwords) =>
  axios
    .put(
      `/api/user/edit/username/updatePassword`,
      { password: passwords.newPassword, oldPassword: passwords.oldPassword },
      headers(token)
    )
    .then(response => response.data)

export const updateUserText = (token, userId, userText) =>
  axios
    .put(`/api/user/edit/${userId}`, userText, headers(token))
    .then(response => response.data)

export const deleteUser = (token, userId) =>
  axios
    .delete(`/api/user/edit/delete/${userId}`, headers(token))
    .then(response => response.data)
