import React, { Component } from 'react'
import JumblesService from '../services/jumblesService'

class ListJumbleComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jumbles: [],
    }
  }
  componentDidMount() {
    JumblesService.getJumbles().then(res => {
      this.setState({ jumbles: res.data })
    })
  }

  render() {
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
              {this.state.jumbles.map(jumble => (
                <React.Fragment key={jumble.jumble_id}>
                  <tr>
                    <td>{jumble.jumble_name}</td>
                    <td>{jumble.jumble_category}</td>
                    <td>{jumble.jumble_address}</td>
                    <td>{jumble.jumble_rating}</td>
                    <td>{jumble.jumble_termin}</td>
                    <td>{jumble.jumble_website}</td>
                    <td>{jumble.jumble_postalCode}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListJumbleComponent
