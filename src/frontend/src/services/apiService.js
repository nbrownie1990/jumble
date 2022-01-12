import axios from 'axios';

//const baseUrlLocal = `http://localhost:8080/api`  ${baseUrl}

const baseUrl = `https://jumbles.herokuapp.com/api`

// --------------------------------- Category -------------------------------------------

export const getAllCategories = async () => {
    return await axios
       .get(`/categories/getall`)
       .then(response => {
            return response.data;
        });
}

export const getCategoryById = async (categoryId) => {
    return await axios
        .get(`/categories/${categoryId}`)
        .then(response => {
            return response.data;
        });
}

// --------------------------------- Jumble -------------------------------------------

export const getAllJumbles = async () => {
    return await axios
        .get(`/jumbles/getall`)
        .then(response => {
            return response.data;
        });
}

export const getJumblesByCategoryId = async (categoryId) => {
    return await axios
        .get(`/jumbles/category/${categoryId}`)
        .then(response => {
            return response.data;
        });
}

export const getJumbleById = (jumbleId) => {
    return axios
        .get(`/jumbles/${jumbleId}`)
        .then(response => {
            return response.data;
        });
}


export const addNewJumble = async (jumble) => {
    return await axios
        .post(`/jumbles/new`, jumble,
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


export const updateJumble = async(jumbleId, jumble) => {
    return await axios
        .put(`/jumbles/edit/${jumbleId}`, jumble)
        .then(response => {
            return response.data;
        });
}


export const deleteJumble = async(jumbleId) => {
    return await axios
        .delete(`/jumbles/edit/${jumbleId}/delete`)
        .then(response => {
            return response.data;
        });
}

// --------------------------------- Address -------------------------------------------
// export const getAddressById = async (addressId) => {
//     return await axios
//         .get(`${baseUrl}/jumbles/addresses/${addressId}`)
//         .then(response => {
//             return response.data;
//         });
// }



// --------------------------------- Reviews -------------------------------------------

export const getReviewById = async (reviewId) => {
    return await axios
        .get(`/reviews/${reviewId}`)
        .then(response => {
            return response.data;
        });
}

export const getReviewList = async () =>{
return await axios
    .get(`/reviews/getall`)
    .then(response => {
        return response.data;
    });
}

export const getReviewListByUserId = async (userId) => {
    return await axios
        .get(`/reviews/user/${userId}`)
        .then(response => {
            return response.data;
        });
}

export const getReviewListByJumbleId = async (jumbleId) => {
    return await axios
        .get(`/reviews/jumble/${jumbleId}`)
        .then(response => {
            return response.data;
        });
}



export const addReview = async (jumbleId, review) =>{
return await axios
    .post(
      `/jumbles/edit/${jumbleId}/newreview`,
        review
    )
    .then(response => {
        return response.data;
    });
}
export const deleteReview = async (reviewId) => {
    return await axios
        .delete(`/reviews/edit/delete/${reviewId}`)
        .then(response => {
            return response.data;
        });
}
// --------------------------------- User -------------------------------------------

export const getUserByUserName = async (username) => {
    return await axios
        .get(`/users/${username}`)
        .then(response => {
            return response.data;
        });
}

export const getUserById = async (id) => {
    return await axios
        .get(`/users/${id}`)
        .then(response => {
            return response.data;
        });
}

export const updateUser = async (id, user) => {
    return await axios
        .put(`/users/edit/${id}`, user)
        .then(response => {
            return response.data;
        });
}


export const deleteUser = async (id) => {
    return await axios
        .delete(`/users/edit/${id}/delete`)
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




