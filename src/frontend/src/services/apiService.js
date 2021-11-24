import axios from 'axios';
import React from 'react';

const baseUrl = `http://localhost:8080/api`

// export const getToken = credentials =>
//   axios
//     .post('api/auth/access_token', credentials)
//     .then(response => response.data)
//     .then(dto => dto.token)
//
//const headers = token => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// })

//Map GET
//JumbleMapList GET
//Categories GET

export const  getAllCategories = async () => {
    return await axios
       .get(`${baseUrl}/categories/getall`)
       .then(response => {
            return response.data;
        });
}

// Category GET
export const getCategoryById = async (categoryId) => {
    return await axios
        .get(`${baseUrl}/categories/${categoryId}`)
        .then(response => {
            return response.data;
        });
}
//JumbleList (all Jumbles) GET
// export const getAllJumbles = () =>
//     axios
//         .get(`${baseUrl}/jumbles/getall`)
//         .then(response => response.data)


export const getAllJumbles = async () => {
    return await axios
        .get(`${baseUrl}/jumbles/getall`)
        .then(response => {
            return response.data;
        });
}

export const getJumbleById = async (jumbleId) => {
    return await axios
        .get(`${baseUrl}/jumbles/${jumbleId}`)
        .then(response => {
            return response.data;
        });
}


//Add Jumble POST
export const addNewJumble = async (jumble) => {
    return await axios
        .post(`${baseUrl}/jumbles/new`, jumble)
        .then(response => {
            return response.data;
        });
}

// export const addNewAddress = ( address) =>
//   axios
//     .post(`/api/jumbles/new`, address)
//     .then(response => response.data)

//Jumble GET to update
export const getJumbleToUpdate = async (jumbleId) => {
    return await axios
        .get(`${baseUrl}/jumbles/edit/${jumbleId}`)
        .then(response => {
            return response.data;
        });
}

// //Edit Jumble PUT - DELETE
export const updateJumbleName = async (jumbleId, jumbleName) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleName)
        .then(response => {
            return response.data;
        });
}

export const updateJumbleImage = async (jumbleId, jumbleImage) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleImage)
        .then(response => {
            return response.data;
        });
}

export const updateJumbleAddress = async (jumbleId, jumbleAddress) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleAddress)
        .then(response => {
            return response.data;
        });
}

export const updateJumbleDate = async (jumbleId, jumbleDate) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleDate)
        .then(response => {
            return response.data;
        });
}

export const updateJumbleTime = async (jumbleId, jumbleTime) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleTime,)
        .then(response => {
            return response.data;
        });
}

export const updateJumbleWebsite = async (jumbleId, jumbleWebsite) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleWebsite)
        .then(response => {
            return response.data;
        });
}

export const deleteJumble = async (jumbleId) => {
    return await axios
        .delete(`${baseUrl}/jumbles/edit/${jumbleId}/delete`)
        .then(response => {
            return response.data;
        });
}

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
                axios
                    .post(`${baseUrl}/user/signup`, credentials)
                    .then(response => response.data)

// //Profile bzw User GET
export const getUserById = async (userId) => {
    return await axios
        .get(`${baseUrl}/user/${userId}`)
        .then(response => {
            return response.data;
        });
}

// // //Edit Profile bzw User PUT - DELETE
export const updateUserName = async (userId, newUsername) => {
    return await axios
        .put(`${baseUrl}/user/edit/${userId}`, {username: newUsername})
        .then(response => {
            return response.data;
        });
}
export const updateUserImage = async (userId, userImage) => {
    return await axios
        .put(`${baseUrl}/user/edit/${userId}`, userImage)
        .then(response => {
            return response.data;
        });
}
export const updateUserEmail = async (userId, email) => {
    return await axios
        .put(`${baseUrl}/user/edit/${userId}`, email)
        .then(response => {
            return response.data;
        });
}
// export const updateUserPassword = (userPassword) =>
//   axios
//     .put(
//       `/api/user/edit/${userId}`,
//       { userPassword: userPassword.newUserPassword, oldPassword: userPassword.oldUserPassword },
//       headers(token)
//     )
//     .then(response => response.data)

export const updateUserText = async (userId, userText) => {
    return await axios
        .put(`${baseUrl}/user/edit/${userId}`, userText)
        .then(response => {
            return response.data;
        });
}
export const deleteUser = async (userId) => {
    return await axios
        .delete(`${baseUrl}/user/edit/${userId}/delete`)
        .then(response => {
            return response.data;
        });
}






// export const getAllJumbles = () =>
//    axios
//        .get(`http://localhost:8080/api/jumbles/getall`)
//        .then(response => response.data)
