//https://www.npmjs.com/package/react-hook-form-auto
import { createSchema } from 'react-hook-form-auto'

export const signupSchema = createSchema("signupSchema", {
    username: {
        type: "string",
        max: 32,
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        minLength: 6,
        required: true
    },
    confirmPassword: {
        type: "string",
        minLength: 6,
        required: true
    }
});


export const loginSchema = createSchema("loginSchema", {
    username: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        minLength: 6,
        required: true
    },
});

export const profileSchema = createSchema("profileSchema", {
    email: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        minLength: 6,
        required: true
    },
    userText: {
        type: "string"
    },
});



export const jumbleSchema = createSchema("jumbleSchema", {
    jumbleName: {
        type: "string",
        required: true
    },
    jumbleImage: {
        type: "string"
    },
    jumbleText: {
        type: "string",
    },
    jumbleDate: {
        type: "string"
    },
    jumbleTime: {
        type: "string"
    },
    jumbleWebsite: {
        type: "string"
    }
});




