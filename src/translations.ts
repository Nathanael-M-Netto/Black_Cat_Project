// Define a estrutura dos textos para ter um tipo forte
export type TranslationKeys = {
  heroTitle: string;
  heroSubtitle: string;
  navAbout: string;
  navMyths: string;
  navGallery: string;
  navHelp: string;
  allureTitle: string;
  allureCard1Title: string;
  allureCard1Text: string;
  allureCard2Title: string;
  allureCard2Text: string;
  allureCard3Title: string;
  allureCard3Text: string;
  mythsTitle: string;
  myth1: string;
  myth1Text: string;
  reality1: string;
  reality1Text: string;
  myth2: string;
  myth2Text: string;
  reality2: string;
  reality2Text: string;
  galleryTitle: string;
  gallerySubtitle: string;
  // Novos textos para a secção "Help" e "Footer"
  helpTitle: string;
  helpSubtitle: string;
  helpCard1Title: string;
  helpCard1Text: string;
  helpCard2Title: string;
  helpCard2Text: string;
  helpCard3Title: string;
  helpCard3Text: string;
  footerText: string;
  findOutMore: string;
  footerRights: string; 
}

// Objeto contendo todas as traduções
export const translations: { [key: string]: TranslationKeys } = {
  en: {
    heroTitle: "Beyond Superstition",
    heroSubtitle: "Discover the truth and elegance of black cats.",
    navAbout: "The Allure",
    navMyths: "Myths",
    navGallery: "Gallery",
    navHelp: "Help",
    allureTitle: "Why are they so fascinating?",
    allureCard1Title: "Elegant & Mysterious",
    allureCard1Text: "With their sleek, dark coats and striking eyes, black cats have a unique and captivating beauty that has been admired for centuries.",
    allureCard2Title: "Symbols of Good Luck",
    allureCard2Text: "In many cultures, such as in the UK and Japan, a black cat crossing your path is considered a sign of good fortune and prosperity.",
    allureCard3Title: "Affectionate Companions",
    allureCard3Text: "Often defying stereotypes, black cats are known for being incredibly loving, playful, and loyal companions, forming strong bonds with their families.",
    mythsTitle: "Myths vs. Reality",
    myth1: "Myth: Black cats bring bad luck.",
    myth1Text: "This superstition originated in the Middle Ages in Europe, where they were associated with witchcraft.",
    reality1: "Reality: They are symbols of good fortune.",
    reality1Text: "In many parts of the world, like Japan and Scotland, black cats are seen as harbingers of prosperity and good luck.",
    myth2: "Myth: They are less friendly.",
    myth2Text: "Their color has no influence on their personality, but this stereotype sadly affects their adoption rates.",
    reality2: "Reality: They are loving and diverse.",
    reality2Text: "Black cats can be from various breeds, each with unique traits. Many are known for being particularly cuddly and playful.",
    galleryTitle: "A Gallery of Shadows",
    gallerySubtitle: "Admire the unique beauty and personality of these magnificent felines.",
    // Textos em Inglês
    helpTitle: "How You Can Help",
    helpSubtitle: "Every action, big or small, makes a difference in the lives of these wonderful cats.",
    helpCard1Title: "Adopt a Friend",
    helpCard1Text: "Consider opening your home to a black cat. They offer just as much love and joy as any other cat.",
    helpCard2Title: "Educate & Share",
    helpCard2Text: "Talk to friends and family. Share what you've learned and help dismantle old, harmful superstitions.",
    helpCard3Title: "Support Shelters",
    helpCard3Text: "Local shelters are always in need of donations, volunteers, and support to care for all animals.",
    footerText: "Developed by",
    findOutMore: "Find out more",
    footerRights: "All rights reserved.",
  },
  pt: {
    heroTitle: "Além da Superstição",
    heroSubtitle: "Descubra a verdade e a elegância dos gatos pretos.",
    navAbout: "O Fascínio",
    navMyths: "Mitos",
    navGallery: "Galeria",
    navHelp: "Ajude",
    allureTitle: "Porque são tão fascinantes?",
    allureCard1Title: "Elegantes e Misteriosos",
    allureCard1Text: "Com a sua pelagem escura e lustrosa e os seus olhos marcantes, os gatos pretos possuem uma beleza única e cativante que é admirada há séculos.",
    allureCard2Title: "Símbolos de Boa Sorte",
    allureCard2Text: "Em muitas culturas, como no Reino Unido e no Japão, um gato preto que se cruza no seu caminho é considerado um sinal de boa sorte e prosperidade.",
    allureCard3Title: "Companheiros Afetuosos",
    allureCard3Text: "Desafiando frequentemente os estereótipos, os gatos pretos são conhecidos por serem companheiros incrivelmente amorosos, brincalhões e leais, formando laços fortes com as suas famílias.",
    mythsTitle: "Mitos vs. Realidade",
    myth1: "Mito: Gatos pretos dão azar.",
    myth1Text: "Esta superstição surgiu na Idade Média na Europa, onde eram associados à bruxaria.",
    reality1: "Realidade: São símbolos de boa sorte.",
    reality1Text: "Em muitas partes do mundo, como no Japão e na Escócia, os gatos pretos são vistos como portadores de prosperidade e boa sorte.",
    myth2: "Mito: São menos amigáveis.",
    myth2Text: "A sua cor não tem qualquer influência na sua personalidade, mas este estereótipo afeta tristemente as suas taxas de adoção.",
    reality2: "Realidade: São amorosos e diversos.",
    reality2Text: "Gatos pretos podem ser de várias raças, cada uma com traços únicos. Muitos são conhecidos por serem particularmente carinhosos e brincalhões.",
    galleryTitle: "Uma Galeria de Sombras",
    gallerySubtitle: "Admire a beleza e personalidade únicas destes magníficos felinos.",
    // Textos em Português
    helpTitle: "Como Pode Ajudar",
    helpSubtitle: "Cada ação, grande ou pequena, faz a diferença na vida destes gatos maravilhosos.",
    helpCard1Title: "Adote um Amigo",
    helpCard1Text: "Considere abrir a sua casa para um gato preto. Eles oferecem tanto amor e alegria como qualquer outro gato.",
    helpCard2Title: "Eduque e Partilhe",
    helpCard2Text: "Fale com amigos e família. Partilhe o que aprendeu e ajude a desmantelar velhas e prejudiciais superstições.",
    helpCard3Title: "Apoie Abrigos",
    helpCard3Text: "Os abrigos locais estão sempre a precisar de doações, voluntários e apoio para cuidar de todos os animais.",
    footerText: "Desenvolvido por",
    findOutMore: "Saiba mais",
    footerRights: "Todos os direitos reservados.",
  },
};
