import React from 'react'
import NavBar from '../../components/navbar'

const Missing = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div class="container-xxl">
        <div class="row mt-3">
          <div class="col-lg-4 col-md-6">
            <div class="mt-3 mb-3">
              <p>
                Hello this is body text, Documentation and examples for common
                text utilities to control alignment, wrapping, weight, and more.
              </p>
            </div>
            <div class="mt-5 mb-5">
              <button type="button" class="btn btn-primary">
                Primary
              </button>
              <button type="button" class="btn btn-secondary">
                Secondary
              </button>
              <button type="button" class="btn btn-success">
                Success
              </button>
              <button type="button" class="btn btn-danger">
                Danger
              </button>
              <button type="button" class="btn btn-warning">
                Warning
              </button>
              <button type="button" class="btn btn-info">
                Info
              </button>
              <button type="button" class="btn btn-light">
                Light
              </button>
              <button type="button" class="btn btn-dark">
                Dark
              </button>
              <button type="button" class="btn btn-link">
                Link
              </button>
            </div>
            <div class="mt-5 mb-5">
              <button type="button" class="btn btn-outline-primary">
                Primary
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Secondary
              </button>
              <button type="button" class="btn btn-outline-success">
                Success
              </button>
              <button type="button" class="btn btn-outline-danger">
                Danger
              </button>
              <button type="button" class="btn btn-outline-warning">
                Warning
              </button>
              <button type="button" class="btn btn-outline-info">
                Info
              </button>
              <button type="button" class="btn btn-outline-light">
                Light
              </button>
              <button type="button" class="btn btn-outline-dark">
                Dark
              </button>
            </div>
            <div class="mt-3 mb-3">
              <p class="fs-1">.fs-1 text</p>
              <p class="fs-2">.fs-2 text</p>
              <p class="fs-3">.fs-3 text</p>
              <p class="fs-4">.fs-4 text</p>
              <p class="fs-5">.fs-5 text</p>
              <p class="fs-6">.fs-6 text</p>
            </div>
            <div class="mt-5 mb-3">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">
                  Left
                </button>
                <button type="button" class="btn btn-primary">
                  Middle
                </button>
                <button type="button" class="btn btn-primary">
                  Right
                </button>
              </div>
            </div>
            <div class="mt-3 mb-3">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-danger">
                  Left
                </button>
                <button type="button" class="btn btn-warning">
                  Middle
                </button>
                <button type="button" class="btn btn-success">
                  Right
                </button>
              </div>
            </div>
            <div class="mt-3 mb-3">
              <div
                class="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" class="btn btn-primary">
                  1
                </button>
                <button type="button" class="btn btn-primary">
                  2
                </button>

                <div class="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row mt-5 mb-3">
                <div class="col-3 p-4 border border-primary me-2 my-2"></div>
                <div class="col-3 p-4 border border-secondary me-2 my-2"></div>
                <div class="col-3 p-4 border border-success me-2 my-2"></div>
                <div class="col-3 p-4 border border-danger me-2 my-2"></div>
                <div class="col-3 p-4 border border-warning me-2 my-2"></div>
                <div class="col-3 p-4 border border-info me-2 my-2"></div>
                <div class="col-3 p-4 border border-light me-2 my-2"></div>
                <div class="col-3 p-4 border border-dark me-2 my-2"></div>
                <div class="col-3 p-4 border border-white me-2 my-2"></div>
              </div>
              <div class="row mt-3 mb-3 d-flex d-block">
                <div class="col-3 p-4 border border-1 me-2 my-2"></div>
                <div class="col-3 p-4 border border-2 me-2 my-2"></div>
                <div class="col-3 p-4 border border-3 me-2 my-2"></div>
                <div class="col-3 p-4 border border-4 me-2 my-2"></div>
                <div class="col-3 p-4 border border-5 me-2 my-2"></div>
              </div>

              <div class="mt-3 mb-3">
                <table class="table table-bordered border-primary">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="mt-3 mb-3">
              <div class="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="alert alert-secondary" role="alert">
                A simple secondary alert—check it out!
              </div>
              <div class="alert alert-success" role="alert">
                A simple success alert—check it out!
              </div>
              <div class="alert alert-danger" role="alert">
                A simple danger alert—check it out!
              </div>
              <div class="alert alert-warning" role="alert">
                A simple warning alert—check it out!
              </div>
              <div class="alert alert-info" role="alert">
                A simple info alert—check it out!
              </div>
              <div class="alert alert-light" role="alert">
                A simple light alert—check it out!
              </div>
              <div class="alert alert-dark" role="alert">
                A simple dark alert—check it out!
              </div>
            </div>
            <div class="mt-3 mb-3">
              <h1 class="display-1">Display 1</h1>
              <h1 class="display-2">Display 2</h1>
              <h1 class="display-3">Display 3</h1>
              <h1 class="display-4">Display 4</h1>
              <h1 class="display-5">Display 5</h1>
              <h1 class="display-6">Display 6</h1>
            </div>
            <div class="mt-3 mb-3">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{' '}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    Home
                  </li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="mt-3 mb-3">
              <span class="badge bg-primary">Primary</span>
              <span class="badge bg-secondary">Secondary</span>
              <span class="badge bg-success">Success</span>
              <span class="badge bg-danger">Danger</span>
              <span class="badge bg-warning text-dark">Warning</span>
              <span class="badge bg-info text-dark">Info</span>
              <span class="badge bg-light text-dark">Light</span>
              <span class="badge bg-dark">Dark</span>
            </div>
            <div class="mt-3 mb-3">
              <span class="badge rounded-pill bg-primary">Primary</span>
              <span class="badge rounded-pill bg-secondary">Secondary</span>
              <span class="badge rounded-pill bg-success">Success</span>
              <span class="badge rounded-pill bg-danger">Danger</span>
              <span class="badge rounded-pill bg-warning text-dark">
                Warning
              </span>
              <span class="badge rounded-pill bg-info text-dark">Info</span>
              <span class="badge rounded-pill bg-light text-dark">Light</span>
              <span class="badge rounded-pill bg-dark">Dark</span>
            </div>

            <div class="mt-3 mb-3">
              <div class="card text-white bg-primary mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Primary card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card text-white bg-secondary mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Secondary card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card text-white bg-success mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card text-white bg-danger mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Danger card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card text-dark bg-warning mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Warning card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card text-dark bg-info mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Info card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card text-dark bg-light mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Light card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card text-white bg-dark mb-3">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <h5 class="card-title">Dark card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Missing
