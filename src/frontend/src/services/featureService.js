import * as categoriesAPI from './categoryService'

export const jumbles = [
  {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.034084142948, 38.909671288923],
        },
        properties: {
          name: 'Flohschanze',
          category: {
            _id: '5b21ca3eeb7f6fbccd471878',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.049766, 38.900772],
        },
        properties: {
          name: 'Bibi-Land',
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
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.043929, 38.910525],
        },
        properties: {
          name: 'Lulu-Land',
          category: {
            _id: '5b21ca3eeb7f6fbccd471819',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.0672, 38.90516896],
        },
        properties: {
          name: 'Lego-Land',
          category: {
            _id: '1b21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.002583742142, 38.887041080933],
        },
        properties: {
          name: 'Lili-Land',
          category: {
            _id: '3b21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-76.933492720127, 38.99225245786],
        },
        properties: {
          name: 'Lou-Land',
          category: {
            _id: '2b21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.097083330154, 38.980979],
        },
        properties: {
          name: 'Live-Land',
          category: {
            _id: '4b21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.359425054188, 38.958058116661],
        },
        properties: {
          name: 'Leio-Land',
          category: {
            _id: '7h21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.10853099823, 38.880100922392],
        },
        properties: {
          name: 'Papa-Land',
          category: {
            _id: '9b21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.28784, 40.008008],
        },
        properties: {
          name: 'Liop-Land',
          category: {
            _id: '8b21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.20121216774, 39.954030175164],
        },
        properties: {
          name: 'Uff-Land',
          category: {
            _id: '7b21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.043959498405, 38.903883387232],
        },
        properties: {
          name: 'Lele-Land',
          category: {
            _id: '6b21ca3eeb7f6fbccd471818',
            categoryname: 'Flea Markets',
          },
          address: 'Fake-Street 123',
          postalCode: '20005',
          openingDate: '28.02.21',
          openingTime: '10 - 16 Uhr',
          website: 'www.fakeweb.com',
          rating: 3,
        },
      },
    ],
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
