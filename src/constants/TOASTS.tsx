import { OST, WALPI } from './SALONS'

export const TOASTS = [
  {
    salon: WALPI,
    title: 'Salon Walpi hat wieder offen 🥳',
    content: (
      <p>
        Liebe Besucher, <br />
        unser Salon in Walpertskirchen hat wieder für euch geöffnet!
        <br />
        <br />
        <a
          href="https://buchung.treatwell.de/ort/424008/menue/"
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'black',
            color: 'white',
            borderRadius: '20px',
            padding: '5px 20px',
            display: 'inline-block',
          }}
        >
          Jetzt Buchen
        </a>
      </p>
    ),
  },
  {
    salon: OST,
    title: 'Salon Walpi hat wieder offen 🥳',
    content: (
      <p>
        Liebe Besucher, <br />
        unser Salon in Walpertskirchen hat wieder für euch geöffnet!
        <br />
        <br />
        <a
          href="https://buchung.treatwell.de/ort/424008/menue/"
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'black',
            color: 'white',
            borderRadius: '20px',
            padding: '5px 20px',
            display: 'inline-block',
          }}
        >
          Jetzt Buchen
        </a>
      </p>
    ),
  },
] as const
