
export const jumbleCategoryOptions = [
    null,
    'Flohmarkt',
    'Upcycling',
    'Donation',
    'FoodSharing'
]

export const initialJumbleState = {
    id: null,
    image: '',
    text: '',
    name: '',
    category: '',
    date: '',
    time: '',
    website: '',
}

export const initialAddressState = {
    id: null,
    street: '',
    number: '',
    zip: '',
    city: 'Hamburg',
    country: 'Deutschland',
}

export const initialViewport = {
    long: 9.993683,
    lat: 53.551086,
    zoom: 12,
}

export const initialLoginState = {
    username: '',
    password: '',
}



//
// export function getInitialViewport() {
//     return initialViewport
// }



// export const initialProfileState = {
//   id: null,
//   user_img: '',
//   user_name: '',
//   user_email: '',
//   user_text: '',
// }