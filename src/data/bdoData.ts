export interface DetailsObj {
  prereq: string;
  start: string;
  process: string;
  reward: string;
}

export interface Armor {
  name: string;
  tier: string;
  type: string;
  playstyle?: string;
  icon: string;
  desc: string;
  details?: DetailsObj;
}

export interface Craft {
  name: string;
  category: string;
  icon: string;
  recipe: string;
  details?: DetailsObj;
}

export interface Quest {
  title: string;
  priority: string;
  desc: string;
  details: DetailsObj;
}

export interface Article {
  title: string;
  icon: string;
  content: string;
  slug: string;
  fullContent?: string;
}

export interface Guide {
  category: string;
  articles: Article[];
}

export interface TrackerLogicItem {
  id: string;
  label: string;
  difficulty: string;
  timeEstimate: string;
  failMsg: string;
  details: DetailsObj;
  relatedLinks?: { label: string; url: string; icon: string }[];
}

const formatDetails = (prereq: string, start: string, process: string, reward: string): DetailsObj => {
  return { prereq, start, process, reward };
};

export const bdoData = {
  armors: [
    { 
      name: "Armure de Naru", tier: "naru", type: "Plastron", playstyle: "PvE", icon: "fa-solid fa-shirt", 
      desc: "Équipement de débutant pour l'histoire principale.",
      details: formatDetails(
        "Créer un personnage et commencer l'histoire de Balenos/Serendia.",
        "S'obtient automatiquement en récompense des quêtes principales.",
        "<b>1.</b> Suivez les quêtes de l'Esprit Occulte (R).<br/><b>2.</b> Améliorez cet équipement avec des Pierres Noires de Débutant (données en abondance).<br/><b>3.</b> Appuyez sur ',' pour ouvrir l'Esprit Occulte, allez dans Amélioration, et spammez le bouton jusqu'à atteindre PEN (V).",
        "Un set Naru PEN complet, indispensable pour passer au Tuvala PRI auprès de Fughar."
      )
    },
    { 
      name: "Armure de Tuvala", tier: "tuvala", type: "Plastron", playstyle: "PvE", icon: "fa-solid fa-shirt", 
      desc: "Le standard des serveurs saisonniers. Équivaut à du Boss TET une fois PEN.",
      details: formatDetails(
        "Jouer un personnage de Saison. Avoir converti son armure Naru PEN.",
        "Aller voir Fughar (dans n'importe quelle grande ville) avec le Naru PEN équipé.",
        "<b>1.</b> Retirez l'équipement Naru PEN et parlez à Fughar pour l'échanger contre du Tuvala PRI.<br/><b>2.</b> Utilisez des Pierres Noires Remplies de Temps (farmables sur les zones saisonnières) pour l'améliorer de PRI à PEN.<br/><b>3.</b> Réparez la durabilité maximale perdue en cas d'échec chez le forgeron en utilisant du Minerai de Tuvala.",
        "Tuvala PEN, l'équipement de transition par excellence (équivaut à du Boss TET)."
      )
    },
    { 
      name: "Armure du Nez Rouge", tier: "boss", type: "Plastron", playstyle: "PvE", icon: "fa-solid fa-shirt", 
      desc: "Armure de Boss. Plus facile à monter Caphras 10 que l'Esprit des arbres.",
      details: formatDetails(
        "Niveau 56+. Avoir terminé une saison (Diplôme).",
        "Échange Jetina (Quête de boss garantie) ou achat direct au Marché Commun.",
        "<b>1. Méthode Jetina :</b> Échange ton Tuvala PEN contre un Nez Rouge TET (Garanti).<br/><b>2. Cristal de Boss :</b> Accomplis les quêtes hebdomadaires de boss de Jetina pour créer des pierres d'amélioration garanties.<br/><b>3. Passage au PEN :</b> Applique les pierres niveau par niveau jusqu'au PEN.<br/><b>4. Niveau Caphras :</b> Injecte ~7200 Pierres de Caphras pour atteindre le niveau C10.",
        "Armure Boss PEN C10, étape préparatoire indispensable pour l'Armure du Dieu Déchu."
      )
    },
    { 
      name: "Casque de Griffon", tier: "boss", type: "Casque", playstyle: "PvE/PvP", icon: "fa-solid fa-helmet-safety", 
      desc: "Le meilleur casque de Boss pour la Réduction de Dégâts (DR).",
      details: formatDetails(
        "Niveau 58+. Équipement Tuvala PEN (Saison).",
        "Méthode Jetina (comme le Nez Rouge) ou achat au marché.",
        "<b>1.</b> S'optimise jusqu'en PEN via les quêtes de Jetina ou l'amélioration classique (RNG).<br/><b>2.</b> Farm des Pierres de Caphras dans les zones de Kamasylvia (Manshaum, Ronaros) ou achète-les au marché.<br/><b>3.</b> Injecte plus de 8200 Pierres de Caphras pour le monter niveau 10.",
        "Indispensable pour le build Réduction de Dégâts. Matériau de base pour le Casque de Labreska."
      )
    },
    { 
      name: "Gants de Bheg", tier: "boss", type: "Gants", playstyle: "PvE/PvP", icon: "fa-solid fa-mitten", 
      desc: "Gants de Boss donnant un maximum de Précision.",
      details: formatDetails(
        "Aucun niveau requis, équipable à tout moment.",
        "S'obtient sur le Boss Bheg le Lâche, ou via Jetina.",
        "<b>1.</b> Optimisation via Jetina fortement recommandée si c'est ta première pièce.<br/><b>2.</b> Monte les gants en PEN.<br/><b>3.</b> Ajoute les Caphras jusqu'au C10. Les gants Bheg offrent une Précision colossale, cruciale pour toucher les monstres de la région d'Ulukita ou Elvia.",
        "Gants Boss PEN C10. Seront fusionnés plus tard pour obtenir les Gants de Dahn (Version DR)."
      )
    },
    { 
      name: "Chaussures d'Urugon", tier: "boss", type: "Bottes", playstyle: "PvE/PvP", icon: "fa-solid fa-boot", 
      desc: "Bottes de Boss essentielles pour les builds DR.",
      details: formatDetails(
        "Niveau 58+ (Parchemin Urugon).",
        "Invocation du Boss Urugon à Kamasylvia ou via Jetina.",
        "<b>1.</b> Attention : N'utilise jamais les bottes de Muskan si tu joues un build DR (Réduction de Dégâts). Les Urugon sont obligatoires.<br/><b>2.</b> Passe les bottes en PEN (Jetina ou Achat).<br/><b>3.</b> Monte les bottes au niveau Caphras 10 (~8200 pierres).",
        "Bottes Boss PEN C10. Indispensables pour le craft des Chaussures d'Ator (Version DR)."
      )
    },
    { 
      name: "Arme Sombrétoile (Principale/Éveil)", tier: "blackstar", type: "Arme", playstyle: "PvE", icon: "fa-solid fa-khanda", 
      desc: "Excellente arme PvE. Indispensable pour la transition End-Game.",
      details: formatDetails(
        "Niveau 56+. Avoir un 'Vestige de la Faille' et Énergie de l'Apparition.",
        "Quête '[Sombrétoile] Arme Sombrétoile' via l'Esprit Occulte, ou cadeau de l'éditeur.",
        "<b>1. Cadeau PEN/TET :</b> Depuis 2024, une arme TET ou PEN Sombrétoile est parfois offerte via les défis (Y). Vérifie tes défis !<br/><b>2. Amélioration RNG :</b> Le passage du TET au PEN requiert un Failstack d'au moins 200+. Utilise des Pierres Cron ou un Marteau de J pour empêcher la rétrogradation.<br/><b>3. Coût :</b> Les Pierres Noires Magiques Pures nécessaires se craftent (Alchimie) à l'aide de la Masse de pure magie (drop rare).",
        "Une arme redoutable en PvE avec d'énormes bonus de dégâts aux monstres. En PEN, permet le craft de l'Arme Souveraine."
      )
    },
    { 
      name: "Armure du Dieu Déchu", tier: "fallen", type: "Plastron", playstyle: "End-Game", icon: "fa-solid fa-shirt", 
      desc: "L'armure ultime de torse.",
      details: formatDetails(
        "Armure Nez Rouge ou Esprit des Arbres PEN Caphras 10. Niveau 56+.",
        "Quête de Dorin Morgrim : '[Armure du Dieu déchu] Le désespoir de Jelpia'.",
        "<b>1. La Flamme :</b> Rends-toi à Tunkuta (O'dyllita) et tue des Turos pour looter une Flamme du Désespoir ou 100 Braises de désespoir (à chauffer pour faire une Flamme).<br/><b>2. La Forge :</b> Rends-toi à la Grotte de Dorin Morgrim au Poste de la Garde des Helms. Donne la flamme et l'armure C10.<br/><b>3. Optimisation :</b> L'armure s'améliore du rang Base jusqu'à Oblitération avec des Pierres Noires Sans Défaut du Chaos (Craftez-les en chauffant: 1x Caphras, 1x Pierre Noire, 1x Masse de pure magie, 1x Fragment de cristal dur).",
        "L'Armure du Dieu Déchu. Chaque palier ajoute d'immenses stats défensives."
      )
    },
    { 
      name: "Casque de Labreska", tier: "fallen", type: "Casque", playstyle: "End-Game", icon: "fa-solid fa-helmet-safety", 
      desc: "Casque ultime de la Montagne de l'Hiver.",
      details: formatDetails(
        "Casque Griffon ou Giath PEN Caphras 10. Niveau 56+.",
        "Quête de Floki au Camp de Balacs (Hiver Éternel).",
        "<b>1. L'histoire :</b> Complète la suite de quêtes principale de la Montagne de l'Hiver Éternel.<br/><b>2. La Flamme :</b> Rends-toi à la Forêt de Jade et tue les monstres pour looter une Flamme de Givre (ou 100 Étincelles).<br/><b>3. La Forge :</b> Va voir Floki, donne le casque C10 et la flamme.<br/><b>4. Optimisation :</b> Identique au Dieu Déchu (Pierres Sans Défaut du Chaos).",
        "Casque de Labreska. L'ensemble avec le Dieu Déchu active les puissants bonus de set Antique."
      )
    },
    { 
      name: "Gants de Dahn", tier: "fallen", type: "Gants", playstyle: "End-Game", icon: "fa-solid fa-mitten", 
      desc: "Gants ultimes. Version DR ou Évasion.",
      details: formatDetails(
        "Gants Bheg ou Leebur PEN Caphras 10. Niveau 56+.",
        "Quête de Hyunyong au Village de Moodle (Terre du Matin Radieux).",
        "<b>1. L'histoire :</b> Complète la suite de quêtes du Matin Radieux.<br/><b>2. La Flamme :</b> Participe au Sanctuaire Noir (Boss Hebdomadaires) pour obtenir la Flamme de Hongik (Cristallisation de Hongik) ou achète-la au marché.<br/><b>3. La Forge :</b> Parle à Hyunyong. Si tu utilises Bheg, tu obtiendras Dahn (DR). Si tu utilises Leebur, tu auras Dahn (Évasion).",
        "Gants de Dahn. Complète parfaitement le set DR End-game."
      )
    },
    { 
      name: "Chaussures d'Ator", tier: "fallen", type: "Bottes", playstyle: "End-Game", icon: "fa-solid fa-boot", 
      desc: "Bottes ultimes de la région d'Ulukita.",
      details: formatDetails(
        "Bottes Urugon ou Muskan PEN Caphras 10.",
        "Parler au PNJ Ator dans la région d'Ulukita.",
        "<b>1. La Flamme :</b> Rends-toi dans les zones d'Ulukita (Cité des Morts, Garnison de Tungrad, Labyrinthe de Marni). Farm les monstres pour obtenir une Flamme de Résonance ou 100 Résidus.<br/><b>2. La Forge :</b> Donne les bottes C10 et la flamme à Ator.<br/><b>3. Optimisation :</b> Identique aux autres armures antiques.",
        "Chaussures d'Ator. La dernière pièce des Armures Antiques. Le set est maintenant complet."
      )
    },
    { 
      name: "Arme Souveraine", tier: "fallen", type: "Arme Ultime", playstyle: "End-Game", icon: "fa-solid fa-khanda", 
      desc: "La méta absolue des armes (Matin Radieux Partie 2).",
      details: formatDetails(
        "DEUX armes Sombrétoile PEN du même type, OU 1 Sombrétoile PEN + 1 Flamme Primordiale.",
        "Déblocage via l'histoire de la Forêt du Matin Radieux (Séoul).",
        "<b>1. La Forge :</b> Rejoignez la forge spéciale du Matin Radieux. Insérez vos deux armes Sombrétoile PEN (ou 1 PEN + Flamme).<br/><b>2. L'Amélioration :</b> L'Arme Souveraine possède 10 niveaux (de +1 à +10 DEC). L'optimisation requiert des Pierres Noires Primordiales (craftées avec des Caphras et fragments de mémoire).<br/><b>3. Pénalité :</b> L'échec ne fait pas baisser le niveau, mais le coût en Pierres Cron est exorbitant (plusieurs milliers).",
        "L'Arme Souveraine (+0 Base a déjà de meilleures stats qu'une Sombrétoile PEN). Permet également de choisir des effets bonus personnalisés (Cristaux d'Arme)."
      )
    },
    { 
      name: "Accessoire Deboreka", tier: "blackstar", type: "Bijou", playstyle: "End-Game", icon: "fa-solid fa-ring", 
      desc: "Bijoux extrêmement puissants (Base du Kharazad).",
      details: formatDetails(
        "300+ AP / 400+ DP. Pierres Cron.",
        "Se loot directement sur les zones End-game extrêmes.",
        "<b>1. Farm :</b> Forêt des Cendres (Collier), Crypte des pensées (Ceinture), Ruines de Tungrad (Anneau).<br/><b>2. Amélioration :</b> Les accessoires cassent ou rétrogradent en cas d'échec. L'utilisation de Pierres Cron est obligatoire.<br/><b>3. Méta 2026 :</b> Les Deboreka servent désormais de 'carburant' et de base pour créer les accessoires ultimes Kharazad.",
        "Bonus massif d'AP de set, mais il est recommandé de les transformer en Kharazad."
      )
    },
    { 
      name: "Accessoire Kharazad", tier: "fallen", type: "Bijou", playstyle: "End-Game", icon: "fa-solid fa-ring", 
      desc: "Le nouveau Best-in-Slot (BiS) absolu de BDO.",
      details: formatDetails(
        "Un accessoire Deboreka (Base) + 50 Essences de l'Aube + 300 Fragments Magiques.",
        "Menu Transformation (L) -> Chauffer.",
        "<b>1. Le Craft :</b> Chauffe le Deboreka, les Essences (Achat marché ou craftées) et les Fragments Magiques (Obtenus en fondant des Cristaux de Magie Noire Scellés).<br/><b>2. Amélioration :</b> Le Kharazad s'améliore avec des Pierres de l'Aube (fabriquées via d'autres essences). **Avantage massif :** Il ne se détruit pas et ne perd pas de niveau en cas d'échec ! Il perd simplement sa durabilité maximale (réparable).<br/><b>3. Cristaux :</b> Tu peux insérer un Cristal d'Aube spécifique (ex: Cristal d'Aube d'Attaque +AP, ou de Réduction de Dégâts) directement dans l'accessoire.",
        "Accessoire Kharazad. Redéfinit complètement la montée en puissance End-game."
      )
    },
    { 
      name: "Relique de Kabua", tier: "fallen", type: "Relique", playstyle: "PvE", icon: "fa-solid fa-gem", 
      desc: "Meilleure relique PvE. Augmente drastiquement la survie et les dégâts.",
      details: formatDetails(
        "310+ AP et 400+ DP minimum (Zone d'Ulukita).",
        "Farm à la Cité des Morts ou la Garnison de Tungrad.",
        "<b>1. Farm :</b> Loot direct de la relique (très rare) ou rassemble 100 Fragments de Kabua.<br/><b>2. L'Alchimie :</b> Chauffe les 100 Fragments via l'Alchimie Simple pour obtenir la relique garantie.<br/><b>3. Équipement :</b> Il faut deux reliques identiques pour la meta PvE.",
        "Relique offrant Survie (+20 Réduction Dégâts Monstres) et Attaque (+7 AP Monstres, +50 HP). Indispensable en Ulukita et Dehkia."
      )
    }
  ],

  crafts: [
    { 
      name: "Potion Infinie (PV) - Ornette", category: "Trésor", icon: "fa-solid fa-flask", 
      recipe: "Glande de loup cendre-demi lune + Panacée de Sherekhan + Clochette de Ron + Pierre de son clair + Pierre de courage.",
      details: formatDetails(
        "240+ AP, beaucoup de temps.",
        "Farmer les zones de Drieghan / Kamasylvia.",
        "Trois pièces rares (Loup Sanglants, Nécropole des Sherekhan, Ruines des Arbres Ron). Si le drop ne tombe pas, vous looterez des morceaux de pitié. Avec 100 morceaux de pitié, échangez-les auprès du PNJ Merindora à Grána contre la pièce rare. Combinez ensuite les 3 pièces avec la Pierre de Son Clair et la Pierre de Courage (obtenues via quêtes/récoltes) dans votre inventaire en forme de '+'.",
        "L'Esprit Spirituel d'Ornette. Une potion de vie (275 HP) qui ne s'épuise JAMAIS. Indispensable pour votre fée."
      )
    },
    { 
      name: "Potion Infinie (PM) - Odore", category: "Trésor", icon: "fa-solid fa-flask", 
      recipe: "Larme de Narc (Manshaum) + Clairvoyance de Valtarra (Loup à plumes) + Glande de venin de Markthanan (Tshira) + Pierre de protection.",
      details: formatDetails(
        "240+ AP, outils de récolte (Couteau de tannage).",
        "Farmer les zones Kamasylvia / Drieghan.",
        "Larme de Narc aux Manshaum. Clairvoyance au Loup à Plumes de la Steppe de Navarn (nécessite de tuer ET de tanner le loup avec un couteau magique). Glande de venin aux Ruines de Tshira. Système de pitié à 100 pièces disponible également. Combiner en forme de '+' avec les 2 pierres annexes.",
        "L'Esprit Spirituel d'Odore. Potion de Mana/Endurance/Volonté inépuisable."
      )
    },
    { 
      name: "Cœur de Garmoth Inversé", category: "Optimisation", icon: "fa-solid fa-heart", 
      recipe: "Cœur de Garmoth + Énergie d'Hesed (Alchimie).",
      details: formatDetails(
        "Avoir un Cœur de Garmoth (World boss, Quête O'dyllita, ou achat).",
        "Aller à Duvencrune auprès du forgeron Hughol.",
        "Craft de l'Énergie d'Hesed : nécessite 5 Cristaux Magiques Noirs Concentrés et 3 Pierres Noires Magiques Concentrées (Arme). Chauffer ensemble. Répétez pour obtenir l'énergie requise. Puis Alchimie Simple avec le Cœur de Garmoth.",
        "Un Cœur Inversé. À utiliser sur votre Arme d'Éveil ou Secondaire pour débloquer de nouveaux emplacements de cristaux, augmenter les dégâts critiques et l'endurance."
      )
    },
    { 
      name: "Bijou Kharazad (+0)", category: "Forge Souveraine", icon: "fa-solid fa-hammer", 
      recipe: "1 Accessoire Deboreka (base) + 50 Essences de l'Aube + 300 Fragments Magiques.",
      details: formatDetails(
        "Deboreka (Base minimum). 300 Cristaux Magiques Noirs scellés pour les fragments.",
        "Menu transformation (L).",
        "Chauffer (L) le Deboreka, les essences (achetées au marché ou loot) et les fragments magiques (obtenus en chauffant des cristaux magiques noirs).",
        "Bijou Kharazad (+0) qui offre des stats monstrueuses."
      )
    },
    { 
      name: "Pierre Noire Primordiale", category: "Forge Souveraine", icon: "fa-solid fa-gem", 
      recipe: "Matériau pour améliorer les Armes Souveraines.",
      details: formatDetails(
        "Pierre de Caphras x100, Magie pure x1, Fragments de mémoire x10.",
        "Menu Chauffer (L).",
        "Les ressources dépendent de la recette précise, mais nécessitent de sacrifier des matériaux T3 (Caphras, Traces) pour obtenir la composante primaire des armes du Matin Radieux.",
        "Permet de tenter l'amélioration de l'Arme Souveraine (+1 à DEC)."
      )
    },
    { 
      name: "Encensoir Mythique (Cheval T10)", category: "Dressage", icon: "fa-solid fa-fire", 
      recipe: "Encensoir de la Vieille lune + Plume mythique (x10) + Fougrère (x10) + Fleur de feu (x10).",
      details: formatDetails(
        "Avoir 2 Chevaux de Tier 9 (Même sexe interdit, il faut Mâle et Femelle) au niveau 30 du même type (Arduanatt, Dine, Doom).",
        "Aller au PNJ Gula au Ranch des files de queues-de-pierre.",
        "Fabrication d'encensoirs via l'Alchimie de Manufacture. Il faut réussir à capturer des chevaux sauvages (Plumes), réaliser les quêtes hebdo de dressage (Fougères). Chaque tentative coûte un Encensoir Mythique.",
        "Une chance (Base 3% + failstacks de dressage) de fusionner vos T9 en un T10 Mythique. S'envole (Arduanatt T10), marche sur l'eau de façon permanente (Dine T10) ou fait pop 2 clones de monture pour les alliés (Doom T10)."
      )
    },
    { 
      name: "Coupe de la nuit aride (Collier)", category: "Amélioration Elvia", icon: "fa-solid fa-wine-glass", 
      recipe: "Cœur de la nuit aride (x100) + Éclat de la nuit épuisée (x100) + Cristallisation du désespoir (x100).",
      details: formatDetails(
        "280+ AP. Zones du Royaume d'Elvia (Serendia / Calpheon).",
        "Farmer les zones Orcs, Monastère Sanglant, Nagas.",
        "Combiner les matériaux obtenus à Elvia via l'Alchimie Simple avec du Solvant de la Magie.",
        "Une coupe permettant d'éveiller votre collier pour lui ajouter +150 PV Max."
      )
    },
    { 
      name: "Voilier d'Epheria", category: "Maritime", icon: "fa-solid fa-ship", 
      recipe: "Bois d'œuvre normalisé (x800), Lingot d'acier (x600), Contreplaqué de pin (x1500), Tissu en lin (x300).",
      details: formatDetails(
        "Ouvriers disponibles à Port Epheria, points de contribution.",
        "Investir dans un Chantier Naval de niveau 3 à Port Epheria (Maison 3-5).",
        "Récoltez manuellement du bois de pin et des bûches (hache). Coupez le bois (L). Demandez à vos ouvriers de construire le bateau au chantier (prend plusieurs jours réels en fonction du nombre d'ouvriers assignés).",
        "Le permis du Voilier d'Epheria. Le premier vrai navire, essentiel pour débuter la quête de la Caraque."
      )
    },
    { 
      name: "Tenue La Orzeca", category: "Cosmétique Ultime", icon: "fa-solid fa-shirt", 
      recipe: "100 Poumons de Quturan (gauche pour armure, droit pour casque).",
      details: formatDetails(
        "290+ AP, beaucoup de patience.",
        "Aller à O'dyllita (Turos pour le droit, Vallée d'Olun/Crypte pour le gauche).",
        "Farmer à outrance. Les Poumons tombent soit directement (Drop rarissime), soit par feuilles de Quturan qu'il faut réunir par 100.",
        "Un costume d'armure noire magnifique qui représente l'élite du PvE de BDO. Incorpore un titre exclusif."
      )
    },
    { 
      name: "Boussole spirituelle d'orienteur", category: "Trésor", icon: "fa-regular fa-compass", 
      recipe: "Pièces d'Aakman (Élite) + Hystria (Elten & Tukar) + 3 Joyaux de l'illusion.",
      details: formatDetails(
        "Accès à Aakman / Hystria (250-270+ AP).",
        "Portails dans le désert menant aux ruines.",
        "Looter les 3 parties (extrêmement rare). La partie de l'Elten est le drop le plus notoire et difficile du jeu (des milliers d'heures de farm). Assemblez avec 3 gemmes rouges de sang d'océan.",
        "Une boussole permanente. Révèle la position dans le désert/océan, et permet de téléporter tout son groupe sur sa position instantanément (Cooldown de 10 min)."
      )
    },
    { 
      name: "Carte d'archéologue", category: "Trésor", icon: "fa-regular fa-map", 
      recipe: "Pièces de la Mine de soufre (x2) + Pièces de Pila Ku (x2) + Gemmes d'illusion.",
      details: formatDetails(
        "Farm de Valencia (Mine de soufre de Roud et Prison de Pila Ku).",
        "Fouiller ces zones jusqu'au drop des 4 pièces.",
        "Assemblez les 4 pièces uniques avec des gemmes.",
        "Carte permanente. Permet de se téléporter dans la ville la plus proche, puis de retourner EXACTEMENT à l'endroit initial de la téléportation (Cooldown de 6h). Excellent pour vider son inventaire en plein farm."
      )
    },
    { 
      name: "Matériaux d'Éveil Onirique (T9)", category: "Dressage", icon: "fa-solid fa-horse", 
      recipe: "Souffle de la forêt pure, Racine de fougère et Fourrage de Queues-de-Pierre.",
      details: formatDetails(
        "Un cheval T8 niveau 30, compétence 'Destrier' activée (toutes les icônes en or).",
        "Aller au PNJ Gula au Ranch.",
        "Remplir la jauge d'entraînement à 200%. Les fourrages de queues de pierre sont fabriqués par l'Agriculture (sous-produits agricoles). Les souffles via drop de mobs. Tentez l'éveil avec une Pierre de l'Origine (Krogdalo).",
        "Un cheval Pégase, Licorne ou Doom."
      )
    },
    { 
      name: "Télescope amélioré de Lafi Quikmountain", category: "Trésor", icon: "fa-solid fa-binoculars", 
      recipe: "Parties du Télescope (Drop Ulukita) x3 + Gemmes.",
      details: formatDetails(
        "Zone Ulukita (310+ AP).",
        "Farmer les zones de la Cité des morts et de Tungrad.",
        "Combinaison de l'objet via l'alchimie.",
        "Permet de se téléporter directement à un membre de sa guilde ou groupe (L'inverse de la boussole)."
      )
    },
    { 
      name: "Nol d'Ebenruth", category: "Trésor Maritime", icon: "fa-solid fa-anchor", 
      recipe: "Fleur d'Ebenruth + Pièce de Nol + Carte marine couverte de mousse.",
      details: formatDetails(
        "Caraque Volante, guilde maritime.",
        "Chasse aux monstres (Crocodiles) dans l'océan de Margoria, faire des centaines de missions de chasse au trésor maritime.",
        "Processus nécessitant une patience absolue sur les mers.",
        "Permet à votre Caraque d'utiliser la compétence d'accélération (Briser les vagues) DEUX FOIS de suite sans consommer d'endurance."
      )
    },
    { 
      name: "Tenue de Nouverikant", category: "Cosmétique Ultime", icon: "fa-solid fa-shirt", 
      recipe: "Corne de Nouver + Aile de Nouver sanglant + 30 milliards de Pierres Noires.",
      details: formatDetails(
        "Tuer Nouver Sanglant (World Boss difficile).",
        "Récupérer les items exclusifs de Nouver. Aller voir la chercheuse à l'Oasis d'Ibellab.",
        "La quête requiert d'injecter 30 milliards d'argent en pierres noires intactes pour stabiliser la tenue.",
        "Le costume de Nouver. Invoque un petit dragon (Familier T4) en récompense bonus de l'ensemble."
      )
    }
  ],

  quests: [
    { 
      title: "Quête Principale - Balenos à Mediah", 
      priority: "Haute", 
      desc: "Obligatoire pour les débutants. Débloque le système de saison et l'équipement Naru.",
      details: formatDetails(
        "Aucun.",
        "Créer un personnage et suivre l'Esprit Occulte.",
        "Suivre la série de quêtes 'R' jusqu'à terminer Mediah.",
        "Équipement Naru complet, familiers de base, extension d'inventaire."
      )
    },
    { 
      title: "Abyss One : The Magnus", 
      priority: "Critique", 
      desc: "Débloque la téléportation universelle (Puits) et le dépôt partagé.",
      details: formatDetails(
        "Niveau 15, Quête 'Balenos' terminée.",
        "Quête de l'Esprit Occulte '[Le Magnus] Souvenirs de Velia'.",
        "Résoudre des puzzles dans les abysses de Wuju. Suivre des guides sur YouTube si bloqué.",
        "Téléportation entre villes, Dépôt universel, 1 Armure de Boss PEN (V), nouvelle compétence (Rabam)."
      )
    },
    { 
      title: "O'dyllita (Partie 1 & 2)", 
      priority: "Critique", 
      desc: "Donne accès à la quête du Cœur de Garmoth.",
      details: formatDetails(
        "Niveau 60, Quête de Kamasylvia terminée.",
        "Quêtes principales '[O'dyllita] La fleur de la lune brûlante'.",
        "Longue série narrative avec quelques combats (Turos).",
        "Accès au craft du Cœur de Garmoth inversé, journal de Caphras."
      )
    },
    { 
      title: "Journal d'Igor Bartali", 
      priority: "Critique", 
      desc: "15 Chapitres pour un bonus permanent de compte : +4 PA et +2 PD.",
      details: formatDetails(
        "Niveau 51+, Quête de Calpheon terminée.",
        "Esprit occulte, '[Aventure] Le journal de Bartali'.",
        "15 chapitres où il faut tuer des boss, explorer et crafter.",
        "+4 PA, +2 PD, +Max HP, +Poids de manière permanente sur le compte."
      )
    },
    { 
      title: "Terre du Matin Radieux", 
      priority: "Moyenne", 
      desc: "Débloque les Boss du Sanctuaire Noir.",
      details: formatDetails(
        "Magnus complété.",
        "Esprit Occulte, quête '[Terre du Matin Radieux] Le départ'.",
        "Visual novel interactif, résoudre des affaires de folklore coréen. Combats de boss instanciés.",
        "Accès aux boss du Sanctuaire, Flammes pour craft les équipements End-game."
      )
    },
    { 
      title: "Livre de Chenga", 
      priority: "Haute", 
      desc: "Enigmes (Niv. 53) pour obtenir le tome d'XP (+30%).",
      details: formatDetails(
        "Niveau 53, Tome de l'aventurier, 170 Énergie.",
        "Esprit Occulte, onglet Suggéré : '[Niv. 53] Tome de l'aventurier...'",
        "22 quêtes (énigmes) dans Drieghan. Suivre un guide fortement recommandé.",
        "+30% EXP de combat via quêtes."
      )
    },
    { 
      title: "Quête d'Ulukita (La Cité des Morts)", 
      priority: "Moyenne", 
      desc: "Zone Endgame. Permet de débloquer les Bottes d'Ator.",
      details: formatDetails(
        "Niveau 61+.",
        "Quête principale '[Ulukita]'.",
        "Série de quêtes narratives et combats dans des zones de très haut niveau.",
        "Débloque les zones de grind pour les Reliques de Kabua."
      )
    },
    { 
      title: "Suite de Quêtes de la Fée Laila", 
      priority: "Haute", 
      desc: "Première étape vers la fée.",
      details: formatDetails(
        "Niveau 53, loot un 'Pétale de Laila'.",
        "Esprit occulte, quête 'Fée : La compagne mystérieuse'.",
        "Aller au Temple de Kamasylve à Mediah, donner le pétale à la Reine.",
        "Obtention de la fée. Compétences automatiques (Soins, Poids)."
      )
    },
    { 
      title: "Livre de Margahan (Fièvre d'Agris)", 
      priority: "Critique", 
      desc: "Augmente les points d'Agris pour obtenir +150% de butin poubelle.",
      details: formatDetails(
        "Niveau 58+.",
        "Esprit occulte, '[Aventure] Le journal de Margahan'.",
        "Offrir des objets aux autels et tuer certains montres.",
        "Débloque les points d'Agris."
      )
    },
    { 
      title: "Purification de Dalishain", 
      priority: "Haute", 
      desc: "Débloque l'alchimie des Pierres de Lumière.",
      details: formatDetails(
        "Aucun.",
        "Parler à Dalishain (PNJ Alchimiste).",
        "Donner des artefacts imparfaits.",
        "Débloque le système d'alchimie."
      )
    },
    { 
      title: "Quêtes de l'Œil d'Oquilla", 
      priority: "Moyenne", 
      desc: "Le passage obligé pour amasser les matériaux Caraque.",
      details: formatDetails(
        "Niveau 50+.",
        "Quête principale '[Le Grand Océan] L'Œil d'Oquilla'.",
        "Suite de quêtes d'introduction à la navigation puis journalières.",
        "Matériaux navals."
      )
    },
    { 
      title: "Encyclopédie de Deve", 
      priority: "Critique", 
      desc: "Journal d'aventure exigeant de collectionner de nombreux objets.",
      details: formatDetails(
        "Niveau 56+, quête de l'éveil terminée.",
        "Esprit occulte, '[Aventure] L'Encyclopédie de Deve'.",
        "Collecter et montrer divers objets à Deve.",
        "+1 PA de famille permanent."
      )
    },
    { 
      title: "Journal de Dorin Morgrim", 
      priority: "Haute", 
      desc: "Nécessite de donner des armes/armures de Boss à Dorin.",
      details: formatDetails(
        "Niveau 59+.",
        "Esprit occulte, '[Aventure] Le journal de Dorin Morgrim'.",
        "Apporter divers équipements de Boss optimisés au forgeron Dorin.",
        "+1 PA et +1 PD permanents de famille."
      )
    },
    { 
      title: "Quête du Familier Tier 5 (Chef de Meute)", 
      priority: "Critique", 
      desc: "Permet de promouvoir un familier T4 en T5.",
      details: formatDetails(
        "Niveau 60+.",
        "Esprit occulte, '[Familier] Pour en devenir le chef !'.",
        "Parler à Obi Fellen à la Vieille Lune, crafter une 'Plume de monarque'.",
        "Promouvoir un familier T4 en T5. Améliore la vitesse de loot globale."
      )
    }
  ],

  guides: [
    {
      category: "L'Équipement (Failstacks & Objets Méta)",
      articles: [
        { 
          title: "La Théorie des Failstacks (FS)", 
          slug: "theorie-des-failstacks",
          icon: "fa-arrow-trend-up", 
          content: "Pour optimiser, accumule des échecs (FS) sur du petit équipement...",
          fullContent: "<p>L'optimisation dans Black Desert Online repose sur le système de <strong>Failstacks (FS)</strong>. Chaque fois que vous échouez une tentative d'amélioration, vous gagnez un Failstack, ce qui augmente vos chances de réussite pour la prochaine tentative.</p><h3>Comment monter des Failstacks ?</h3><ul><li><strong>1 à 20 FS :</strong> Utilisez des Pierres Noires sur des équipements de base (comme les armures Reblath) jusqu'à +15.</li><li><strong>20 à 50 FS :</strong> Échouez des tentatives PRI, DUO, ou TRI sur des équipements de boss ou des équipements verts.</li><li><strong>50 à 100 FS :</strong> Tentez des améliorations TET sur des équipements de boss.</li><li><strong>100+ FS :</strong> Réservé pour les tentatives PEN (V) ou pour les accessoires de haut niveau (TET/PEN).</li></ul><p><em>Astuce :</em> Utilisez le <strong>Journal d'Aventure de Naderr</strong> pour stocker vos Failstacks et passer d'un personnage à l'autre sans perdre vos précieuses chances d'amélioration.</p>"
        },
        { 
          title: "Les Armes Souveraines et Kharazad", 
          slug: "armes-souveraines-kharazad",
          icon: "fa-crown", 
          content: "Le plafond de puissance actuel (2026)...",
          fullContent: "<p>Les <strong>Armes Souveraines</strong> et les accessoires <strong>Kharazad</strong> représentent le summum de l'équipement dans BDO (Méta 2026).</p><h3>Armes Souveraines</h3><p>Pour forger une arme Souveraine, vous avez besoin de :</p><ul><li>Deux armes Sombrétoile PEN du même type, OU</li><li>Une arme Sombrétoile PEN + une Flamme Primordiale.</li></ul><p>Elles s'améliorent avec des Pierres Noires Primordiales et possèdent 10 niveaux d'amélioration (+1 à +10 DEC). L'avantage ? Elles ne régressent pas en cas d'échec, mais demandent énormément de Pierres Cron.</p><h3>Accessoires Kharazad</h3><p>Les accessoires Kharazad remplacent les Deboreka. Vous devez chauffer un Deboreka de base avec des Essences de l'Aube et des Fragments Magiques. Tout comme les armes Souveraines, les accessoires Kharazad ne se détruisent pas en cas d'échec, ce qui change complètement la dynamique d'optimisation end-game.</p>"
        }
      ]
    },
    {
      category: "Génération de Richesse (Silver/Heure)",
      articles: [
        { 
          title: "Revenus Actifs : Le Grind & L'Agris", 
          slug: "revenus-actifs-grind-agris",
          icon: "fa-khanda", 
          content: "La Fièvre d'Agris (Livre de Margahan) est vitale...",
          fullContent: "<p>La principale source de revenus dans BDO est le <strong>Grind (farm de monstres)</strong>. Pour maximiser vos gains, vous devez combiner plusieurs éléments :</p><h3>1. La Fièvre d'Agris</h3><p>Débloquée via le <strong>Livre de Margahan</strong>, la Fièvre d'Agris augmente considérablement le nombre de butins poubelles (Trash loot) que vous obtenez. Elle se recharge quotidiennement (jusqu'à 100 000 points).</p><h3>2. Parchemins d'Augmentation de Butin (Loot Scrolls)</h3><p>Utilisez toujours un parchemin jaune (Niveau 1 ou 2) pour augmenter le taux de chute (Drop Rate) et la quantité de butin. Le Niveau 2 est recommandé dans les zones où la limite de trash loot est élevée (ex: Orcs, Centaures).</p><h3>3. Zones Rentables (2026)</h3><ul><li><strong>Mid-game :</strong> Centaures (très rapide), Potion spots (Loup sanguinaire, Manshaum).</li><li><strong>End-game :</strong> Royaume d'Elvia (Orcs, Monastère), Ulukita (Cité des Morts), et Dehkia Lantern spots.</li></ul>"
        },
        { 
          title: "Routines AFK : Pêche & Transformation", 
          slug: "routines-afk-peche-transformation",
          icon: "fa-clock", 
          content: "Pendant la nuit : Pêche AFK et Transformation...",
          fullContent: "<p>Ne laissez jamais votre personnage inactif quand vous ne jouez pas. Voici les meilleures méthodes pour gagner de l'argent AFK :</p><h3>Pêche AFK</h3><p>Équipez une Canne à Pêche de Balenos (idéalement +10 pour réduire le temps de pêche automatique) et un Flotteur en Érable. Pêchez dans des zones sûres comme Velia, O'dyllita ou la Mer de Margoria. Revendez les poissons aux marchands impériaux pour un maximum de bénéfices.</p><h3>Transformation (Processing)</h3><p>Achetez ou récoltez des matériaux bruts (Bois, Minerai) avec vos ouvriers, et transformez-les en Contreplaqué ou Lingots. Vous pouvez ensuite les vendre au Marché Commun ou les utiliser pour fabriquer des Boîtes de Commerce. Portez la tenue fonctionnelle de Venecil ou Karki pour transformer directement depuis le dépôt.</p><h3>Entraînement de Chevaux</h3><p>Attachez vos chevaux à un wagon et faites des boucles automatiques dans des zones sûres pour augmenter leur niveau. Vendez les coursiers impériaux ou tentez des éveils de chevaux oniriques (T9).</p>"
        }
      ]
    },
    {
      category: "Les Systèmes Indispensables",
      articles: [
        { 
          title: "La Fée Parfaite (Tier 4 / Radieuse)", 
          slug: "fee-parfaite-radieuse",
          icon: "fa-wand-magic-sparkles", 
          content: "Compétences obligatoires : Joie Miraculeuse V, Pas Légers V...",
          fullContent: "<p>La <strong>Fée de Tier 4 (Radieuse)</strong> est un atout indispensable pour tout joueur sérieux. Pour l'obtenir, échangez des Pétales de Laila au Temple Kamasylve et croisez les doigts, ou utilisez des Hydromels pour améliorer une fée de Tier inférieur.</p><h3>Compétences Visées :</h3><ul><li><strong>Joie Miraculeuse V (Miraculous Cheer V) :</strong> La compétence la plus importante. La fée consommera automatiquement vos potions de HP/MP lorsque votre vie descend sous un certain seuil.</li><li><strong>Pas Légers V (Feathery Steps V) :</strong> Permet d'ignorer la pénalité de poids jusqu'à 125% d'encombrement. Extrêmement utile pour le grind et l'artisanat.</li><li><strong>Larme de Fée (Fairy's Tear) :</strong> Permet de ressusciter gratuitement sans pénalité d'EXP (Cooldown de 1 heure au niveau max).</li><li><strong>Souffle Inépuisable (Tingling Breath) :</strong> Augmente la durée de respiration sous l'eau.</li></ul><p>Utilisez des <em>Orbes de Theiah</em> (Cash Shop ou Événements) pour relancer les compétences de votre fée si elle n'obtient pas les bonnes.</p>"
        },
        { 
          title: "Les Coupes d'Elvia", 
          slug: "coupes-elvia",
          icon: "fa-ring", 
          content: "Farm le Royaume d'Elvia pour éveiller tes accessoires...",
          fullContent: "<p>Les <strong>Coupes d'Elvia</strong> permettent \"d'éveiller\" vos accessoires (Colliers, Anneaux, Ceintures, Boucles d'oreilles) pour leur ajouter des statistiques supplémentaires (HP, AP, ou Réduction de Dégâts).</p><h3>Où farmer les composants ?</h3><p>Le Royaume d'Elvia (version corrompue de Serendia et Calpheon) est la source principale :</p><ul><li><strong>Camp des Orcs & Monastère Sanglant :</strong> Composants pour les coupes d'Anneaux (PA ou PV).</li><li><strong>Nagas & Fogans d'Elvia :</strong> Composants pour les colliers (PV Max).</li><li><strong>Château de Cron & Biraghi :</strong> Composants pour les boucles d'oreilles.</li></ul><p>Pour fabriquer une coupe, vous devrez utiliser l'Alchimie Simple en combinant 100 objets spécifiques de zone, 100 Éclats de la nuit épuisée (ou autre composant rare d'Elvia) et un Solvant de Magie. Vous pouvez retirer les coupes d'un accessoire plus tard avec un Miroir de l'Équilibre si vous souhaitez changer d'accessoire.</p>"
        }
      ]
    },
    {
      category: "Le Contenu Maritime (Margoria)",
      articles: [
        { 
          title: "Le Troc (Bartering) et le Caraque", 
          slug: "troc-et-caraque",
          icon: "fa-anchor", 
          content: "L'objectif : La Caraque. 30-45 jours de quêtes navales...",
          fullContent: "<p>Le contenu maritime est presque un jeu dans le jeu. L'objectif principal de tout marin est de construire une <strong>Caraque (Carrack)</strong>, le navire ultime de Black Desert.</p><h3>La Progression des Navires :</h3><ol><li><strong>Voilier ou Frégate d'Epheria :</strong> Le point de départ. Achetez-le ou craftez-le à Port Epheria.</li><li><strong>Caravelle ou Galéasse :</strong> La première amélioration. Nécessite de récolter des matériaux marins et de faire du Troc.</li><li><strong>Caraque :</strong> Demande environ 30 à 45 jours de quêtes journalières à l'Œil d'Oquilla, et énormément de Troc. Il existe 4 types de Caraques (Volante, Avancée, Bravoure, Équilibre).</li></ol><h3>Le Système de Troc (Bartering)</h3><p>Le troc consiste à échanger des matériaux terrestres (Bois, Tissu) contre des biens de commerce de Niveau 1, puis d'échanger ces Niveau 1 contre des Niveau 2, etc. jusqu'au Niveau 5. Ces derniers peuvent être échangés contre des Pièces de Corbeau, la monnaie exclusive de l'océan, indispensable pour acheter des plans d'amélioration de navire.</p>"
        }
      ]
    },
    {
      category: "Les Trésors Inestimables",
      articles: [
        { 
          title: "La Boussole et la Carte", 
          slug: "boussole-et-carte",
          icon: "fa-map", 
          content: "La Boussole (Aakman/Hystria), La Carte (Pila Ku/Soufre)...",
          fullContent: "<p>BDO propose plusieurs objets dits \"Trésors\", qui offrent des avantages permanents et incroyables, mais nécessitent des centaines, voire des milliers d'heures de farm.</p><h3>La Carte d'Archéologue</h3><p>Permet de se téléporter dans la ville la plus proche, puis de <strong>retourner exactement à l'endroit initial</strong> (Temps de recharge : 6h). Indispensable pour vider son inventaire en plein farm.<br/><strong>Composants :</strong> 2 morceaux à la Mine de Soufre de Roud, 2 morceaux à la Prison de Pila Ku.</p><h3>La Boussole Spirituelle d'Orienteur</h3><p>Empêche de se perdre dans le désert ou l'océan, et permet de <strong>téléporter tous les membres de son groupe</strong> à sa position instantanément (Temps de recharge : 10 min).<br/><strong>Composants :</strong> 1 morceau à Aakman, 2 morceaux à Hystria (dont le légendaire morceau de l'Elten, le drop le plus difficile du jeu).</p><p>Une fois les pièces réunies, elles doivent être assemblées avec des gemmes spécifiques dans votre inventaire.</p>"
        },
        { 
          title: "Potions Infinies (HP/MP)", 
          slug: "potions-infinies",
          icon: "fa-flask", 
          content: "Les potions qui ne se consomment jamais...",
          fullContent: "<p>Les potions infinies (Ornette pour les PV, Odore pour les PM) sont le premier objectif majeur de tout joueur PvE. Associées à la compétence <em>Joie Miraculeuse</em> d'une fée, elles vous rendent pratiquement immortel en PvE.</p><h3>L'Essence Spirituelle d'Ornette (PV)</h3><ul><li><strong>Loup Sanglant (Panacée de Sherekhan) :</strong> Farm aux Loups Sanguinaires de Drieghan.</li><li><strong>Glande de loup cendre-demi lune :</strong> Nécropole des Sherekhan (Jour ou Nuit).</li><li><strong>Clochette de Ron :</strong> Ruines des Arbres Ron à Kamasylvia.</li></ul><h3>Le Système de Pitié</h3><p>Si vous n'avez pas de chance (RNG), vous looterez des \"morceaux de pitié\" (pity pieces). Collectez 100 morceaux d'une zone pour les échanger contre la pièce rare correspondante auprès du PNJ Merindora à Grána. C'est un filet de sécurité qui garantit l'obtention de la potion avec suffisamment de temps (environ 20-30 heures par zone en moyenne).</p>"
        }
      ]
    },
    {
      category: "Maître Équestre (Dressage)",
      articles: [
        { 
          title: "Du T8 Destrier au T9 Onirique", 
          slug: "t8-destrier-au-t9-onirique",
          icon: "fa-horse", 
          content: "Entraîne un T8 Destrier à Queues-de-Pierre...",
          fullContent: "<p>Obtenir un cheval de Tier 9 (Onirique) est une étape clé. Il existe trois types : Arduanatt (Pégase), Diné (Licorne) et Fléau (Doom).</p><h3>1. Le Prérequis : Le Destrier T8</h3><p>Vous devez posséder un cheval de Tier 8 niveau 30 avec des compétences spécifiques (Charge, Sprint, Dérapage, Accélération Fulgurante, etc.). Toutes les icônes de ces compétences doivent être dorées. S'il lui en manque, utilisez des coupons de changement de compétence de monture (Cash Shop).</p><h3>2. L'Éveil Onirique</h3><p>Amenez votre T8 au Ranch des files de queues-de-pierre (Gula) ou à Grána. Vous devez remplir la jauge d'entraînement à 200% avec des matériaux :</p><ul><li><strong>Fourrage de Queues-de-Pierre / Fruit de Yianaros :</strong> Augmente les chances d'obtenir Arduanatt.</li><li><strong>Souffle de la forêt pure / Conque de la mer :</strong> Augmente les chances d'obtenir Diné.</li><li><strong>Racine de Fougère / Pierre de la bête sauvage :</strong> Augmente les chances d'obtenir Doom.</li></ul><p>Utilisez une Pierre d'Origine de Krogdalo pour tenter l'éveil (1% de chance de base, augmente à chaque échec).</p>"
        },
        { 
          title: "Le Cauchemar du T10 (Mythique)", 
          slug: "cauchemar-du-t10",
          icon: "fa-horse-head", 
          content: "Fusionner DEUX chevaux T9 du même type...",
          fullContent: "<p>Le T10 (Mythique) est le summum du dressage. Il brille, possède des compétences divines et un skin exclusif.</p><h3>La Règle de Fusion</h3><p>Vous devez posséder <strong>DEUX chevaux T9 du même type (ex: 2 Pégases), dont un mâle et une femelle</strong>, tous deux de niveau 30. Amenez-les au Ranch de Queues-de-Pierre.</p><h3>L'Encensoir Mythique</h3><p>La tentative de fusion nécessite un <em>Encensoir Mythique</em>. Cet objet est extrêmement difficile à fabriquer. Il requiert de faire des quêtes hebdomadaires de dressage pour obtenir des Fougères royales, et de capturer des dizaines de chevaux sauvages pour obtenir des Plumes mythiques. Le taux de réussite est de 3% de base (et monte lentement avec les failstacks mythiques). En cas d'échec, les chevaux ne sont pas détruits, mais l'Encensoir est consommé.</p>"
        }
      ]
    },
    {
      category: "Optimisation des Statistiques",
      articles: [
        { 
          title: "Les Presets de Cristaux et Artefacts", 
          slug: "presets-cristaux-artefacts",
          icon: "fa-gem", 
          content: "La gestion des cristaux se fait via une interface de compte...",
          fullContent: "<p>Depuis la refonte du système, les cristaux ne sont plus insérés directement dans l'équipement. Vous disposez d'un <strong>Inventaire de Cristaux</strong> partagé sur tout le compte.</p><h3>Presets PvE (Dégâts)</h3><p>En PvE, maximisez les dégâts critiques et les dégâts contre les monstres. Utilisez des Cristaux Magiques Corrompus (Dégâts critiques +10%), des Cristaux Vipère (Précision), et des Cristaux de la rébellion. Si vous jouez dans des zones de haut niveau (Ulukita), ajoutez de la Réduction de Dégâts (DR).</p><h3>Artefacts et Pierres de Lumière</h3><p>Équipez deux Artefacts (Généralement +Dégâts contre les monstres ou +Précision). Vous devez insérer 4 Pierres de Lumière pour activer un set. Le set le plus populaire en PvE est <strong>\"Coup Sauvage\"</strong> (Strike), qui augmente massivement l'attaque. Pour l'XP, utilisez les sets de vent ou d'XP de combat.</p>"
        },
        { 
          title: "Les Caps de Statistiques (DR vs Évasion)", 
          slug: "caps-de-statistiques",
          icon: "fa-shield-halved", 
          content: "Dans la méta actuelle, le build Réduction de Dégâts (DR) est favorisé...",
          fullContent: "<p>Dans BDO, il existe deux moyens de survivre : prendre le coup et réduire les dégâts (DR), ou esquiver le coup (Évasion).</p><h3>Réduction de Dégâts (DR)</h3><p>La méta 2026 favorise grandement la Réduction de Dégâts. Équipez les Gants de Dahn (Version DR) et les Chaussures d'Ator (Version DR). Les accessoires de l'Aube (Kharazad) offrent des statistiques d'armure qui renforcent cette approche. Ce build est fiable car il fonctionne contre tous les monstres, même ceux avec une haute précision.</p><h3>Évasion (Evasion)</h3><p>L'Évasion n'est viable qu'avec un équipement extrêmement optimisé (Gants de Dahn version Évasion + Chaussures de Muskan). Si votre adversaire (ou le monstre) a plus de précision que vous n'avez d'évasion, vous subirez 100% des dégâts sans aucune réduction pour vous sauver. C'est un build risqué mais puissant en PvP pour certaines classes (Ninja, Kunoichi, Hashashin).</p>"
        },
        { 
          title: "La Trinité des Buffs", 
          slug: "trinite-des-buffs",
          icon: "fa-wine-bottle", 
          content: "Nourriture, Élixirs et Buff d'Église obligatoires...",
          fullContent: "<p>Avant de commencer une session de grind, vous devez absolument activer ces trois catégories de buffs pour maximiser votre efficacité :</p><h3>1. La Nourriture (Repas de Cron)</h3><p>Le <strong>Repas de Cron Exquis</strong> est la référence pour le PvE. Il offre des PA monstres, de la précision, de la vitesse d'attaque et des dégâts critiques. Dure 120 minutes.</p><h3>2. Les Élixirs ou Breuvages (Drafts)</h3><p>Pour la majorité des zones, utilisez le <strong>Breuvage de la frénésie</strong> (Frenzy Draught) pour les PA et le soin par coup, ou le <strong>Breuvage de la bête</strong> (Beast's Draught) si vous manquez de tankiness. Dans l'End-game (Dehkia, Ulukita), il est obligatoire d'utiliser une rotation complète de 15+ Élixirs individuels (Elixir de faucheur, assassin, griffon, etc.) pour survivre.</p><h3>3. Les Buffs de PNJ (Église & Tente)</h3><ul><li>Allez voir le prêtre (ou l'Ottavio de Velia) pour acheter des buffs d'Attaque, de Défense et d'EXP pour 3 à 10 millions d'argent. Dure 2h.</li><li>Si vous possédez la Tente de la Vieille Lune, achetez le buff de PA/PA monstres directement depuis votre campement (Jusqu'à 50M pour le buff max).</li></ul>"
        }
      ]
    }
  ]
};

