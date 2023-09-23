export const WALPI = 'walpi'
export const OST = 'ost'
export const MAPS_WALPI = 'https://maps.app.goo.gl/qvgsNpR7s87h1iMy7'
export const MAPS_OST = 'https://maps.app.goo.gl/8BZ5ANRNJJSkQqwc9'
export const BOOK_WALPI = 'https://buchung.treatwell.de/ort/424008/menue/'
export const BOOK_OST = 'https://buchung.treatwell.de/place/309318/menu/'

export const getMaps = (salon: string) => {
  if (salon === WALPI) {
    return MAPS_WALPI
  } else {
    return MAPS_OST
  }
}

export const bookingLink = (salon: string) => {
  if (salon === WALPI) {
    return BOOK_WALPI
  } else {
    return BOOK_OST
  }
}
