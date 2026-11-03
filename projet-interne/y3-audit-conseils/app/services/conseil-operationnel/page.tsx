import Link from "next/link"
import { MainSlider, type Slide } from "../../components/main-slider"

type ServiceBlock = {
  title: string
  what: string
  why: { label: string; text: string }[]
  how: string
}

const services: ServiceBlock[] = [
  {
    title: "Modélisation du risque de crédit & IFRS 9",
    what: "C'est la conception et la mise en œuvre des modèles de pertes de crédit attendues (ECL) exigés par la norme IFRS 9 : probabilité de défaut (PD), perte en cas de défaut (LGD), exposition au défaut (EAD), classification en stages et intégration de scénarios macroéconomiques prospectifs.",
    why: [
      { label: "Provisionnement juste", text: "Vos dépréciations reflètent le risque réel de votre portefeuille" },
      { label: "Conformité normative", text: "Vous répondez aux exigences de vos commissaires aux comptes et de votre maison mère" },
      { label: "Anticipation", text: "Vous identifiez plus tôt la dégradation de vos encours" },
    ],
    how: "Nous analysons vos historiques de crédit et construisons vos paramètres de risque. Nous définissons vos règles de staging et vos scénarios forward-looking. Nous calculons vos ECL, documentons la méthodologie et vous livrons un outil de calcul réutilisable par vos équipes.",
  },
  {
    title: "Stress tests & conformité prudentielle",
    what: "C'est l'évaluation de la résistance de votre établissement face à des scénarios défavorables (choc économique, hausse des défauts, crise de liquidité) et le calcul de vos ratios réglementaires selon le dispositif prudentiel Bâle II/III applicable dans l'UMOA.",
    why: [
      { label: "Solidité financière", text: "Vous connaissez l'impact des chocs sur vos fonds propres" },
      { label: "Dialogue réglementaire", text: "Vous présentez des analyses solides à la BCEAO et à la Commission Bancaire" },
      { label: "Planification du capital", text: "Vous anticipez vos besoins en fonds propres" },
    ],
    how: "Nous concevons des scénarios adaptés à votre profil de risque et à votre environnement économique. Nous projetons vos expositions, vos pertes et vos ratios de solvabilité. Nous vous accompagnons dans votre processus d'évaluation de l'adéquation des fonds propres (ICAAP) et dans la restitution des résultats à votre gouvernance.",
  },
  {
    title: "Validation & revue indépendante des modèles",
    what: "C'est l'examen critique et indépendant de vos modèles existants (scoring, provisionnement, notation, tarification) afin de vérifier leur pertinence conceptuelle, la qualité de leurs données et la fiabilité de leurs résultats dans le temps.",
    why: [
      { label: "Fiabilité", text: "Vous vous assurez que vos modèles mesurent correctement le risque" },
      { label: "Maîtrise du risque de modèle", text: "Nous détectons les biais, les faiblesses et les dérives de performance" },
      { label: "Gouvernance", text: "Vous disposez d'une opinion indépendante pour vos comités et vos auditeurs" },
    ],
    how: "Nous revoyons la documentation et les hypothèses de vos modèles. Nous réalisons des tests de performance, de stabilité et de backtesting, et répliquons les calculs clés. Nous vous remettons un rapport de validation présentant nos constats, leur niveau de criticité et un plan de remédiation.",
  },
  {
    title: "Risques de marché, de liquidité & ALM",
    what: "C'est la mesure et le pilotage des risques de taux, de change et de liquidité liés à la structure de votre bilan, à travers la gestion actif-passif (ALM) : impasses de taux et de liquidité, sensibilité de la marge et de la valeur économique, Value at Risk.",
    why: [
      { label: "Rentabilité protégée", text: "Vous limitez l'impact des variations de taux sur votre marge" },
      { label: "Liquidité sécurisée", text: "Vous anticipez vos besoins de financement" },
      { label: "Pilotage du bilan", text: "Vos décisions de collecte et de placement reposent sur des chiffres fiables" },
    ],
    how: "Nous cartographions vos expositions et définissons vos conventions d'écoulement. Nous construisons vos indicateurs de risques et vos limites. Nous mettons en place un reporting ALM périodique destiné à votre comité ALCO.",
  },
  {
    title: "Data Analytics & tableaux de bord des risques",
    what: "C'est l'exploitation avancée de vos données grâce à la statistique et au machine learning : scoring d'octroi, segmentation de clientèle, détection d'anomalies et de fraudes, et restitution sous forme de tableaux de bord interactifs.",
    why: [
      { label: "Décisions plus rapides", text: "Vos équipes disposent d'indicateurs à jour et lisibles" },
      { label: "Détection précoce", text: "Les signaux faibles et les comportements atypiques sont repérés automatiquement" },
      { label: "Valorisation de vos données", text: "Votre patrimoine de données devient un avantage concurrentiel" },
    ],
    how: "Nous auditons la qualité de vos données et structurons vos flux. Nous développons des modèles prédictifs adaptés à vos enjeux métier. Nous déployons des tableaux de bord de suivi des risques et formons vos équipes à leur utilisation.",
  },
]

