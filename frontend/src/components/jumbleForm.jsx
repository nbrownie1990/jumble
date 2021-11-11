import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import DateField from './dateField'
import TextField from './textField'
import TextArea from './textArea'
import Address from './address'
import Select from './select'
import { categories, getCategories } from '../services/categoryService'
import { getJumble } from '../services/jumbleService'
import { jumbles } from '../services/featureService'

class JumbleForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      category: '',
      rating: '',
      date: '',
      time: '',
      website: '',
      text: '',
    }

    this.changeNameHandler = this.changeNameHandler.bind(this)
    this.changeCategoryHandler = this.changeCategoryHandler.bind(this)
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeTimeHandler = this.changeTimeHandler.bind(this)
    this.changeWebsiteHandler = this.changeWebsiteHandler.bind(this)
    this.changeTextHandler = this.changeTextHandler.bind(this)
  }

  changeNameHandler = e => {
    this.setState({ name: e.target.value })
  }

  changeCategoryHandler = e => {
    this.setState({ category: e.target.value })
  }

  changeDateHandler = e => {
    this.setState({ date: e.target.value })
  }

  changeTimeHandler = e => {
    this.setState({ time: e.target.value })
  }

  changeWebsiteHandler = e => {
    this.setState({ website: e.target.value })
  }

  changeTextHandler = e => {
    this.setState({ text: e.target.value })
  }

  // componentDidMount() {
  //   const categories = getCategories()
  //   this.setState({ categories })

  //   const jumbleId = this.props.match.params.id
  //   if (jumbleId === 'new') return

  //   const jumble = getJumble(jumbleId)
  //   if (!jumble) return this.props.navigate.replace('/not-found')

  //   this.setState({ data: this.mapToViewModel(jumble) })
  // }

  // mapToViewModel(jumble) {
  //   return {
  //     _id: jumble.jumble_id,
  //     name: jumble.jumble_name,
  //     categoryId: jumble.category_id,
  //     rating: jumble_rating,
  //     termin: jumble_termin,
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-6 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <div className="img-wrapper mt-5 ">
              <img
                className="rounded-circle jumble-img"
                src="https://www.deutschlandmalanders.com/wp-content/uploads/2020/10/Flohschanze-Flohmarkt-Schanzenviertel-Hamburg-1.jpg"
                alt="This is a jumble"
              />
              <Link
                to={`/jumbles/edit`}
                className="btn edit-btn"
                type="button"
                data-toggle="tooltip"
                title="Edit"
              >
                <i className="fas fa-pen ps-2 pb-1"></i>
              </Link>
            </div>
            <span className="font-weight-bold mt-2 mb-3">Bild des Jumbles</span>

            <label className="labels">Beschreibung</label>
            <TextArea
              rows="5"
              placeholder=" Bitte beschreibe diesen Jumble"
              name="text"
              type="text"
              value={this.state.text}
              onChange={this.changeTextHandler}
            />
            <span id="dateHelpInline" className="form-text">
              Jumbles sind Orte für dein Ausrangiertes! Es geht um:
              Food-Sharing, Flea Markets, Clothing Donations & Second-Hand in
              deiner Nähe!
            </span>
          </div>
        </div>

        <div className="col-md-6 border-right">
          <div className="p-md-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-right">Erstelle ein Jumble</h2>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label className="labels">Jumble-Name</label>
                <TextField
                  placeholder="z.B. Flohschanze"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.changeNameHandler}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Jumble-Category</label>
                <Select
                  placeholder=""
                  name="category"
                  type="select"
                  value={this.state.category}
                  onChange={this.changeCategoryHandler}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-10 col-8 m-2">
                <label className="labels">Jumble-Adresse</label>
                <Address
                  // address={address}
                  // handleAddressInputChange={handleAddressInputChange}
                  readOnly={false}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Termin</label>
                <DateField
                  placeholder="Termin"
                  name="date"
                  type="date"
                  value={this.state.date}
                  onChange={this.changeDateHandler}
                />
                <span id="dateHelpInline" className="form-text">
                  Wann findet das nächste Jumble statt?
                </span>
              </div>
              <div className="col-md-12">
                <label className="labels">Öffnungszeiten</label>
                <TextField
                  type="text"
                  placeholder=" z.B. 9-16 Uhr"
                  name="time"
                  value={this.state.time}
                  onChange={this.changeTimeHandler}
                />

                <span id="timeHelpInline" className="form-text">
                  Wie sind die Öffnungszeiten des Jumbles?
                </span>
              </div>
              <div className="col-md-12">
                <label className="labels"> Website</label>
                <TextField
                  type="url"
                  placeholder="z.B. www.flohschanze.de"
                  name="website"
                  value={this.state.website}
                  onChange={this.changeWebsiteHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default JumbleForm
// {mode === 'new' && (
//   <ButtonGroup>
//     <Button type="button" onClick={handleCancel}>
//       abbrechen
//     </Button>
//     <Button onClick={handleSaveNewAddress}> speichern </Button>
//   </ButtonGroup>
// )}
// {readOnly && (
//   <ButtonGroup>
//     <Button type="button" onClick={() => handleEditAddress(address.id)}>
//       bearbeiten
//     </Button>
//   </ButtonGroup>
// )}
// {mode === 'edit' && (
//   <ButtonGroup>
//     <Button type="button" onClick={handleCancel}>
//       abbrechen
//     </Button>
//     <Button
//       type="button"
//       onClick={() => handleSaveAddressChanges(address.id)}
//     >
//       Änderungen speichern
//     </Button>
//     <Button type="button" onClick={handleDeleteAddress}>
//       <Icon src={trash} />
//     </Button>
//   </ButtonGroup>
// )}
