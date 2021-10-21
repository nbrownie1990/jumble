import * as categoriesAPI from './fakeCategoryService'

const jumbles = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    name: 'Flohschanze',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    name: 'Flohmarkt Michelwiese',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    name: 'Fairteiler Winterhude',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    name: 'Secondella',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181a',
    name: 'Second-Hand Shop Altona',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181b',
    name: 'Humana Winterhude',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181e',
    name: 'Fairteiler Altona',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181f',
    name: 'Isemarkt Fairteiler',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471821',
    name: 'Flohmarkt am Lehmweg',
    category: {
      _id: '5b21ca3eeb7f6fbccd471818',
      categoryname: 'Flea Markets',
    },
    address: 'Fake-Street 123',
    postalCode: '20005',
    openingDate: '28.02.21',
    openingTime: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
]

export function getJumbles() {
  return jumbles
}

export function getJumble(id) {
  return jumbles.find(j => j._id === id)
}

export function saveJumble(jumble) {
  let jumbleInDb = jumbles.find(m => m._id === jumble._id) || {}
  jumbleInDb.name = jumble.name
  jumbleInDb.category = categoriesAPI.categories.find(
    c => c._id === jumble.categoryId
  )

  jumbleInDb.address = jumble.address
  jumbleInDb.openingDate = jumble.openingDate
  jumbleInDb.openingTime = jumble.openingTime
  jumbleInDb.website = jumble.website

  if (!jumbleInDb._id) {
    jumbleInDb._id = Date.now()
    jumbles.push(jumbleInDb)
  }

  return jumbleInDb
}

export function deleteJumble(id) {
  let jumbleInDb = jumbles.find(j => j._id === id)
  jumbles.splice(jumbles.indexOf(jumbleInDb), 1)
  return jumbleInDb
}
