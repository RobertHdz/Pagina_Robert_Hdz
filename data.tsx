import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Educación",
        icon: <Briefcase />,
        description: "Estudante de Ing. en Computacion en la UTM",
    },
    {
        id: 2,
        name: "Proyectos",
        icon: <Wrench />,
        description: "Proyectos personales para uso profesional",
    },
    {
        id: 3,
        name: "Certificaciones",
        icon: <Wrench />,
        description: "+5 cursos complementarios completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Sitio Web Auto Empeño",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Sitio Web Gorilla LAB",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "App Web Punto de Venta",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "App Web Auto Empeño",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Avanzado",
                value: 75,
            },
            {
                name: "CSS",
                subtitle: "Avanzado",
                value: 75,
            },
            {
                name: "JavaScript",
                subtitle: "Avanzado",
                value: 75,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                value: 45,
            },
            {
                name: "React",
                subtitle: "Avanzado",
                value: 70,
            },
            {
                name: "Bootstrap",
                subtitle: "Basico",
                value: 30,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Avanzado",
                value: 75,
            },
            {
                name: "Mongo DB",
                subtitle: "Intermedio",
                value: 40,
            },
            {
                name: "Python",
                subtitle: "Avanzado",
                value: 75,
            },
            {
                name: "MySQL",
                subtitle: "Avanzado",
                value: 75,
            },
            {
                name: "PHP",
                subtitle: "Basico",
                value: 30,
            },
            {
                name: "Django",
                subtitle: "Basico",
                value: 30,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Creación de plataformas interactivas y escalables.",
            },
            {
                name: "Diseño de componentes modernos y rápidos.",
            },
            {
                name: "Sitios optimizados para cualquier dispositivo.",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Actualización constante y corrección de errores.",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Automatización de Procesos",
        icon: <BellPlus />,
        features: [
            {
                name: "Automatización lógica de procesos empresariales y técnicos.",
            },
            {
                name: "Conexión fluida entre diferentes servicios y plataformas web.",
            },
            {
                name: "Movimiento automático de información entre bases de datos y apps.",
            },
            {
                name: "Creación de sistemas de alerta automáticos (Telegram, Slack, Email).",
            },
            {
                name: "Reducción de procesos manuales mediante lógica programada.",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+52 951 342 3998",
        link: "tel:+529513423998",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/ratasi",
        link: "github.com/ratasi",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "hemr050604@gmail.com",
        link: "mailto:hemr050604@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];