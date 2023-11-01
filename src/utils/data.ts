import { FighterType, VideoType } from "./types"
import liuKang from '../assets/images/fighters/liuKang.webp'
import subZero from '../assets/images/fighters/sub-zero.webp'
import scorpion from '../assets/images/fighters/scorpion.webp'
import kitana from '../assets/images/fighters/kitana.webp'
import johnny from '../assets/images/fighters/johnni.webp'
import kenshi from '../assets/images/fighters/kenshi.webp'
import kunglao from '../assets/images/fighters/kunglao.webp'
import MILEENA from '../assets/images/fighters/MILEENA.webp'
import RAIDEN from '../assets/images/fighters/RAIDEN.webp'
import RAIN from '../assets/images/fighters/RAIN.webp'
import SMOKE from '../assets/images/fighters/SMOKE.webp'
import MEI from '../assets/images/fighters/MEI.webp'
import BARAKA from '../assets/images/fighters/BARAKA.webp'
import TANYA from '../assets/images/fighters/TANYA.webp'
import GERAS from '../assets/images/fighters/GERAS.webp'
import REPTILE from '../assets/images/fighters/REPTILE.webp'
import HAVIK from '../assets/images/fighters/HAVIK.webp'
import REIKO from '../assets/images/fighters/REIKO.webp'
import ASHRAH from '../assets/images/fighters/ASHRAH.webp'
import SINDEL from '../assets/images/fighters/SINDEL.webp'
import GENERAL from '../assets/images/fighters/GENERAL.webp'
import NITARA from '../assets/images/fighters/NITARA.webp'
import SHANGTSUNG from '../assets/images/fighters/SHANGTSUNG.webp'


export const AMERICA = ['United States - English', 'Canada - English', 'Canada - Français', 
                'México - Español', 'Brasil - Português']

export const EUROPE = ['United Kingdom - English', 'Ireland - English', 
                'France - Français', 'España - Español', 'Deutschland - Deutsch', 
                'Österreich - Deutsch', 'Schweiz - Deutsch', 'Italia - Italiano', 
                'Polska - Polski', 'Belgium - English', 'Belgique - Français', 
                'Czechia - English', 'Україна - українська', 'Portugal - Português',
                'Magyarország - magyar', 'Denmark - English', 'Netherlands - English', 
                'Norway - English', 'Finland - English', 'Sweden - English']

export const ASIA = ['Australia - English', 'New Zealand - English', 
                'India - English', 'Singapore - English', 'Thailand - English', 
                'Philippines - English', 'Malaysia - English', 'Indonesia - English', 
                '繁體中文（台灣）', '繁體中文（香港）']

export const MIDDLE_EAST_AFRICA = ['المملكة العربية السعودية', 'الإمارات العربية المتحدة', 
                'Israel - English', 'South Africa - English']

