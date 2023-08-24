import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from 'react'

interface Paragraph {
  title: string
  content: string
}

export const paragraphsImpressum: Paragraph[] = [
  {
    title: 'Warnhinweis zu Inhalten',
    content: `Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.`,
  },
  {
    title: 'Externe Links',
    content: `Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.`,
  },
  {
    title: 'Urheber- und Leistungsschutzrechte',
    content: `Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.`,
  },
  {
    title: 'Besondere Nutzungsbedingungen',
    content: `Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.`,
  },
]

export const paragraphsDatenschutz: Paragraph[] = [
  {
    title: "Allgemeiner Hinweis und Pflichtinformationen",
    content: "Die verantwortliche Person für die Datenverarbeitung auf dieser Website (hairappartement.de) ist: Stefan Duschl. Die verantwortliche Person entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.)."
  },
  {
    title: "Widerruf Ihrer Einwilligung zur Datenverarbeitung",
    content: "Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt."
  },
  {
    title: "Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde",
    content: "Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html."
  },
  {
    title: "Recht auf Datenübertragbarkeit",
    content: "Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist."
  },
  {
    title: "Recht auf Auskunft, Berichtigung, Sperrung, Löschung",
    content: "Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden."
  }
];

const ParagraphList = ({ paragraphs }: { paragraphs: Paragraph[] }) => {
  const [openItem, setOpenItem] = useState<number | null>(null) // only open first category on larger screens

  const isLargerScreen = useBreakpointValue({ base: false, xl: true })

  const handleToggle = (index: number) => {
    setOpenItem((prevState) =>
      prevState === index ? (isLargerScreen ? index : null) : index,
    )
  }

  return (
    <Flex
      direction="row"
      width={['90vw', '90vw', '90vw', '90vw', '80em']}
      margin="0 auto"
      justifyContent="center"
      gap="4px"
    >
      <Box
        width="100%"
        maxW="600px"
        bg="walpi.backgroundDark"
        borderRadius={isLargerScreen ? 'none' : 'lg'}
        borderLeftRadius="lg"
        shadow="lg"
        py={2}
      >
        <Accordion
          width="100%"
          index={
            isLargerScreen
              ? openItem === null
                ? [0]
                : [openItem]
              : openItem === null
              ? []
              : [openItem]
          }
        >
          {paragraphs.map((paragraph, index) => (
            <AccordionItem key={index} borderColor="walpi.backgroundDark">
              <AccordionButton
                _hover={{ bg: 'walpi.primary.400' }}
                _expanded={{ bg: 'walpi.primary.900' }}
                onClick={() => handleToggle(index)}
              >
                <Box flex="1" textAlign="left" mr={6}>
                  §{index + 1} {paragraph.title}
                </Box>
                {openItem === index ||
                (openItem === null && isLargerScreen && index === 0) ? (
                  <ChevronDownIcon boxSize={6} />
                ) : (
                  <ChevronRightIcon boxSize={6} />
                )}
              </AccordionButton>
              {!isLargerScreen &&
                (openItem === index ||
                  (openItem === null && isLargerScreen && index === 0)) && (
                  <AccordionPanel pb={4}>
                    <Text>{paragraph.content}</Text>
                  </AccordionPanel>
                )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      {isLargerScreen && (
        <Box
          width="100%"
          maxW="600px"
          bg="walpi.backgroundDark"
          borderRadius={isLargerScreen ? 'none' : 'lg'}
          borderRightRadius="lg"
          shadow="lg"
          p={4}
        >
          <Text>{paragraphs[openItem === null ? 0 : openItem].content}</Text>
        </Box>
      )}
    </Flex>
  )
}
export default ParagraphList
