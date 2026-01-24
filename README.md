# Personal Portfolio - React

A modern, responsive personal portfolio website built with React, showcasing my professional experience, projects, and technical skills as a Full-Stack Web Developer and Instructor.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile).
- **Smooth Animations**: Engaging user experience with Framer Motion.
- **Interactive Components**: Dynamic UI elements with React.
- **Modern Tech Stack**: Built with latest React and Vite.
- **Professional Layout**: Clean, organized sections for experience, projects, and skills
- **Custom Components**: Reusable component architecture with atomic design principles.

## 🛠️ Tech Stack

### Core Technologies

- **React**: React 18.2.0
- **Vite**: Vite 4.4.5
- **Framer Motion**: Framer Motion 10.12.4

### UI & Animation

- **Tailwind CSS**: Tailwind CSS 3.3.3
- **Framer Motion**: Framer Motion 10.12.4
- **React Icons**: React Icons 4.10.1
- **Swiper**: Swiper 11.1.1
- **React Feather** 2.0.10

### Additional Libraries

- React Intersection Observer 9.10.3
- React Media 1.10.0
- React Router DOM 6.16.0
- Custom Modal Package

## 📁 Project Structure

```text
perso-port-react/
├── src/
│   ├── assets/
│   │   └── imgs/              # Images and visual assets
│   ├── classes/               # Utility classes and helpers
│   │   └── LightBox.js       # Lightbox functionality
│   ├── components/
│   │   ├── atoms/            # Basic building blocks
│   │   │   ├── Accordion.jsx
│   │   │   ├── CardBody.jsx
│   │   │   ├── CardImg.jsx
│   │   │   └── CardTitle.jsx
│   │   ├── lightInstances/   # Light-related components
│   │   │   ├── lights.js
│   │   │   ├── AnimatedSection.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LightBox.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── SocialCont.jsx
│   │   │   ├── SwiperComp.jsx
│   │   │   └── SwiperCube.jsx
│   │   └── LanguageSwitcher.jsx  # Language selector component
│   ├── contexts/             # React Context providers
│   │   └── LanguageContext.jsx   # i18n context & provider
│   ├── data/                 # Multilingual data files
│   │   ├── en/              # English content
│   │   │   ├── courses.js
│   │   │   ├── experience.js
│   │   │   ├── projects.js
│   │   │   └── titles.js
│   │   ├── fr/              # French content
│   │   │   ├── courses.js
│   │   │   ├── experience.js
│   │   │   ├── projects.js
│   │   │   └── titles.js
│   │   └── sp/              # Spanish content
│   │       ├── courses.js
│   │       ├── experience.js
│   │       ├── projects.js
│   │       └── titles.js
│   ├── hooks/               # Custom React hooks
│   │   └── useTranslation.js    # Translation hook
│   ├── layouts/              # Layout components
│   │   ├── default.jsx
│   │   └── ErrorPage.jsx
│   ├── pages/               # Main page components
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectSingle.jsx
│   │   ├── Technos.jsx
│   │   └── Titles.jsx
│   ├── sass/                # Styling
│   │   ├── abstracts/      # Variables, mixins
│   │   ├── components/     # Component styles
│   │   │   └── LanguageSwitcher.scss
│   │   ├── layout/         # Layout styles
│   │   ├── pages/          # Page-specific styles
│   │   └── main.scss       # Main stylesheet
│   ├── translations/        # UI translation files
│   │   ├── en.json         # English UI strings
│   │   ├── fr.json         # French UI strings
│   │   └── es.json         # Spanish UI strings
│   ├── main.jsx            # Application entry point
│   └── .eslintrc.cjs       # ESLint configuration
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Atomic Design Structure

The project follows atomic design principles:

Atoms (Basic building blocks):

- `Accordion.jsx` - Collapsible content sections
- `CardBody.jsx` - Card content container
- `CardImg.jsx` - Image component for cards
- `CardTitle.jsx` - Card header component

## Molecules (Combined atoms)

- `SwiperComp.jsx` - Carousel component
- `SwiperCube.jsx` - 3D cube carousel
- `LightBox.jsx` - Image gallery lightbox
- `AnimatedSection.jsx` - Section with scroll animations

## Pages

- `Home.jsx` - Landing page with introduction
- `Experience.jsx` - Professional experience timeline
- `Technos.jsx` - Technical skills and technologies
- `Projects.jsx` - Projects section
- `Titles.jsx` - Certifications and education
- `Contact.jsx` - Contact form and information
- `ProjectSingle.jsx` - Single project page
- `ErrorPage.jsx` - Error page

## 🎯 Key Features Explained

### Animations

Uses Framer Motion for smooth, performant animations including:

- Parallax scrolling
- Scroll-triggered animations
- Page transitions
- Interactive hover effects
- Stagger animations for lists

### Responsive Design

- Mobile-first approach
- Breakpoint-based layouts with Sass mixins
- Flexible grid system
- Touch-optimized interactions

### Performance Optimization

- Code splitting with React Router
- Lazy loading of images
- Intersection Observer for scroll animations
- Vite for fast builds and HMR

### 👨‍💻 Author

- Martin Pedraza
- [LinkedIn](https://www.linkedin.com/in/martin-pedraza-dev)
- [GitHub](https://github.com/lostmart)
- [Portfolio](https://personal-site-react.netlify.app)