const reasons = [
  {
    label: "Double compétence finance & quantitatif",
    text: "Une équipe qui maîtrise à la fois les normes comptables et prudentielles et les méthodes statistiques",
  },
  {
    label: "Connaissance du marché UMOA",
    text: "Une compréhension fine des exigences de la BCEAO, de la Commission Bancaire et de la CIMA",
  },
  {
    label: "Modèles transparents et auditables",
    text: "Chaque modèle est documenté, justifié et transmis à vos équipes",
  },
  {
    label: "Transfert de compétences",
    text: "Nous formons vos collaborateurs pour vous rendre autonomes dans la durée",
  },
]

export default function ConseilOperationnelPage() {
  const conseilOperationnelSlides: Slide[] = [
    {
      id: 1,
      title: "Quantitative Risk & Analytics",
      description: "La modélisation quantitative au service de la maîtrise de vos risques.",
      image: "/images/5.png",
      buttonText: "Découvrir nos services",
      buttonLink: "/services/conseil-operationnel",
      priority: true,
    },
  ]

  return (
    <>
      <MainSlider slides={conseilOperationnelSlides} />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="pl-4 md:pl-8 lg:pl-32 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-4">Quantitative Risk & Analytics</h1>
            <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-12 mb-16">
            {/* Introduction */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-4">
                La modélisation quantitative au service de la maîtrise de vos risques
              </h2>
              <p className="text-xl font-bold text-[#80C342] mb-4">
                Notre engagement : Rigueur, Transparence et Décision Éclairée
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Le risque est au cœur de toute activité financière. Chez Y3 Audit & Conseils, notre practice Quantitative
                Risk & Analytics (QRA) transforme vos données en indicateurs fiables pour mesurer, anticiper et piloter vos
                risques.
              </p>
              <p className="text-lg text-gray-700">
                Nous combinons expertise financière, modélisation statistique et maîtrise des exigences réglementaires
                (IFRS, dispositif prudentiel UMOA, CIMA) pour vous fournir des modèles robustes, documentés et auditables,
                qui éclairent vos décisions stratégiques et rassurent vos régulateurs comme vos actionnaires.
              </p>
            </div>

            {/* Services */}
            {services.map((service, index) => {
              const dark = index % 2 === 0
              return (
                <div
                  key={service.title}
                  className={
                    dark
                      ? "bg-gradient-to-br from-[#073E5D] to-[#0a4a6b] rounded-lg shadow-sm p-6 md:p-8 text-white"
                      : "bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm"
                  }
                >
                  <h2
                    className={`text-2xl md:text-3xl font-bold mb-8 relative group ${dark ? "" : "text-[#073E5D]"}`}
                  >
                    {service.title}
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#80C342] rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </h2>

                  <h3 className={`text-xl font-bold mb-2 ${dark ? "" : "text-gray-800"}`}>Qu'est-ce que c'est ?</h3>
                  <p className={`text-lg mb-6 ${dark ? "text-gray-100" : "text-gray-700"}`}>{service.what}</p>

                  <h3 className={`text-xl font-bold mb-2 ${dark ? "" : "text-gray-800"}`}>
                    Pourquoi c'est important pour vous ?
                  </h3>
                  <ul className={`text-lg space-y-2 mb-6 ${dark ? "text-gray-100" : "text-gray-700"}`}>
                    {service.why.map((item) => (
                      <li key={item.label}>
                        • <strong>{item.label} :</strong> {item.text}
                      </li>
                    ))}
                  </ul>

                  <h3 className={`text-xl font-bold mb-2 ${dark ? "" : "text-gray-800"}`}>
                    Comment nous vous accompagnons ?
                  </h3>
                  <p className={`text-lg ${dark ? "text-gray-100" : "text-gray-700"}`}>{service.how}</p>
                </div>
              )
            })}

            {/* Pourquoi choisir Y3 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-4">
                Pourquoi choisir Y3 Audit & Conseils pour votre Quantitative Risk & Analytics ?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Nous sommes plus qu'un prestataire de modèles, nous sommes votre partenaire de maîtrise des risques.
              </p>
              <ul className="text-lg text-gray-700 space-y-2">
                {reasons.map((item) => (
                  <li key={item.label}>
                    • <strong>{item.label} :</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'un expert en modélisation des risques ?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment notre practice Quantitative Risk
              & Analytics peut renforcer la maîtrise de vos risques et la qualité de vos décisions.
            </p>
            <Link
              href="/contact/rendez-vous"
              className="inline-block bg-[#80C342] hover:bg-[#073E5D] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-lg"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
