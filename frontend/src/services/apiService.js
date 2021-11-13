// import axios from 'axios'

// export const getToken = credentials =>
//   axios
//     .post('/api/auth/access_token', credentials)
//     .then(response => response.data)
//     .then(dto => dto.token)

// const headers = token => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// })

// //Map GET
// //JumbleMapList GET
// //Categories GET
// export const getCategories = (token, categories) =>
//   axios.get(`/api/categories`, headers(token)).then(response => response.data)

// // Category GET
// export const getCategory = (token, categoryId) =>
//   axios
//     .get(`/api/categories/${categoryId}`, headers(token))
//     .then(response => response.data)

// //JumbleList (all Jumbles) GET
// export const getJumbles = jumbles =>
//   axios.get(`/api/jumbles/getall`, jumbles).then(response => response.data)

// export const getJumbleById = (token, jumbleId) =>
//   axios
//     .get(`/api/jumbles/${jumbleId}`, headers(token))
//     .then(response => response.data)

// //Add Jumble POST
// export const postJumble = (token, userId, jumble) =>
//   axios
//     .post(`/api/jumbles/new`, jumble, headers(token))
//     .then(response => response.data)

// export const postAddress = (token, userId, address) =>
//   axios
//     .post(`/api/jumbles/new`, address, headers(token))
//     .then(response => response.data)

// //Jumble GET to update
// export const getJumbleToUpdate = (token, jumbleId) =>
//   axios
//     .get(`/api/jumbles/edit/${jumbleId}`, headers(token))
//     .then(response => response.data)

// //Edit Jumble PUT - DELETE
// export const updateJumbleName = (token, jumbleId, jumbleName) =>
//   axios
//     .put(`/api/jumbles/edit/${jumbleId}`, jumbleName, headers(token))
//     .then(response => response.data)

// export const updateJumbleImage = (token, jumbleId, jumbleImage) =>
//   axios
//     .put(`/api/jumbles/edit/${jumbleId}`, jumbleImage, headers(token))
//     .then(response => response.data)

// export const updateJumbleAddress = (token, jumbleId, jumbleAddress) =>
//   axios
//     .put(`/api/jumbles/edit/${jumbleId}`, jumbleAddress, headers(token))
//     .then(response => response.data)

// export const updateJumbleDate = (token, jumbleId, jumbleDate) =>
//   axios
//     .put(`/api/jumbles/edit/${jumbleId}`, jumbleDate, headers(token))
//     .then(response => response.data)

// export const updateJumbleTime = (token, jumbleId, jumbleTime) =>
//   axios
//     .put(`/api/jumbles/edit/${jumbleId}`, jumbleTime, headers(token))
//     .then(response => response.data)

// export const updateJumbleWebsite = (token, jumbleId, jumbleWebsite) =>
//   axios
//     .put(`/api/jumbles/edit/${jumbleId}`, jumbleWebsite, headers(token))
//     .then(response => response.data)

// export const deleteJumble = (token, jumbleId) =>
//   axios
//     .delete(`/api/jumbles/edit/${jumbleId}`, headers(token))
//     .then(response => response.data)

// //Add Rezension GET - POST
// export const getRezensionsList = (token, jumbleId, rezensionId) =>
//   axios
//     .get(`/api/jumbles/${jumbleId}/${rezensionId}`, headers(token))
//     .then(response => response.data)

// export const postRezension = (token, jumbleId, rezensionId, user_id, rating) =>
//   axios
//     .post(
//       `api/jumbles/${jumbleId}/${rezensionId}}`,
//       rezensionId,
//       rating,
//       headers(token)
//     )
//     .then(response => response.data)

// //Signup User POST
// export const postUser = credentials =>
//   axios.post(`/api/user/signup`, credentials).then(response => response.data)

// //Profile bzw User GET
// // export const getUserById = (token, userId) =>
// //   axios
// //     .get(`/api/user/${userId}`, headers(token))
// //     .then(response => response.data)

// // //Edit Profile bzw User PUT - DELETE
// // export const updateUserName = (token, userId, newusername) =>
// //   axios
// //     .put(`/api/user/edit/${userId}`, { username: newusername }, headers(token))
// //     .then(response => response.data)

// // export const updateUserImage = (token, userId, userImage) =>
// //   axios
// //     .put(`/api/user/edit/${userId}`, userImage, headers(token))
// //     .then(response => response.data)

// // export const updateUserEmail = (token, userId, email) =>
// //   axios
// //     .put(`/api/user/edit/${userId}`, email, headers(token))
// //     .then(response => response.data)

// // export const updateUserPassword = (token, passwords) =>
// //   axios
// //     .put(
// //       `/api/user/edit/${userId}`,
// //       { password: passwords.newPassword, oldPassword: passwords.oldPassword },
// //       headers(token)
// //     )
// //     .then(response => response.data)

// // export const updateUserText = (token, userId, userText) =>
// //   axios
// //     .put(`/api/user/edit/${userId}`, userText, headers(token))
// //     .then(response => response.data)

// // export const deleteUser = (token, userId) =>
// //   axios
// //     .delete(`/api/user/edit/${userId}`, headers(token))
// //     .then(response => response.data)
