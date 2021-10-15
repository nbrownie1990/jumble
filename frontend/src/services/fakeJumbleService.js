import * as categoriesAPI from './fakeCategoryService'

const jumbles = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    name: 'Flohschanze',
    category: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Flea Markets' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
    rating: 3,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    title: 'Flohmarkt Michelwiese',
    genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Flea Markets' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    title: 'Fairteiler Winterhude',
    genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Food-Sharing' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    title: 'Secondella',
    genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Second-Hand' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181a',
    title: 'Second-Hand Shop Altona',
    genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Second-Hand' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181b',
    title: 'Humana Winterhude',
    genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Second-Hand' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181e',
    title: 'Fairteiler Altona',
    genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Food-Sharing' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181f',
    title: 'Isemarkt Fairteiler',
    genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Food-Sharing' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471821',
    title: 'Flohmarkt am Lehmweg',
    genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Flea Markets' },
    address: 'Fake-Street 123',
    openingDates: '28.02.21',
    openingTimes: '10 - 16 Uhr',
    website: 'www.fakeweb.com',
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
  jumbleInDb.openingDates = jumble.openingDates
  jumbleInDb.openingTimes = jumble.openingTimes
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
