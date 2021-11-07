import React from 'react'
import Star from './rating'
import '../assets/css/style.css'

class Rezension extends React.Component {
  handleSave = () => {
    //Navigate back to Category
    // this.props.history.push('/home')
  }

  render() {
    return (
      <React.Fragment>
        <div className="rez container scroll-list">
          <div className="chat w-100">
            <div className="mine messages">
              <div className=" message last row">
                <div className="col-xs-6 col-12">
                  <img
                    className="rounded-circle mt-5"
                    src="https://i.imgur.com/O1RmJXT.jpg"
                    width="50"
                    alt="This is a jumble"
                  />
                </div>
                <div className="col-12">
                  Macht Spaß! <Star />
                </div>
                <div className="col-12">
                  Verkaufe hier einmal im Monat meine Klamotten und es lohnt
                  sich!
                </div>
              </div>
            </div>

            <div className="yours messages">
              <div className="message last row">
                <div className="col-xs-6 col-12">
                  <img
                    className="rounded-circle mt-5"
                    src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                    width="50"
                    alt="This is a jumble"
                  />
                </div>
                <div className="col-12">
                  Macht Spaß! <Star />
                </div>
                <div className="col-12">
                  Sehr gute Auswahl an tollen Sachen.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group col-md-12 text-center mt-5">
          <label className="labels m-2 ">
            Wie sind deine Erfahrungen mit diesem Jumble?
          </label>
          <Star />
          <textarea
            className="form-control rounded-3"
            rows="5"
            placeholder="Wie war/ist es?"
          ></textarea>
        </div>
        <div className="mt-5 text-center">
          <button
            onClick={this.handleSave}
            className="btn btn-primary profile-button"
            type="button"
          >
            Add Comment
          </button>
        </div>
      </React.Fragment>
    )
  }
}
export default Rezension
