import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = {
    en: [
        {
            id: 1,
            name: "Education",
            icon: <Briefcase />,
            description: "Computer Engineering Student at UTM",
        },
        {
            id: 2,
            name: "Projects",
            icon: <Wrench />,
            description: "Personal projects for professional use",
        },
        {
            id: 3,
            name: "Certifications",
            icon: <Wrench />,
            description: "+5 complementary courses completed",
        },
    ],
    es: [
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
    ]
};

export const itemsNavbar = {
    en: [
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
    ],
    es: [
        {
            id: 1,
            title: "Inicio",
            icon: <Home size={20} />,
            link: "#home",
        },
        {
            id: 2,
            title: "Usuario",
            icon: <UserRound size={20} />,
            link: "#about-me",
        },
        {
            id: 3,
            title: "Libro",
            icon: <BookText size={20} />,
            link: "#services",
        },
        {
            id: 4,
            title: "Objetivo",
            icon: <CodeSquare size={20} />,
            link: "#portfolio",
        },
        {
            id: 5,
            title: "Correo",
            icon: <Mail size={20} />,
            link: "#contact",
        },
    ]
};

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

export const dataPortfolio = {
    en: [
        {
            id: 1,
            title: "Auto Pawn Website",
            image: "/image-1.jpg",
            urlGithub: "#!",
            urlDemo: "#!",
        },
        {
            id: 2,
            title: "Gorilla LAB Website",
            image: "/image-2.jpg",
            urlGithub: "#!",
            urlDemo: "#!",
        },
        {
            id: 3,
            title: "POS Web App",
            image: "/image-3.jpg",
            urlGithub: "#!",
            urlDemo: "#!",
        },
        {
            id: 4,
            title: "Auto Pawn Web App",
            image: "/image-4.jpg",
            urlGithub: "#!",
            urlDemo: "#!",
        },
    ],
    es: [
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
    ]
};

export const dataExperience = {
    en: [
        {
            id: 1,
            title: "Frontend Development  💄",
            experience: [
                { name: "HTML", subtitle: "Advanced", value: 75 },
                { name: "CSS", subtitle: "Advanced", value: 75 },
                { name: "JavaScript", subtitle: "Advanced", value: 75 },
                { name: "Tailwind CSS", subtitle: "Intermediate", value: 45 },
                { name: "React", subtitle: "Advanced", value: 70 },
                { name: "Bootstrap", subtitle: "Basic", value: 30 },
            ],
        },
        {
            id: 2,
            title: "Backend Development  🥷",
            experience: [
                { name: "Node JS", subtitle: "Advanced", value: 75 },
                { name: "Mongo DB", subtitle: "Intermediate", value: 40 },
                { name: "Python", subtitle: "Advanced", value: 75 },
                { name: "MySQL", subtitle: "Advanced", value: 75 },
                { name: "PHP", subtitle: "Basic", value: 30 },
                { name: "Django", subtitle: "Basic", value: 30 },
            ],
        },
        {
            id: 3,
            title: "Tools & Technologies 🛠️",
            experience: [
                { name: "Git", subtitle: "Advanced", value: 80 },
                { name: "Docker", subtitle: "Intermediate", value: 60 },
                { name: "n8n", subtitle: "Intermediate", value: 60 },
            ],
        },
        {
            id: 4,
            title: "Languages 🗣️",
            experience: [
                { name: "Spanish", subtitle: "Native", value: 100 },
                { name: "English", subtitle: "Intermediate", value: 40 },
            ],
        },
    ],
    es: [
        {
            id: 1,
            title: "Frontend Development  💄",
            experience: [
                { name: "HTML", subtitle: "Avanzado", value: 75 },
                { name: "CSS", subtitle: "Avanzado", value: 75 },
                { name: "JavaScript", subtitle: "Avanzado", value: 75 },
                { name: "Tailwind CSS", subtitle: "Intermedio", value: 45 },
                { name: "React", subtitle: "Avanzado", value: 70 },
                { name: "Bootstrap", subtitle: "Basico", value: 30 },
            ],
        },
        {
            id: 2,
            title: "Backend Development  🥷",
            experience: [
                { name: "Node JS", subtitle: "Avanzado", value: 75 },
                { name: "Mongo DB", subtitle: "Intermedio", value: 40 },
                { name: "Python", subtitle: "Avanzado", value: 75 },
                { name: "MySQL", subtitle: "Avanzado", value: 75 },
                { name: "PHP", subtitle: "Basico", value: 30 },
                { name: "Django", subtitle: "Basico", value: 30 },
            ],
        },
        {
            id: 3,
            title: "Herramientas y Tecnologías 🛠️",
            experience: [
                { name: "Git", subtitle: "Avanzado", value: 80 },
                { name: "Docker", subtitle: "Intermedio", value: 60 },
                { name: "n8n", subtitle: "Intermedio", value: 60 },
            ],
        },
        {
            id: 4,
            title: "Idiomas 🗣️",
            experience: [
                { name: "Español", subtitle: "Nativo", value: 100 },
                { name: "Inglés", subtitle: "Intermedio", value: 40 },
            ],
        },
    ]
};

