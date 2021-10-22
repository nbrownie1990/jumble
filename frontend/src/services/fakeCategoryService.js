export const categories = [
  {
    _id: '5b21ca3eeb7f6fbccd471818',
    name: 'Flea Markets',
    description:
      'Der Flohmarkt ist nämlich ein Markt für den Handel mit gebrauchten Waren jeder Art die man auch Trödel nennt, alte Möbelstücke, Bücher, Briefmarken, Kleidung Spielzeug - auf einem Flohmarkt gibt es alles!',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471814',
    name: 'Second-Hand',
    description:
      'Ein Gebrauchtwarenladen oder auch Secondhandladen verkauft gebrauchte Waren, wobei dabei vor allem getragene Bekleidung gemeint ist.',
  },
  {
    _id: '5b21ca3eeb7f6fbccd471820',
    name: 'Food-Sharing',
    description:
      'Unter den Begriff Foodsharing ist eine soziale Bewegung entstanden, die sich der Verteilung von überschüssigen Lebensmitteln widmet.',
  },

  {
    _id: '5b21ca3eeb7f6fbccd471921',
    name: 'Donation',
    description:
      'Alle Angebote zum organisierten Einsammeln von gebrauchter oder ungebrauchter Kleidung. Die Spende soll in einem noch verwendbaren Zustand sein.',
  },

  {
    _id: '5b21ca3eeb7f6fbccd771821',
    name: 'Upcylcling & Tausch',
    description:
      'In diesen Jumbles kannst du dein Ausrangiertes kreativ verwerten oder mit anderen tauschen.',
  },

  {
    _id: '5b21ca3eeb7f6fbced471821',
    name: 'Online-Angebote',
    description:
      'Alle Online-Angebote zum organisierten Einsammeln von gebrauchter oder ungebrauchter Kleidung. Die Spende soll in einem noch verwendbaren Zustand sein.',
  },
]

export function getCategories() {
  return categories.filter(c => c)
}