export const FIGHTERS: FighterType[] = [
    {
        name: 'LIU KANG',
        img: liuKang,
        purpose: 'SECURITY',
        essence: 'God of Fire',
        firstDescription: 'Having won control of the Hourglass, Liu Kang restarted history. He neutralized the threats and dangers that had come before, crafting a New Era in which all beings would have the opportunity to find peace.',
        secondDescription: 'But that peace is now threatened by an enemy that Liu Kang could never have anticipated. It will take all of his wisdom and experience to save not only Earthrealm, but all of reality.'
    },
    {
        name: 'SUB-ZERO',
        img: subZero,
        purpose: 'POWER',
        essence: 'Grandmaster of the Lin Kuei',
        firstDescription: "As the Lin Kuei's Grandmaster, Sub-Zero leads his ancient warrior clan in the defense of Earthrealm from external threats. For centuries, it has been their solemn task.",
        secondDescription: 'But Earthrealm hasn’t been threatened in generations, and Sub-Zero sees no point in limiting his clan to preparing for dangers that may never come. Under his leadership, the Lin Kuei will come out of the shadows and fight for its place as one of Earthrealm’s great nations.'
    },
    {
        name: 'SCORPION',
        img: scorpion,
        purpose: 'HONOR',
        essence: 'Revered Lin Kuei Warrior',
        firstDescription: "Like his cherished father, Scorpion is dedicated to the Lin Kuei and its defense of Earthrealm. When his father died, Scorpion was bereft. Though he took pride in knowing that his brother, Sub-Zero, would succeed their father as the Lin Kuei's Grandmaster.",
        secondDescription: "But Sub-Zero's unprecedented moves to cast off the Lin Kuei's traditional duties have frozen Scorpion’s enthusiasm. He fears that he may one day have to battle his brother for control of the Lin Kuei's legacy."
    },
    {
        name: 'KITANA',
        img: kitana,
        purpose: 'DUTY',
        essence: 'Princess of Outworld',
        firstDescription: "Kitana has one purpose in life: to aid and protect her older sister, Mileena, as she prepares to rule Outworld one day.",
        secondDescription: "The steady-handed Kitana ignores the calls of those who advocate that she should replace her impulsive sister as heir. Instead, Kitana will defend the realm by fighting to make Mileena the best Empress possible. She will also fight to hide the dark secret that could end her sister's reign before it begins."
    },
    {
        name: 'JOHNNY CAGE',
        img: johnny,
        purpose: 'VANITY',
        essence: '21st Century Action Hero',
        firstDescription: "Like many stars before him, Johnny became addicted to his fame. He came to measure his self-worth by his fans' adoration and their praise of him on social media.",
        secondDescription: "But with his star now fading, Johnny is fighting an uphill battle to remain relevant. He joins Liu Kang’s Earthrealm champions hoping that it will provide his career and his fame a desperately needed boost."
    },
    {
        name: 'KENSHI TAKAHASHI',
        img: kenshi,
        purpose: 'REVIVAL',
        essence: 'Restorer of His Family’s Name',
        firstDescription: "Once one of ancient Japan's most honored families, the Takahashis were decimated in battle. They lost everything, including the emblem of their power: the revered sword, Sento. Those who survived joined the Bakuto, a predecessor of the Yakuza, for its protection.",
        secondDescription: "Five centuries later, Kenshi is raised on the stories of his ancient family's exploits. Detesting his corrupt Yakuza life, he pines to free the Takahashis from the Yakuza's grasp and restore their name.",
        thirdDescription: "But for his family to follow him, Kenshi must first fight to prove that he can lead. His first battle is to find and retrieve Sento."
    },
    {
        name: 'KUNG LAO',
        img: kunglao,
        purpose: 'PRESTIGE',
        essence: 'Youthful Warrior with Dreams of Glory',
        firstDescription: "Born and raised in the village of Fengjian, Kung Lao has spent his life toiling in the fields. It has been an honorable life, if not a glorious one.",
        secondDescription: "Kung Lao’s greatest fear is that his life will amount to nothing. He prays fervently that he will be called to do something bigger.",
        thirdDescription: "His prayers are answered when he is asked to join the champions of Earthrealm. As a warrior fighting for its honor, Kung Lao knows that his victories will be long remembered."
    },
    {
        name: 'MILEENA',
        img: MILEENA,
        purpose: 'RESPECT',
        essence: 'Heir to Outworld’s Throne',
        firstDescription: 'Born mere seconds ahead of her twin sister, Mileena is the rightful heir to Outworld’s throne. But even so, there are those who distrust Mileena’s impulsiveness. They whisper that Kitana, with her steadier hand, should replace Mileena as heir to the throne.',
        secondDescription: "As Mileena fights for legitimacy, she hides a horrible secret: she is infected with the dreaded and lethal Tarkat disease. Were her affliction found out, Mileena would be forced into battle to save her throne."
    },
    {
        name: 'RAIDEN',
        img: RAIDEN,
        purpose: 'STABILITY',
        essence: 'Champion of Earthrealm',
        firstDescription: "In the village of Fengjian, Raiden was known for his kindness and his charity. He was happy to spend his days tending to the fields, as well as to his friends and family.",
        secondDescription: "So when he is asked to leave Fengjian and become one of Earthrealm’s champions, Raiden hesitates. But he soon realizes that to best serve his village, he must join them.",
        thirdDescription: "As threats to Earthrealm mount, Raiden must mature into the great warrior that Liu Kang knows he can be."
    },
    {
        name: 'RAIN',
        img: RAIN,
        purpose: 'AMBITION',
        essence: 'High Mage of Outworld',
        firstDescription: "As a student at Outworld’s exclusive Imperial Academy of Sorcery, Rain amazed his peers with his singular aptitude for water magic. Having honed his craft of water magic into a fierce weapon, he now hopes to learn the realms’ darkest and most powerful sorcery.",
    },
    {
        name: 'SMOKE',
        img: SMOKE,
        purpose: 'LOYALTY',
        essence: 'Master of Stealth',
        firstDescription: "As a boy, Smoke lived to hunt with his family. Their final hunt, however, ended in tragedy. Having accidentally trespassed onto Lin Kuei lands, they were attacked. Smoke was orphaned.",
        secondDescription: "Ashamed by his warriors' actions, the Lin Kuei's Grandmaster adopted Smoke. He raised him alongside his sons, Sub-Zero and Scorpion.",
        thirdDescription: "Eventually, Smoke chose to make the Lin Kuei’s mission his own. But as he lacked his brothers' innate supernatural abilities, he set out to master practical magic. Having done so. he now joins them in Earthrealm's defense."
    },
    {
        name: 'LI MEI',
        img: MEI,
        purpose: 'REDEMPTION',
        essence: 'First Constable of Sun Do',
        firstDescription: "As her parents’ firstborn daughter, Li Mei was claimed by the Umgadi, the warrior priestesses who guard Outworld’s royal family.",
        secondDescription: "But it all fell apart when a terrible tragedy unfolded. Li Mei was blamed for this and In the aftermath, she did the unthinkable: she quit the Umgadi.",
        thirdDescription: "Friendless and alone, Li Mei needed a new purpose. She joined Sun Do’s constables, the Outworld capital’s rough and tumble police force. Over time, she became their First Constable."
    },
    {
        name: 'BARAKA',
        img: BARAKA,
        purpose: 'PRESERVATION',
        essence: 'Defender of the Tarkatans',
        firstDescription: "Baraka was once a respected Outworld merchant. But that life ended in an instant when he contracted the dreaded Tarkat plague.",
        secondDescription: "Incurable, contagious, and the cause of severe physical deformities, Tarkat turned Baraka into a monster. He was cast out and doomed to live out his days in a colony of similarly afflicted Outworlders.",
        thirdDescription: "When Baraka first arrived, the colony was in disarray. His fellow Tarkatans had given up and were ready to die."
    },
    {
        name: 'TANYA',
        img: TANYA,
        purpose: 'PROTECTION',
        essence: 'Guardian of Outworld’s Royal Family',
        firstDescription: "Chosen as an infant from Outworld’s first-born daughters, Tanya was raised by the Umgadi’s priestesses. She’s never known her birth family.",
        secondDescription: "As she grew older and saw other initiates wash out, Tanya feared that she would share their fate. But that fear spurred success; after many attempts, Tanya passed her trials and became a full Umgadi.",
        thirdDescription: "Over time, Tanya became one of the order’s most trusted members. She was the obvious choice when it needed to choose a new leader for the royal family’s personal guard."
    },
    {
        name: 'GERAS',
        img: GERAS,
        purpose: 'SERVICE',
        essence: 'Sentinel of the Hourglass',
        firstDescription: "Reconstructed by Liu Kang at the dawn of his New Era, Geras remains eternal and unkillable. He retains the memories of all the innumerable timelines he has watched pass and fade.",
        secondDescription: "In this New Era, Geras monitors events to make sure that they are faithful to Liu Kang’s vision. When they deviate from their intended path, it is Geras’s responsibility to correct them.",
        thirdDescription: "As threats begin to mount, Geras works tirelessly to defend reality. But to succeed, he must first identify the mastermind behind the plot to destroy Liu Kang’s New Era."
    },
    {
        name: 'REPTILE',
        img: REPTILE,
        purpose: 'FREEDOM',
        essence: 'Zaterran Slave',
        firstDescription: "Reptile is Zaterran, one of the reptiloid race which lives on Outworld’s fringes.",
        secondDescription: "Like other reptiles, Zaterrans can camouflage themselves. But Reptile possesses a unique mutation: one which allows him to shift shape to appear human.",
        thirdDescription: "Bullied mercilessly by Zaterrans for this ability, Reptile left home to make his future elsewhere."
    },
    {
        name: 'HAVIK',
        img: HAVIK,
        purpose: 'LIBERATION',
        essence: 'Rebellious Anarchist',
        firstDescription: "A citizen of the realm of Seido, Havik is sworn to take down its oppressive regime and free his people. There, order is prized above all else. Lawbreaking is met with strict punishment. Its citizens live in strictly regulated castes.",
        secondDescription: "As a member of Seido’s lowest caste, Havik had neither rights nor privileges. He seethed with anger at the injustice. When he is brutally punished for a minor crime, Havik finally decides to act. He sets out to destroy Seido’s regime and replace it with an anarchist utopia.",
        thirdDescription: "Once he breaks Seido’s social order, Havik will free its citizens. Together, they will live in blessed anarchy."
    },
    {
        name: 'ASHRAH',
        img: ASHRAH,
        purpose: 'ABSOLUTION',
        essence: 'Repentant Netherralm Demon',
        firstDescription: "As a demon, all Ashrah knew was pain and violence. She assumed all beings, in all realms, lived as she did.",
        secondDescription: "But once she journeyed outside of the Netherrealm, she realized her error. Other realms were places of beauty and peace. She could not aid in their defilement.",
        thirdDescription: "Ashrah fled from her sister demons. Along the way, she found an enchanted kriss. It was a demon slayer, which she used to finish her pursuers."
    },
    {
        name: 'SINDEL',
        img: SINDEL,
        purpose: 'STABILITY',
        essence: 'Empress of Outworld',
        firstDescription: "When Sindel ascended to Outworld's throne, she worried that she was ill-prepared. Adding to her stress: her impending arranged marriage to Jerrod, an Outworld noble. Forced into it to placate a rebellious region, Sindel could only pray that he was worthy.",
        secondDescription: "To Sindel’s delight, Jerrod proved an ideal partner. Her early reign marked the start of a new Golden Age. Sindel then welcomed her beautiful twin daughters, Mileena and Kitana. She thanked the Gods for her charmed life.",
        thirdDescription: "But Sindel had counted her blessings too quickly. When Jerrod was murdered, Sindel’s heart was broken. Smelling weakness, factions formed to challenge her rule."
    },
    {
        name: 'GENERAL SHAO',
        img: GENERAL,
        purpose: 'DOMINANCE',
        essence: 'Supreme Commander of Outworld’s Army',
        firstDescription: "Born into a proud military family, Shao was expected to become a soldier. But he was a sickly child who, though brilliant and eager, had an infirm body.",
        secondDescription: "Shao’s disability infuriated his father. He dismissed his son’s physicians and designed an extreme program to build his son’s strength and endurance.",
        thirdDescription: "Years of toil molded Shao into a physical colossus and forged within him an iron will. And as his father had promised, Shao became the perfect soldier. His brilliant tactics and relentless effort won Outworld many victories and him much fame."
    },
    {
        name: 'NITARA',
        img: NITARA,
        purpose: 'DELIVERANCE',
        essence: 'Heroine of Vaeternus',
        firstDescription: "Nitara’s race of vampires hails from the dark and desolate realm of Vaeternus. To survive, they evolved the ability to feed on the blood of other creatures.",
        secondDescription: "The Vaeternians thrived, building a great society. But as their comfort grew, so did their shortsightedness. They overfed on Vaeternus’ creatures, disrupting the natural order. They now starve as it collapses.",
        thirdDescription: "It is Nitara's solemn obligation to deliver her people from hunger and save her race. Vaeternus must survive."
    },
    {
        name: 'SHANG TSUNG',
        img: SHANGTSUNG,
        purpose: 'INFLUENCE',
        essence: 'Scheming Sorcerer',
        firstDescription: "Shang Tsung grew up in Outworld’s backwaters. Too lazy for hard labor and too shifty for honest work, he eked out a living selling quack cures and fake magic. Though his wares were useless, Shang Tsung’s easy charm always closed the deal.",
        secondDescription: "Shang Tsung was resigned to this hardscrabble life. But then one day a mysterious stranger came, promising to make Shang Tsung a powerful sorcerer. Though suspicious of the offer, it was one he couldn’t refuse."
    },
    {
        name: "REIKO",
        img: REIKO,
        purpose: 'FEALTY',
        essence: 'General Shao’s Loyal Lieutenant',
        firstDescription: "Reiko was a boy when he and his family were captured during the Kafallah War. Though his family died, Reiko fought and survived.",
        secondDescription: "After spending months as a prisoner, Reiko was freed during a raid by General Shao. Despite his youth and small size, Reiko attacked his former captors and exacted bloody revenge.",
        thirdDescription: "Impressed by the boy’s spirit, General Shao made Reiko his squire. Under his tutelage, Reiko learned the ways of war. He became an exceptional soldier and is now the General’s second-in-command."
    }
]