export const dataServices = {
    en: [
        {
            id: 1,
            title: "Web Development",
            icon: <PanelsTopLeft />,
            features: [
                { name: "Creation of interactive and scalable platforms." },
                { name: "Design of modern and fast components." },
                { name: "Sites optimized for any device." },
                { name: "Web application development" },
                { name: "Content management" },
                { name: "Constant updates and bug fixes." },
                { name: "Maintenance and continuous support" },
            ],
        },
        {
            id: 2,
            title: "Process Automation",
            icon: <BellPlus />,
            features: [
                { name: "Logical automation of business and technical processes." },
                { name: "Seamless connection between different services and web platforms." },
                { name: "Automatic movement of information between databases and apps." },
                { name: "Creation of automatic alert systems (Telegram, Slack, Email)." },
                { name: "Reduction of manual processes through programmed logic." },
            ],
        },
        {
            id: 3,
            title: "UI/UX Design",
            icon: <Brush />,
            features: [
                { name: "Intuitive design for a smooth user experience" },
                { name: "Interactive prototyping to visualize the interface" },
                { name: "User research to understand needs and expectations" },
                { name: "Usability optimization to improve accessibility" },
                { name: "Usability testing to evaluate the experience" },
                { name: "Responsive design to adapt to different devices" },
            ],
        },
    ],
    es: [
        {
            id: 1,
            title: "Desarrollo Web",
            icon: <PanelsTopLeft />,
            features: [
                { name: "Creación de plataformas interactivas y escalables." },
                { name: "Diseño de componentes modernos y rápidos." },
                { name: "Sitios optimizados para cualquier dispositivo." },
                { name: "Desarrollo de aplicaciones web" },
                { name: "Gestión de contenido" },
                { name: "Actualización constante y corrección de errores." },
                { name: "Mantenimiento y soporte continuo" },
            ],
        },
        {
            id: 2,
            title: "Automatización de Procesos",
            icon: <BellPlus />,
            features: [
                { name: "Automatización lógica de procesos empresariales y técnicos." },
                { name: "Conexión fluida entre diferentes servicios y plataformas web." },
                { name: "Movimiento automático de información entre bases de datos y apps." },
                { name: "Creación de sistemas de alerta automáticos (Telegram, Slack, Email)." },
                { name: "Reducción de procesos manuales mediante lógica programada." },
            ],
        },
        {
            id: 3,
            title: "UI/UX Design",
            icon: <Brush />,
            features: [
                { name: "Diseño intuitivo para una experiencia de usuario fluida" },
                { name: "Prototipado interactivo para visualizar la interfaz" },
                { name: "Investigación de usuarios para comprender necesidades y expectativas" },
                { name: "Optimización de la usabilidad para mejorar la accesibilidad" },
                { name: "Pruebas de usabilidad para evaluar la experiencia" },
                { name: "Diseño responsive para adaptarse a diferentes dispositivos" },
            ],
        },
    ]
};

