import axios from 'axios';
import React from 'react';
import authHeader from "../auth/AuthHeader";

const baseUrl = `http://localhost:8080/api`


const user = JSON.parse(localStorage.getItem('user'));
axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem(user.token);


// export const getToken = credentials =>
//   axios
//     .post(`${baseUrl}/auth/access_token`, credentials)
//     .then(response => response.data)
//     .then(dto => dto.token)
//
// const headers = token => ({
//   headers: {
//     Authorization: `Bearer ${user.token}`,
//   },
// })
//

//////////////////////////////////
///////////Auth//////////////////
////////////////////////////////
export const signup = (username, email, password) => {
    return axios
        .post(`${baseUrl}/auth/signup` , {
        username,
        email,
        password
    }, { headers: {
        'Content-Type': 'application/json',
    }}
    )
};

export const login = async (username, password) => {
    return await axios
        .post(`${baseUrl}/auth/signin`, {
            username,
            password
        }, {
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials:true
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        });
};

export const logout = () => {
    return localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


//////////////////////////////////
///////////Category//////////////////
////////////////////////////////

export const getAllCategories = async () => {
    return await axios
       .get(`${baseUrl}/categories/getall`,
           {
               headers:{
                   'Access-Control-Allow-Origin': '*',
                   'Content-Type': 'application/json',
                   authHeader
               },
               withCredentials:true
           })
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
//////////////////////////////////
///////////Jumble//////////////////
////////////////////////////////
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

export const addNewJumble = async (jumble) => {
    return await axios
        .post(`${baseUrl}/jumbles/new`, jumble)
        .then(response => {
            return response.data;
        });
}

export const updateJumble = async (jumbleId, jumble) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumble)
        .then(response => {
            return response.data;
        });
}

/////////// START Address//////////////////
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


export const updateJumbleAddress = async (jumbleId, address) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, address)
        .then(response => {
            return response.data;
        });
}

export const updateJumbleAndAddress = async (jumbleId, jumble, address) => {
    return await axios
        .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumble, address)
        .then(response => {
            return response.data;
        });
}

///////////END Address//////////////////
export const deleteJumble = async (jumbleId) => {
    return await axios
        .delete(`${baseUrl}/jumbles/edit/delete/${jumbleId}`)
        .then(response => {
            return response.data;
        });
}

//////////////////////////////////
///////////Reviews//////////////////
////////////////////////////////
export const getReviewList = () =>
  axios
    .get(`/api/reviews/getall`)
   // .then(checkStatus)
    .then(response => response.data)

export const addReview = (jumbleId, reviewId, review) =>
  axios
    .post(
      `${baseUrl}/jumbles/edit/new/${jumbleId}/${reviewId}`,
      review
    )
    .then(response => response.data)


export const deleteReview = (jumbleId, reviewId) =>
  axios
    .delete(
      `${baseUrl}/jumbles/edit/delete/${jumbleId}/${reviewId}`,
    )
    .then(response => response.data)

//////////////////////////////////
///////////User//////////////////
////////////////////////////////
// //Signup User POST
export const addNewUser = credentials =>
                axios
                    .post(`${baseUrl}/user/register`, credentials)
                    .then(response => response.data)

export const addUserProfile = (username) =>
    axios
        .post(`${baseUrl}/user/new`, username )
        .then(response => response.data)

// //Profile bzw User GET
export const getUserByUserName = async (username) => {
    return await axios
        .get(`${baseUrl}/user/${username}`)
        .then(response => {
            return response.data;
        });
}

export const getUserById = async (userId) => {
    return await axios
        .get(`${baseUrl}/user/${userId}`)
        .then(response => {
            return response.data;
        });
}

export const updateUser = async (userId, user) => {
    return await axios
        .put(`${baseUrl}/user/edit/${userId}`, user)
        .then(response => {
            return response.data;
        });
}

export const deleteUser = async (username) => {
    return await axios
        .delete(`${baseUrl}/user/edit/delete/${username}`)
        .then(response => {
            return response.data;
        });
}

// export const updatePassword = (passwords) =>
//     axios
//         .put(
//             `${baseUrl}/user/edit/updatePassword`,
//             { password: passwords.newPassword, oldPassword: passwords.oldPassword },
//             headers(token)
//         )
//         .then(response => response.data)
///////////JUMBLE////////////////

// export const getAllJumbles = () =>
//    axios
//        .get(`http://localhost:8080/api/jumbles/getall`)
//        .then(response => response.data)

//JumbleList (all Jumbles) GET
// export const getAllJumbles = () =>
//     axios
//         .get(`${baseUrl}/jumbles/getall`)
//         .then(response => response.data)

// export const updateJumbleName = async (jumbleId, jumbleName) => {
//     return await axios
//         .put(`${baseUrl}/jumbles/edit/${jumbleId}`, jumbleName)
//         .then(response => {
//             return response.data;
//         });
// }
//
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
//
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
// export const updateUserPassword = (userPassword) =>
//   axios
//     .put(
//       `/api/user/edit/${userId}`,
//       { userPassword: userPassword.newUserPassword, oldPassword: userPassword.oldUserPassword },
//       headers(token)
//     )
//     .then(response => response.data)

// export const updateUserText = async (userId, userText) => {
//     return await axios
//         .put(`${baseUrl}/user/edit/${userId}`, userText)
//         .then(response => {
//             return response.data;
//         });
// }