export const trackerLogic: TrackerLogicItem[] = [
  { 
    id: "graduated", label: "1. Diplômé de la Saison (Full Tuvala PEN)", difficulty: "Facile", timeEstimate: "10-20 heures", 
    failMsg: "Termine ta saison ! L'équipement Tuvala PEN est la base de tout.",
    details: formatDetails("Niveau 61, serveur saisonnier.", "Créer un personnage Saison.", "1. Terminez le pass saisonnier.<br/>2. Utilisez les pierres de faille pour monter tout votre équipement Naru en PEN.<br/>3. Échangez-le contre du Tuvala PRI et montez le Tuvala en PEN.", "Équipement Tuvala PEN complet (équivaut au Boss TET)."),
    relatedLinks: [{ label: "Armure de Tuvala", url: "/armors", icon: "fa-solid fa-shirt" }]
  },
  {
    id: "capotia_pen", label: "2. Accessoires Capotia PEN", difficulty: "Facile", timeEstimate: "Immédiat",
    failMsg: "Récupère tes accessoires Capotia PEN via les défis.",
    details: formatDetails("Avoir terminé des saisons.", "Menu Défis (Y) ou Fughar.", "Réclamez le Collier, Ceinture et Anneau Capotia PEN qui sont offerts en récompense de graduation de saison.", "Accessoires équivalents à du TET Or (TET Ogre, TET Croissant).")
  },
  { 
    id: "chenga", label: "3. Livre de Chenga (Pexing 61)", difficulty: "Facile", timeEstimate: "1-2 heures", 
    failMsg: "Fais la suite de quêtes du Livre de Chenga pour ton bonus d'XP.",
    details: formatDetails("Niv 53.", "Quête suggérée 'Légende des Chengas'.", "Faire les énigmes à Drieghan.", "Tome donnant +30% d'XP pour chaque quête validée. Idéal pour passer du niveau 59 au 61."),
    relatedLinks: [{ label: "Quête du Livre de Chenga", url: "/quests", icon: "fa-solid fa-scroll" }]
  },
  { 
    id: "magnus", label: "4. Abyss One : The Magnus", difficulty: "Moyenne", timeEstimate: "4-6 heures", 
    failMsg: "Débloque la téléportation universelle et ton Armure PEN gratuite.",
    details: formatDetails("Niv 15+, Quête principale de Balenos terminée.", "Quête Esprit Occulte 'Le Magnus'.", "Résolvez les puzzles dimensionnels au fond du Puits.", "Dépôt Universel, Téléportation et 1 Armure Boss PEN (Nez Rouge/Bheg recommandé)."),
    relatedLinks: [{ label: "Quête Abyss One : The Magnus", url: "/quests", icon: "fa-solid fa-scroll" }]
  },
  { 
    id: "fairy", label: "5. Fée Tier 4 avec Potion Auto", difficulty: "Moyenne", timeEstimate: "Aléatoire", 
    failMsg: "Il te faut une fée Radieuse pour boire tes potions automatiquement.",
    details: formatDetails("Niv 53, Pétales de Laila.", "Quête Esprit Occulte 'Fée : La compagne mystérieuse'.", "1. Farm des Pétales.<br/>2. Échangez au Temple Kamasylve.<br/>3. Reroll ou évoluez la fée jusqu'au Tier 4 (Radieuse).", "Fée Radieuse avec la compétence Joie Miraculeuse V (Auto-potion)."),
    relatedLinks: [{ label: "Quêtes de la Fée Laila", url: "/quests", icon: "fa-solid fa-scroll" }]
  },
  {
    id: "jetina_weapon", label: "6. Arme Sombrétoile TET", difficulty: "Facile", timeEstimate: "Immédiat",
    failMsg: "Récupère ton arme Sombrétoile TET offerte.",
    details: formatDetails("Niveau 61.", "Défis (Y).", "Une Arme Sombrétoile TET est offerte par compte. Réclamez-la !", "Boost massif de dégâts contre les monstres."),
    relatedLinks: [{ label: "Arme Sombrétoile", url: "/armors", icon: "fa-solid fa-khanda" }]
  },
  { 
    id: "agris", label: "7. Livre de Margahan (Fièvre d'Agris)", difficulty: "Moyenne", timeEstimate: "2-3 heures", 
    failMsg: "Booste tes revenus avec le Livre de Margahan.",
    details: formatDetails("Niv 58+.", "Quête Esprit Occulte 'Livre de Margahan'.", "Faire des offrandes d'items aux autels et tuer des mobs spécifiques.", "Fièvre d'Agris débloquée (+150% trash loot)."),
    relatedLinks: [{ label: "Livre de Margahan", url: "/quests", icon: "fa-solid fa-scroll" }]
  },
  { 
    id: "bartali", label: "8. Journal d'Igor Bartali (+4 PA)", difficulty: "Moyenne", timeEstimate: "1-2 semaines", 
    failMsg: "Termine le journal de Bartali, ces stats sont critiques.",
    details: formatDetails("Niv 51+, Quête Calpheon terminée.", "Quête Esprit Occulte 'Journal de Bartali'.", "15 Chapitres d'exploration, craft et chasse.", "+4 PA et +2 PD permanents pour tout le compte."),
    relatedLinks: [{ label: "Journal d'Igor Bartali", url: "/quests", icon: "fa-solid fa-scroll" }]
  },
  { 
    id: "journals_adv", label: "9. Journaux de Deve & Dorin", difficulty: "Moyenne", timeEstimate: "Quelques jours", 
    failMsg: "Ne rate pas ces autres PA/PD gratuits.",
    details: formatDetails("Niv 56+.", "Journaux d'aventure.", "<b>Deve :</b> Donner des collections d'objets.<br/><b>Dorin :</b> Donner des armes/armures de boss.", "+2 PA / +1 PD permanents."),
    relatedLinks: [{ label: "Encyclopédie de Deve", url: "/quests", icon: "fa-solid fa-scroll" }, { label: "Journal de Dorin Morgrim", url: "/quests", icon: "fa-solid fa-scroll" }]
  },
  { 
    id: "potion_hp", label: "10. Potions Infinies (PV & PM)", difficulty: "Difficile", timeEstimate: "30-50 heures", 
    failMsg: "Le farm des potions infinies est le premier gros cap PvE.",
    details: formatDetails("240+ AP.", "Kamasylvia & Drieghan.", "Obtenir la pièce rare entière ou 100 morceaux de pitié par spot.", "Potions inépuisables. Combine ça avec la fée pour une survie infinie."),
    relatedLinks: [{ label: "Recettes des Potions Infinies", url: "/crafts", icon: "fa-solid fa-flask" }]
  },
  {
    id: "jetina_armor", label: "11. Armures Boss PEN (Jetina/Achat)", difficulty: "Difficile", timeEstimate: "Quelques mois",
    failMsg: "Remplace ton Tuvala par du Boss PEN.",
    details: formatDetails("Tuvala PEN, Argent.", "PNJ Jetina ou Marché Commun.", "Utilise le système Jetina pour 2 pièces d'armure. Achète le reste au Marché.", "Set Boss PEN (Nez Rouge, Bheg, Urugon, Griffon)."),
    relatedLinks: [{ label: "Armures de Boss", url: "/armors", icon: "fa-solid fa-shield-halved" }]
  },
  { 
    id: "c10", label: "12. Injecter les Caphras (C10)", difficulty: "Difficile", timeEstimate: "Des mois", 
    failMsg: "Il te faut des milliers de Pierres de Caphras.",
    details: formatDetails("Armures Boss PEN.", "Avoir des Pierres de Caphras.", "Injecte ~7200 Caphras dans le Nez Rouge, et ~8200 pour Griffon/Bheg/Urugon pour atteindre le niveau 10.", "Prérequis obligatoire pour crafter les armures Antiques."),
    relatedLinks: [{ label: "Voir les Armures de Boss", url: "/armors", icon: "fa-solid fa-shield-halved" }]
  },
  { 
    id: "fallen_god_1", label: "13. 1ère Armure Antique : Dieu Déchu", difficulty: "Difficile", timeEstimate: "20 heures de farm", 
    failMsg: "Va chercher ta Flamme du Désespoir à Tunkuta.",
    details: formatDetails("Nez Rouge C10.", "Turos (Tunkuta).", "Loot 100 Braises du désespoir ou la Flamme entière. Forge-la chez Dorin Morgrim.", "Plastron du Dieu Déchu."),
    relatedLinks: [{ label: "Armures Antiques", url: "/armors", icon: "fa-solid fa-crown" }]
  },
  { 
    id: "fallen_god_2", label: "14. 2ème Armure Antique : Labreska", difficulty: "Difficile", timeEstimate: "20 heures de farm", 
    failMsg: "Va chercher ta Flamme de Givre à la Forêt de Jade.",
    details: formatDetails("Casque Griffon C10.", "Forêt de Jade.", "Loot 100 Étincelles de Givre. Forge le casque chez Floki.", "Casque de Labreska."),
    relatedLinks: [{ label: "Armures Antiques", url: "/armors", icon: "fa-solid fa-crown" }]
  },
  { 
    id: "fallen_god_3", label: "15. 3ème Armure Antique : Dahn", difficulty: "Difficile", timeEstimate: "20 heures de farm", 
    failMsg: "Matin Radieux ou achat marché pour la Flamme de Hongik.",
    details: formatDetails("Gants Bheg C10.", "Matin Radieux.", "Vaincre les boss du Sanctuaire ou acheter la Cristallisation au marché.", "Gants de Dahn."),
    relatedLinks: [{ label: "Armures Antiques", url: "/armors", icon: "fa-solid fa-crown" }]
  },
  { 
    id: "fallen_god_4", label: "16. 4ème Armure Antique : Ator", difficulty: "Difficile", timeEstimate: "20 heures de farm", 
    failMsg: "Dernière étape armure : Ulukita.",
    details: formatDetails("Bottes Urugon C10.", "Ulukita.", "Loot 100 Résidus de résonance. Parler à Ator.", "Chaussures d'Ator."),
    relatedLinks: [{ label: "Armures Antiques", url: "/armors", icon: "fa-solid fa-crown" }]
  },
  { 
    id: "kabua", label: "17. Reliques de Kabua (x2)", difficulty: "Difficile", timeEstimate: "15-30 heures", 
    failMsg: "Remplace tes vieilles reliques par des Kabua.",
    details: formatDetails("310+ AP.", "Farmer Ulukita.", "Droper la relique entière ou 100 fragments de Kabua.", "Double Relique Kabua pour d'énormes stats défensives et offensives."),
    relatedLinks: [{ label: "Relique de Kabua", url: "/armors", icon: "fa-solid fa-gem" }]
  },
  { 
    id: "blackstar", label: "18. Armes Sombrétoile PEN", difficulty: "Difficile", timeEstimate: "Long / RNG", 
    failMsg: "Le mur de l'optimisation : le PEN Sombrétoile.",
    details: formatDetails("Sombrétoile TET, Failstacks (200+).", "Esprit Occulte.", "Utiliser des Pierres Noires Magiques Pures et des Pierres Cron. C'est du RNG pur.", "Arme Sombrétoile PEN."),
    relatedLinks: [{ label: "Arme Sombrétoile", url: "/armors", icon: "fa-solid fa-khanda" }]
  },
  { 
    id: "sovereign", label: "19. L'Arme Souveraine", difficulty: "Hardcore", timeEstimate: "Centaines d'heures", 
    failMsg: "L'arme ultime du jeu t'attend.",
    details: formatDetails("2 Sombrétoiles PEN ou 1 PEN + Flamme Primordiale.", "Forge du Matin Radieux (Partie 2).", "Fusionne tes armes. Améliore-la ensuite avec des Pierres Noires Primordiales jusqu'à +10 DEC.", "Arme Souveraine, le BiS absolu."),
    relatedLinks: [{ label: "Arme Souveraine", url: "/armors", icon: "fa-solid fa-khanda" }, { label: "Forge Souveraine", url: "/crafts", icon: "fa-solid fa-hammer" }]
  },
  { 
    id: "kharazad", label: "20. Bijoux Kharazad", difficulty: "Hardcore", timeEstimate: "Ultra End-Game", 
    failMsg: "La dernière étape : Les bijoux Kharazad.",
    details: formatDetails("Accessoires Deboreka, Essences de l'Aube.", "Transformation (L).", "Farm les Deboreka à haut niveau, puis chauffe-les avec les essences de l'Aube.", "Bijoux Kharazad équipés."),
    relatedLinks: [{ label: "Accessoires Kharazad", url: "/armors", icon: "fa-solid fa-ring" }, { label: "Bijou Kharazad (+0)", url: "/crafts", icon: "fa-solid fa-hammer" }]
  }
];
