import axios from 'axios'

class ApiService{

    getToken = credentials =>
  axios
    .post('api/auth/access_token', credentials)
    .then(response => response.data)
    .then(dto => dto.token)

headers = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

//Map GET
//JumbleMapList GET
//Categories GET

 getAllCategories = () =>
   axios.get(`api/categories`).then(response => response.data)

// Category GET
getCategoryById = (categoryId) =>
  axios
    .get(`api/categories/${categoryId}`)
    .then(response => response.data)

//JumbleList (all Jumbles) GET

     getAllJumbles = () =>
   axios
       .get(`api/jumbles/getall`)
       .then(response => response.data)



    getJumbleById = (jumbleId) =>
         axios
           .get(`api/jumbles/${jumbleId}`)
           .then(response => response.data)


//Add Jumble POST
             addNewJumble = (jumble) =>
                axios
                    .post(`api/jumbles/new`, jumble)
                    .then(response => response.data)

// export const addNewAddress = ( address) =>
//   axios
//     .post(`/api/jumbles/new`, address)
//     .then(response => response.data)

//Jumble GET to update
            getJumbleToUpdate = (jumbleId) =>
                axios
                    .get(`api/jumbles/edit/${jumbleId}`)
                    .then(response => response.data)

// //Edit Jumble PUT - DELETE
            updateJumbleName = (jumbleId, jumbleName) =>
                axios
                    .put(`api/jumbles/edit/${jumbleId}`, jumbleName)
                    .then(response => response.data)

           updateJumbleImage = (jumbleId, jumbleImage) =>
                axios
                    .put(`api/jumbles/edit/${jumbleId}`, jumbleImage)
                    .then(response => response.data)

            updateJumbleAddress = (jumbleId, jumbleAddress) =>
                axios
                    .put(`api/jumbles/edit/${jumbleId}`, jumbleAddress)
                    .then(response => response.data)

             updateJumbleDate = (jumbleId, jumbleDate) =>
                axios
                    .put(`api/jumbles/edit/${jumbleId}`, jumbleDate)
                    .then(response => response.data)

             updateJumbleTime = (jumbleId, jumbleTime) =>
                axios
                    .put(`api/jumbles/edit/${jumbleId}`, jumbleTime,)
                    .then(response => response.data)

             updateJumbleWebsite = (jumbleId, jumbleWebsite) =>
                axios
                    .put(`api/jumbles/edit/${jumbleId}`, jumbleWebsite)
                    .then(response => response.data)

             deleteJumble = (jumbleId) =>
                axios
                    .delete(`api/jumbles/edit/${jumbleId}/delete`)
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
            addNewUser = credentials =>
                axios.post(`/api/user/signup`, credentials).then(response => response.data)

// //Profile bzw User GET
             getUserById = (userId) =>
                axios
                    .get(`/api/user/${userId}`)
                    .then(response => response.data)
                    .then(response => {
                          console.log(response.data);
                    });

// // //Edit Profile bzw User PUT - DELETE
             updateUserName = (userId, newUsername) =>
                axios
                    .put(`/api/user/edit/${userId}`, {username: newUsername})
                    .then(response => response.data)

          updateUserImage = (userId, userImage) =>
                axios
                    .put(`/api/user/edit/${userId}`, userImage)
                    .then(response => response.data)

             updateUserEmail = (userId, email) =>
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

            updateUserText = (userId, userText) =>
                axios
                    .put(`/api/user/edit/${userId}`, userText)
                    .then(response => response.data)

             deleteUser = (userId) =>
                axios
                    .delete(`/api/user/edit/${userId}/delete`)
                    .then(response => response.data)
}

export default new ApiService();