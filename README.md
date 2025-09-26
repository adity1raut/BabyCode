
# ExcelIELTS Web App

A modern, responsive web application for IELTS preparation, featuring testimonials, features, and interactive sections. Built with React, Vite, and Tailwind CSS.

## Features
- Animated testimonial cards with unified color theme
- Feature highlights with icons and descriptions
- Hero section with dynamic images
- Call-to-action section for trial and expert sessions
- Responsive navigation and footer
- Clean, modern UI with Tailwind CSS

## Tech Stack
- React
- Vite
- Tailwind CSS
- Lucide Icons

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/adity1raut/BabyCode.git
	cd BabyCode/client
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
3. Start the development server:
	```bash
	npm run dev
	# or
	yarn dev
	```
4. Open your browser at `http://localhost:5173` (default Vite port).

## Project Structure
```
client/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   ├── CTASection.jsx
  │   │   ├── FeatureCard.jsx
  │   │   ├── FeaturesSection.jsx
  │   │   ├── Footer.jsx
  │   │   ├── HeroSection.jsx
  │   │   ├── Navigation.jsx
  │   │   ├── TestimonialCard.jsx
  │   │   ├── TestimonialsSection.jsx
  │   ├── App.jsx
  │   ├── main.jsx
  │   ├── index.css
  ├── index.html
  ├── package.json
  ├── vite.config.js
  ├── eslint.config.js
  └── README.md
```

## Code Quality

To check code style and formatting, run:

```bash
npm run lint
```

To automatically fix and format issues, run:

```bash
npm run lint -- --fix
```


## Customization
- Update testimonials and features in their respective components.
- Change color theme via Tailwind config or component classes.
- Add new sections/components as needed.

## License
MIT

## Author
Aditya Raut
