# Frontend - Job Portal UI

A modern React-based job portal interface with search and filtering capabilities.

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in your browser.

### Build

```bash
npm run build
```

This builds the app for production in the `dist` folder.

## Project Structure

```
src/
├── main.tsx              # Entry point
├── app/
│   ├── App.tsx          # Main app component
│   └── components/
│       ├── FilterSidebar.tsx     # Desktop filter sidebar
│       ├── JobCard.tsx           # Job listing card
│       └── MobileFilters.tsx      # Mobile filter drawer
└── styles/
    ├── index.css        # Main styles
    ├── tailwind.css     # Tailwind configuration
    ├── theme.css        # Theme variables
    └── fonts.css        # Font imports
```

## Features

- **Search**: Find jobs by title
- **Filter**: Filter by category, location, job type, and salary range
- **Responsive**: Optimized for all screen sizes
- **Mobile-First**: Touch-friendly interface

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Radix UI
- Lucide Icons
