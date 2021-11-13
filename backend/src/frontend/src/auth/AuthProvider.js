// import { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import jwt from 'jsonwebtoken'
// import { getToken } from '../services/apiService'
// import AuthContext from './AuthContext'

// export default function AuthProvider({ children }) {
//   const [token, setToken] = useState()
//   const claims = jwt.decode(token)
//   const navigate = useNavigate()

//   const user = claims && {
//     username: claims.sub,
//     role: claims.role,
//   }
//   const login = credentials => getToken(credentials).then(setToken)

//   const logout = () => {
//     setToken()
//     navigate('/login')
//   }

//   return (
//     <AuthContext.Provider value={{ token, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)
