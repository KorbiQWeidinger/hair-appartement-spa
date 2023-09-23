export type Service = {
  name: string
  price: number
  minutes: number
}

export type Category = {
  categoryName: string
  services: Service[]
}

export const PRICES_BY_CATEGORY_WALPI: Category[] = [
  {
    categoryName: 'Damen - Haarschnitte & Stylings',
    services: [
      {
        name: 'Damen - Pony',
        price: 1,
        minutes: 5,
      },
      {
        name: 'Damen - Waschen, Pflege & Föhnen',
        price: 21.5,
        minutes: 15,
      },
      {
        name: 'Damen - Cut & Go',
        price: 39,
        minutes: 30,
      },
      {
        name: 'Damen - Haarschnitt',
        price: 49,
        minutes: 60,
      },
      {
        name: 'Damen - Hochsteckfrisur',
        price: 50,
        minutes: 60,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Schnitt & Föhnen',
    services: [
      {
        name: 'Damen - Neufärbung, Schnitt & Föhnen',
        price: 98,
        minutes: 120,
      },
      {
        name: 'Damen - Ansatzfärbung, Schnitt & Föhnen',
        price: 89,
        minutes: 115,
      },
      {
        name: 'Damen - Intensivtönung, Schnitt & Föhnen',
        price: 98,
        minutes: 115,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Pflege & Föhnen',
        price: 68.5,
        minutes: 90,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Pflege & Föhnen',
        price: 100.5,
        minutes: 120,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Cut & Go',
    services: [
      {
        name: 'Damen - Neufärbung, Cut & Go',
        price: 88,
        minutes: 90,
      },
      {
        name: 'Damen - Ansatzfärbung, Cut & Go',
        price: 79,
        minutes: 85,
      },
      {
        name: 'Damen - Intensivtönung, Cut & Go',
        price: 88,
        minutes: 85,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Cut & Go',
        price: 86,
        minutes: 105,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Cut & Go',
        price: 118,
        minutes: 135,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Waschen, Pflege & Föhnen',
    services: [
      {
        name: 'Damen - Neufärbung, Pflege & Föhnen',
        price: 70.5,
        minutes: 75,
      },
      {
        name: 'Damen - Ansatzfärbung, Pflege & Föhnen',
        price: 61.5,
        minutes: 70,
      },
      {
        name: 'Damen - Intensivtönung, Pflege & Föhnen',
        price: 70.5,
        minutes: 70,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Schnitt & Föhnen',
        price: 96,
        minutes: 135,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Schnitt & Föhnen',
        price: 128,
        minutes: 165,
      },
    ],
  },
  {
    categoryName: 'Herren - Haarschnitte & Stylings',
    services: [
      {
        name: 'Herren - Konturschnitt',
        price: 15,
        minutes: 15,
      },
      {
        name: 'Herren - Haarschnitt',
        price: 30,
        minutes: 30,
      },
      {
        name: 'Herrenhaarschnitt ohne Waschen',
        price: 25,
        minutes: 30,
      },
    ],
  },
  {
    categoryName: 'Kinder - Haarschnitte & Styling',
    services: [
      {
        name: 'Mädchen unter 12 Jahre - Haarschnitt',
        price: 16.5,
        minutes: 30,
      },
      {
        name: 'Mädchen von 12 bis 16 Jahre - Waschen, Pflege, Schneiden & Föhnen',
        price: 30,
        minutes: 30,
      },
      {
        name: 'Jungs unter 12 Jahre - Haarschnitt',
        price: 16.5,
        minutes: 30,
      },
    ],
  },
  {
    categoryName: 'Wimpern/Augenbrauen',
    services: [
      {
        name: 'Augenbrauen zupfen',
        price: 13,
        minutes: 15,
      },
      {
        name: 'Augenbrauen färben',
        price: 8,
        minutes: 10,
      },
      {
        name: 'Augenbrauen färben & zupfen',
        price: 21,
        minutes: 25,
      },
      {
        name: 'Wimpern färben',
        price: 8,
        minutes: 10,
      },
      {
        name: 'Augenbrauen & Wimpern färben',
        price: 16,
        minutes: 20,
      },
    ],
  },
]

export const PRICES_BY_CATEGORY_OST: Category[] = []
