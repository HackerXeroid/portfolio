interface TranslationResources {
  [language: string]: {
    translation: {
      [key: string]: string;
    };
  };
}

const resources: TranslationResources = {
  en: {
    translation: {
      React: "React",
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      "about-me": "About Me",
      contacts: "Contacts",
      "react-specialist": "React Specialist and UI/UX Enthusiast",
      "crafts-websites":
        "He crafts responsive websites where technology meets creativity",
      "contact-me": "Contact me!!",
      "view-all": "View All",
      languages: "Languages",
      databases: "Databases",
      frameworks: "Frameworks",
      tools: "Tools",
      "read-more": "Read more",
      "message-me": "Message me here",
      copyright: "© Copyright 2024. Made by Shivam",
    },
  },
  es: {
    translation: {
      React: "React",
      home: "Inicio",
      projects: "Proyectos",
      skills: "Habilidades",
      "about-me": "Sobre Mí",
      contacts: "Contactos",
      "react-specialist": "Especialista en React y Entusiasta de UI/UX",
      "crafts-websites":
        "Crea sitios web responsivos donde la tecnología se encuentra con la creatividad",
      "contact-me": "¡Contáctame!",
      "view-all": "Ver Todo",
      languages: "Lenguajes",
      databases: "Bases de Datos",
      frameworks: "Frameworks",
      tools: "Herramientas",
      "read-more": "Leer más",
      "message-me": "Envíame un mensaje aquí",
      copyright: "© Derechos de Autor 2024. Hecho por Shivam",
    },
  },
  ru: {
    translation: {
      React: "Реакт",
      home: "Главная",
      projects: "Проекты",
      skills: "Навыки",
      "about-me": "Обо мне",
      contacts: "Контакты",
      "react-specialist": "Специалист по React и энтузиаст UI/UX",
      "crafts-websites":
        "Он создает отзывчивые веб-сайты, где технологии встречаются с творчеством",
      "contact-me": "Свяжитесь со мной!!",
      "view-all": "Посмотреть все",
      languages: "Языки",
      databases: "Базы данных",
      frameworks: "Фреймворки",
      tools: "Инструменты",
      "read-more": "Читать далее",
      "message-me": "Напишите мне здесь",
      copyright: "© Авторское право 2024. Сделано Шивамом",
    },
  },
  ua: {
    translation: {
      React: "Реакт",
      home: "Головна",
      projects: "Проекти",
      skills: "Навички",
      "about-me": "Про мене",
      contacts: "Контакти",
      "react-specialist": "Спеціаліст з React та ентузіаст UI/UX",
      "crafts-websites":
        "Він створює адаптивні веб-сайти, де технології зустрічаються з творчістю",
      "contact-me": "Зв'яжіться зі мною!!",
      "view-all": "Переглянути все",
      languages: "Мови",
      databases: "Бази даних",
      frameworks: "Фреймворки",
      tools: "Інструменти",
      "read-more": "Читати далі",
      "message-me": "Напишіть мені тут",
      copyright: "© Авторське право 2024. Зроблено Шивамом",
    },
  },
};

export default resources;
