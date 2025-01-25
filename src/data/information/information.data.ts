import { faWhatsapp, faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCircleUser, faMapLocationDot, faPhone, faAt } from "@fortawesome/free-solid-svg-icons"

export const informationContact = [
    {
        icon: faCircleUser,
        information1: "name",
        information2: "Thiago da Silva de Souza",
    },
    {
        icon: faMapLocationDot,
        information1: "location",
        information2: "Paraná - BR"

    },
    {
        icon: faPhone,
        information1: "phone",
        information2: "+55(041)99945-4655"
    },
    {
        icon: faAt,
        information1: "email",
        information2: "thiago.dsouza1992@gmail.com"
    }
]

export const informationSocial = [
    {
        href: "https://wa.me/5541999454655",
        icon: faWhatsapp
    },
    {
        href: "https://t.me/+5541999454655",
        icon: faTelegram
    },
    {
        href: "https://www.linkedin.com/in/thiago-silva-souza-27557b1a4/",
        icon: faLinkedin
    }
]