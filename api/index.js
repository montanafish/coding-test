export const getShowTitles = (numOfRecords = 1) => {
  const showTitles = []

  for (let i = 0; i < numOfRecords; i += 1) {
    showTitles.push({
      id: i,
      title: 'Home and Away',
      description: 'THE ENDLESS SUMMER',
      image: {
        medium: '/static/images/tile-medium.jpg',
        large: '/static/images/tile.jpg'
      },
      icon: '/static/images/logo-40x40.png',
      seasons: 8,
      views: 5752532,
    })
  }
  return showTitles
}
