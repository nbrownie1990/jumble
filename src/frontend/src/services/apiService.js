import axios from 'axios'

// export const getToken = credentials =>
//   axios
//     .post('/api/auth/access_token', credentials)
//     .then(response => response.data)
//     .then(dto => dto.token)
//
// const headers = token => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// })

//Map GET
//JumbleMapList GET
//Categories GET
export const getAllCategories = () =>
  axios.get(`/categories`).then(response => response.data)

// Category GET
export const getCategoryById = (categoryId) =>
  axios
    .get(`/categories/${categoryId}`)
    .then(response => response.data)

//JumbleList (all Jumbles) GET
export const getAllJumbles = () =>
  axios.get(`/jumbles/getall`)
      .then(response => response.data)


            export const getJumbleById = (jumbleId) =>
                axios
                    .get(`/jumbles/${jumbleId}`)
                    .then(response => response.data)


//Add Jumble POST
            export const addNewJumble = (jumble) =>
                axios
                    .post(`/jumbles/new`, jumble)
                    .then(response => response.data)

// export const addNewAddress = ( address) =>
//   axios
//     .post(`/api/jumbles/new`, address)
//     .then(response => response.data)

//Jumble GET to update
            export const getJumbleToUpdate = (jumbleId) =>
                axios
                    .get(`/jumbles/edit/${jumbleId}`)
                    .then(response => response.data)

// //Edit Jumble PUT - DELETE
            export const updateJumbleName = (jumbleId, jumbleName) =>
                axios
                    .put(`/jumbles/edit/${jumbleId}`, jumbleName)
                    .then(response => response.data)

            export const updateJumbleImage = (jumbleId, jumbleImage) =>
                axios
                    .put(`/jumbles/edit/${jumbleId}`, jumbleImage)
                    .then(response => response.data)

            export const updateJumbleAddress = (jumbleId, jumbleAddress) =>
                axios
                    .put(`/jumbles/edit/${jumbleId}`, jumbleAddress)
                    .then(response => response.data)

            export const updateJumbleDate = (jumbleId, jumbleDate) =>
                axios
                    .put(`/jumbles/edit/${jumbleId}`, jumbleDate)
                    .then(response => response.data)

            export const updateJumbleTime = (jumbleId, jumbleTime) =>
                axios
                    .put(`/jumbles/edit/${jumbleId}`, jumbleTime,)
                    .then(response => response.data)

            export const updateJumbleWebsite = (jumbleId, jumbleWebsite) =>
                axios
                    .put(`/jumbles/edit/${jumbleId}`, jumbleWebsite)
                    .then(response => response.data)

            export const deleteJumble = (jumbleId) =>
                axios
                    .delete(`/jumbles/edit/${jumbleId}/delete`)
                    .then(response => response.data)

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
            export const addNewUser = credentials =>
                axios.post(`/api/user/signup`, credentials).then(response => response.data)

// //Profile bzw User GET
            export const getUserById = (userId) =>
                axios
                    .get(`/api/user/${userId}`)
                    .then(response => response.data)
                    .then(response => {
                          console.log(response.data);
                    });

// // //Edit Profile bzw User PUT - DELETE
            export const updateUserName = (userId, newUsername) =>
                axios
                    .put(`/api/user/edit/${userId}`, {username: newUsername})
                    .then(response => response.data)

            export const updateUserImage = (userId, userImage) =>
                axios
                    .put(`/api/user/edit/${userId}`, userImage)
                    .then(response => response.data)

            export const updateUserEmail = (userId, email) =>
                axios
                    .put(`/api/user/edit/${userId}`, email)
                    .then(response => response.data)

// export const updateUserPassword = (userPassword) =>
//   axios
//     .put(
//       `/api/user/edit/${userId}`,
//       { userPassword: userPassword.newUserPassword, oldPassword: userPassword.oldUserPassword },
//       headers(token)
//     )
//     .then(response => response.data)

            export const updateUserText = (userId, userText) =>
                axios
                    .put(`/api/user/edit/${userId}`, userText)
                    .then(response => response.data)

            export const deleteUser = (userId) =>
                axios
                    .delete(`/api/user/edit/${userId}/delete`)
                    .then(response => response.data)

