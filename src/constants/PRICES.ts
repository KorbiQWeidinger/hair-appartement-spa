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

export const PRICES_BY_CATEGORY_OST: Category[] = [
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
        price: 35,
        minutes: 30,
      },
      {
        name: 'Damen - Cut & Go',
        price: 49,
        minutes: 30,
      },
      {
        name: 'Damen - Haarschnitt',
        price: 69,
        minutes: 60,
      },
      {
        name: 'Damen - Hochsteckfrisur',
        price: 69,
        minutes: 60,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Schnitt & Föhnen',
    services: [
      {
        name: 'Damen - Neufärbung, Schnitt & Föhnen',
        price: 138,
        minutes: 120,
      },
      {
        name: 'Damen - Ansatzfärbung, Schnitt & Föhnen',
        price: 127,
        minutes: 115,
      },
      {
        name: 'Damen - Intensivtönung, Schnitt & Föhnen',
        price: 138,
        minutes: 115,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Pflege & Föhnen',
        price: 134,
        minutes: 125,
      },
      {
        name: 'Damen - Foliensträhnen halber Kopf, Pflege & Föhnen',
        price: 154,
        minutes: 135,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Pflege & Föhnen',
        price: 174,
        minutes: 165,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Cut & Go',
    services: [
      {
        name: 'Damen - Neufärbung, Cut & Go',
        price: 118,
        minutes: 90,
      },
      {
        name: 'Damen - Ansatzfärbung, Cut & Go',
        price: 107,
        minutes: 85,
      },
      {
        name: 'Damen - Intensivtönung, Cut & Go',
        price: 118,
        minutes: 85,
      },
      {
        name: 'Damen - Foliensträhnen Scheitel, Cut & Go',
        price: 84,
        minutes: 85,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Cut & Go',
        price: 114,
        minutes: 95,
      },
      {
        name: 'Damen - Foliensträhnen halber Kopf, Cut & Go',
        price: 134,
        minutes: 105,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Cut & Go',
        price: 154,
        minutes: 135,
      },
    ],
  },
  {
    categoryName: 'Damen - Colorationen Inkl. Waschen, Pflege & Föhnen',
    services: [
      {
        name: 'Damen - Neufärbung, Waschen, Pflege & Föhnen',
        price: 104,
        minutes: 90,
      },
      {
        name: 'Damen - Ansatzfärbung, Waschen, Pflege & Föhnen',
        price: 93,
        minutes: 85,
      },
      {
        name: 'Damen - Intensivtönung, Waschen, Pflege & Föhnen',
        price: 104,
        minutes: 85,
      },
      {
        name: 'Damen - Foliensträhnen Scheitel, Waschen, Pflege & Föhnen',
        price: 70,
        minutes: 85,
      },
      {
        name: 'Damen - Foliensträhnen Oberkopf, Waschen, Pflege & Föhnen',
        price: 100,
        minutes: 95,
      },
      {
        name: 'Damen - Foliensträhnen halber Kopf, Waschen, Pflege & Föhnen',
        price: 120,
        minutes: 105,
      },
      {
        name: 'Damen - Foliensträhnen ganzer Kopf, Waschen, Pflege & Föhnen',
        price: 140,
        minutes: 135,
      },
    ],
  },
  {
    categoryName: 'Herren - Haarschnitte & Stylings',
    services: [
      {
        name: 'Herren - Konturschnitt',
        price: 25,
        minutes: 15,
      },
      {
        name: 'Herren - Haarschnitt',
        price: 40,
        minutes: 30,
      },
      {
        name: 'Herrenhaarschnitt & Färben',
        price: 98,
        minutes: 85,
      },
    ],
  },
  {
    categoryName: 'Kinder - Haarschnitte & Styling',
    services: [
      {
        name: 'Mädchen unter 12 Jahre - Haarschnitt',
        price: 25,
        minutes: 30,
      },
      {
        name: 'Mädchen von 12 bis 16 Jahre - Waschen, Pflege, Schneiden & Föhnen',
        price: 38,
        minutes: 30,
      },
      {
        name: 'Jungs unter 12 Jahre - Haarschnitt',
        price: 25,
        minutes: 30,
      },
    ],
  },
  {
    categoryName: 'Wimpern/Augenbrauen',
    services: [
      {
        name: 'Augenbrauen zupfen',
        price: 15,
        minutes: 15,
      },
      {
        name: 'Augenbrauen färben',
        price: 10,
        minutes: 10,
      },
      {
        name: 'Augenbrauen färben & zupfen',
        price: 21,
        minutes: 25,
      },
      {
        name: 'Wimpern färben',
        price: 10,
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
