import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { getJumbleById } from '../services/apiService'

const initialState = {
  id: null,
  text: '',
  name: '',
  category: '',
  date: '',
  time: '',
  website: '',
}
export default function TryIt() {
  const [error, setError] = useState()
  const [jumble, setJumble] = useState(initialState)
  const { user, token } = useAuth()
  const { id } = useParams()

  useEffect(() => {
    setError()
    getJumbleById(token, jumble, id).then(setJumble).catch(setError)
  }, [token, jumble, id])

  return (
    <div>
      <h2 className="text-center">JumblesList</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Jumble Name</th>
              <th>Jumble Address</th>
              <th>Jumble Image</th>
              <th>Jumble Image</th>
              <th>Jumble Image</th>
              <th>Jumble Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <React.Fragment key={jumble.id}>
              <tr>
                <td>{jumble.name}</td>
                <td>{jumble.category}</td>
                <td>{jumble.address}</td>
                <td>{jumble.rating}</td>
                <td>{jumble.termin}</td>
                <td>{jumble.website}</td>
                <td>{jumble.postalCode}</td>
              </tr>
            </React.Fragment>
          </tbody>
        </table>
      </div>
    </div>
  )
}