export const MEDIA_VIDEOS: VideoType[] = [
    {
        title: 'The Reviews Are In!',
        videoUrl: 'https://www.youtube.com/watch?v=1f8XCjsMS_E',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/accolades-trailer.jpg'
    },
    {
        title: 'Launch Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=MYa7L4jp11E',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/launch-trailer.jpg'
    },
    {
        title: 'It’s In Our Blood Trailer ft. Dave Bautista',
        videoUrl: 'https://www.youtube.com/watch?v=BBH_KrEFetA',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/bautista-trailer.jpg'
    },
    {
        title: 'Kombat Pack Roster Reveal Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=eT-3vhCl6N4',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/kombat-pack.jpg'
    },
    {
        title: 'Gameplay Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=jnVTPkCWzcI',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/gameplay-trailer.jpg'
    },
    {
        title: 'Announcement Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=UZ6eFEjFfJ0',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/announce-trailer.jpg'
    }
]

export const FIGHTERS_VIDEOS: VideoType[] = [
    {
        title: 'Omni-Man First Look',
        videoUrl: 'https://www.youtube.com/watch?v=ySWxnUqajQ0',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/omni-man-trailer.jpg'
    },
    {
        title: 'Jean-Claude Van Damme Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=fO8wPLwRCao',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/johnny-cage-trailer.jpg'
    },
    {
        title: 'Megan Fox Becomes Nitara Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=ah8VyRhiWiE',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/nitara-trailer.jpg'
    },
    {
        title: 'Rulers of Outworld Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=nr4lA4N9lFU',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/rulers-trailer.jpg'
    },
    {
        title: 'Banished Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=M39CVZt6uu0',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/banished-trailer.jpg'
    },
    {
        title: 'Keepers of Time Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=72okJYRJWDI',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/keepers-trailer.jpg'
    },
    {
        title: 'Umgadi Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=_sLJ-xyjMQo',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/umgadi.jpg'
    },
    {
        title: 'Lin Kuei Trailer',
        videoUrl: 'https://www.youtube.com/watch?v=66opZ1Go_ZA',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/lin-kuei.jpg'
    }
]


export const EXTRAS_VIDEOS: VideoType[] = [
    {
        title: 'Pro Kompetition 23/24 Announcement',
        videoUrl: 'https://www.youtube.com/watch?v=uITo9ghYGhU',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/pro-kompetition-trailer.jpg'
    },
    {
        title: 'Dave Bautista Plays Mortal Kombat 1',
        videoUrl: 'https://www.youtube.com/watch?v=1RHrXmLBp1k',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/bautista-plays-trailer.jpg'
    },
    {
        title: '“Fatal” by ZHU Official Track',
        videoUrl: 'https://www.youtube.com/watch?v=x2oExuKa73g',
        imageUrl: 'https://cdn-mk1.mortalkombat.com/media/fatal-trailer.jpg'
    }
]