export const dataContact = {
    en: [
        {
            id: 1,
            title: "Phone",
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
    ],
    es: [
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
    ]
};

export const dataIntroduction = {
    en: {
        greeting: "Hello I´m",
        name: "Robert Hernandez",
        profession: "Computer Engineering",
        contact: "Contact me",
        downloadCv: "Download CV",
    },
    es: {
        greeting: "Hola, soy",
        name: "Robert Hernandez",
        profession: "Ingeniero en Computación",
        contact: "Contacta conmigo",
        downloadCv: "Descargar CV",
    }
};

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

export const dataText = {
    en: {
        aboutMe: {
            title: "About me",
            subtitle: "Know me",
            description: "I am a Computer Engineering student, passionate about programming and constant learning. I enjoy facing logical challenges and converting ideas into solutions through code. Throughout my training I have worked on personal projects related to web development, databases and structured and object-oriented programming, strengthening my technical skills and analytical thinking. I am interested in continuing to grow as a developer, learning new technologies and acquiring professional experience that allows me to add value in real projects. I firmly believe in discipline, constant practice and the balance between study and personal development.",
            contactButton: "Contact me"
        },
        experience: {
            title: "Experience",
            subtitle: "Skills I have"
        },
        services: {
            title: "Services",
            subtitle: "What I offer"
        },
        portfolio: {
            title: "Portfolio",
            subtitle: "Recent works 💼",
            demo: "Live demo"
        },
        contact: {
            title: "Contact me",
            subtitle: "Get in touch with me 👋",
            button: "Send message"
        },
        contactForm: {
            success: "Form sent successfully ✌🏽",
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email",
            messagePlaceholder: "Write your message...",
            button: "Send"
        },
        footer: {
            aboutMe: "About me",
            skills: "Skills",
            services: "Services",
            portfolio: "Portfolio",
            contact: "Contact",
            rights: "Landing Page by Robert Hernández"
        }
    },
    es: {
        aboutMe: {
            title: "Sobre mi",
            subtitle: "Conóceme",
            description: "Soy estudiante de Computacion, apasionado por la programación y el aprendizaje constante. Disfruto enfrentar retos lógicos y convertir ideas en soluciones mediante código. A lo largo de mi formación he trabajado en proyectos personales relacionados con desarrollo web, bases de datos y programación estructurada y orientada a objetos, fortaleciendo mis habilidades técnicas y mi pensamiento analítico. Me interesa seguir creciendo como desarrollador, aprender nuevas tecnologías y adquirir experiencia profesional que me permita aportar valor en proyectos reales. Creo firmemente en la disciplina, la práctica constante y el equilibrio entre estudio y desarrollo personal.",
            contactButton: "Contáctame"
        },
        experience: {
            title: "Experiencia",
            subtitle: "Skills que tengo"
        },
        services: {
            title: "Servicios",
            subtitle: "Que ofrezco"
        },
        portfolio: {
            title: "Portfolio",
            subtitle: "Trabajos recientes 💼",
            demo: "Live demo"
        },
        contact: {
            title: "Contacta conmigo",
            subtitle: "Ponte en contacto conmigo 👋",
            button: "Enviar mensaje"
        },
        contactForm: {
            success: "Formulario se ha enviado con éxito ✌🏽",
            namePlaceholder: "Tu nombre",
            emailPlaceholder: "Tu email",
            messagePlaceholder: "Escribe tu mensaje...",
            button: "Enviar"
        },
        footer: {
            aboutMe: "Sobre mi",
            skills: "Skills",
            services: "Servicios",
            portfolio: "Portfolio",
            contact: "Contacto",
            rights: "Landing Page by Robert Hernández"
        }
    }
};