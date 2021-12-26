import axios from 'axios';

const baseUrl = `http://localhost:8080/api`

// --------------------------------- Category -------------------------------------------

export const getAllCategories = async () => {
    return await axios
       .get(`${baseUrl}/categories/getall`)
       .then(response => {
            return response.data;
        });
}

export const getCategoryById = async (categoryId) => {
    return await axios
        .get(`${baseUrl}/categories/${categoryId}`)
        .then(response => {
            return response.data;
        });
}

// --------------------------------- Jumble -------------------------------------------

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

export const addNewJumble = async (jumble, address) => {
    return await axios
        .post(`${baseUrl}/jumbles/new`, {jumble, address},
    {
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        withCredentials:true,
    })
        .then(response => {
            return response.data;
        });
}

export const updateJumble = async (jumbleId, jumble, address) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumble, address)
        .then(response => {
            return response.data;
        });
}

export const deleteJumble = async(jumbleId) => {
    return await axios
        .delete(`${baseUrl}/jumbles/edit/${jumbleId}/delete`)
        .then(response => {
            return response.data;
        });
}

// --------------------------------- Address -------------------------------------------
export const getAddressById = async (addressId) => {
    return await axios
        .get(`${baseUrl}/jumbles/addresses/${addressId}`)
        .then(response => {
            return response.data;
        });
}

export const addNewAddress = (address) =>
    axios
        .post(`/api/jumbles/new`, address)
        .then(response => response.data)


export const updateJumbleAddress = async (jumbleId, addressId, address) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}/${addressId}`, address)
        .then(response => {
            return response.data;
        });
}

// export const updateJumbleAndAddress = async(jumbleId, jumble, address) => {
//     return await axios
//         .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumble, address)
//         .then(response => {
//             return response.data;
//         });
//}


// --------------------------------- Reviews -------------------------------------------

export const getReviewById = async (reviewId) => {
    return await axios
        .get(`${baseUrl}/reviews/${reviewId}`)
        .then(response => {
            return response.data;
        });
}

export const getReviewList = () =>
  axios
    .get(`/api/reviews/getall`)
   // .then(checkStatus)
    .then(response => response.data)


export const addReview = (jumbleId, review) =>
  axios
    .post(
      `${baseUrl}/jumbles/edit/${jumbleId}/newreview`,
        review
    )
    .then(response => response.data)


export const deleteReview = (jumbleId, reviewId) =>
  axios
    .delete(`${baseUrl}/jumbles/edit/${jumbleId}/delete/${reviewId}`)
    .then(response => response.data)

//////////////////////////////////
///////////User//////////////////
////////////////////////////////
////Signup User POST
// export const addNewUser = credentials =>
//     axios
//         .post(`${baseUrl}/user/register`, credentials)
//         .then(response => response.data)

// export const addUserProfile = (username) =>
//     axios
//         .post(`${baseUrl}/user/new`, username )
//         .then(response => response.data)

// --------------------------------- User -------------------------------------------

export const getUserByUserName = async (username) => {
    return await axios
        .get(`${baseUrl}/users/${username}`)
        .then(response => {
            return response.data;
        });
}

export const getUserById = async (id) => {
    return await axios
        .get(`${baseUrl}/users/${id}`)
        .then(response => {
            return response.data;
        });
}

export const updateUser = async (id, user) => {
    return await axios
        .put(`${baseUrl}/users/edit/${id}`, user)
        .then(response => {
            return response.data;
        });
}

export const deleteUser = async (id) => {
    return await axios
        .delete(`${baseUrl}/users/edit/${id}/delete`)
        .then(response => {
            localStorage.removeItem("user");
            return response.data;
        })
}

// export const updatePassword = (passwords) =>
//     axios
//         .put(
//             `${baseUrl}/user/edit/updatePassword`,
//             { password: passwords.newPassword, oldPassword: passwords.oldPassword },
//             headers(token)
//         )
//         .then(response => response.data)

/////////////////////////////////
///////////JUMBLE////////////////
////////////////////////////////
// export const getAllJumbles = () =>
//    axios
//        .get(`http://localhost:8080/api/jumbles/getall`)
//        .then(response => response.data)

//JumbleList (all Jumbles) GET
// export const getAllJumbles = () =>
//     axios
//         .get(`${baseUrl}/jumbles/getall`)
//         .then(response => response.data)
////////
// export const updateJumbleName = async (jumbleId, jumbleName) => {
//     return await axios
//         .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleName)
//         .then(response => {
//             return response.data;
//         });
// }
////
// export const updateJumbleImage = async (jumbleId, jumbleImage) => {
//     return await axios
//         .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleImage)
//         .then(response => {
//             return response.data;
//         });
// }
// export const updateJumbleDate = async (jumbleId, jumbleDate) => {
//     return await axios
//         .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleDate)
//         .then(response => {
//             return response.data;
//         });
// }

// export const updateJumbleTime = async (jumbleId, jumbleTime) => {
//     return await axios
//         .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleTime,)
//         .then(response => {
//             return response.data;
//         });
// }

// export const updateJumbleWebsite = async (jumbleId, jumbleWebsite) => {
//     return await axios
//         .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleWebsite)
//         .then(response => {
//             return response.data;
//         });
// }

///////////USER////////////////
// // //Edit Profile bzw User PUT - DELETE
// export const updateUserName = async (userId, newUsername) => {
//     return await axios
//         .put(`${baseUrl}/user/edit/${userId}`, {username: newUsername})
//         .then(response => {
//             return response.data;
//         });
// }
// export const updateUserImage = async (userId, userImage) => {
//     return await axios
//         .put(`${baseUrl}/user/edit/${userId}`, userImage)
//         .then(response => {
//             return response.data;
//         });
// }
// export const updateUserEmail = async (userId, email) => {
//     return await axios
//         .put(`${baseUrl}/user/edit/${userId}`, email)
//         .then(response => {
//             return response.data;
//         });
// }
//////
// export const updateUserPassword = (userPassword) =>
//   axios
//     .put(
//       `/api/user/edit/${userId}`,
//       { userPassword: userPassword.newUserPassword, oldPassword: userPassword.oldUserPassword },
//       headers(token)
//     )
//     .then(response => response.data)
/////
// export const updateUserText = async (userId, userText) => {
//     return await axios
//         .put(`${baseUrl}/user/edit/${userId}`, userText)
//         .then(response => {
//             return response.data;
//         });
// }

