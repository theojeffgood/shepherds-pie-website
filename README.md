# Shepherd's Pie Website

A beautiful, responsive website showcasing three delicious shepherd's pie recipes: Classic, Vegetarian, and Gourmet versions.

## Features

- 🍽️ Three unique shepherd's pie recipes
- 📱 Fully responsive design
- ♿ Accessibility-focused implementation
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast loading with Next.js 14
- 🔍 SEO optimized

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Headless UI
- **Linting:** ESLint + Prettier
- **Task Management:** Task Master AI

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
├── app/              # Next.js 14 App Router
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # React components
├── data/            # Recipe data
├── types/           # TypeScript interfaces
├── public/          # Static assets
└── .taskmaster/     # Task management
```

## Recipe Features

### Classic Shepherd's Pie
Traditional recipe with ground lamb, vegetables, and creamy mashed potatoes.

### Vegetarian Shepherd's Pie
Plant-based version using lentils and a medley of vegetables.

### Gourmet Shepherd's Pie
Elevated version with wine reduction, fresh herbs, and gourmet ingredients.

## Development

This project uses Task Master AI for project management. See `.taskmaster/` for task definitions and progress tracking.

## Contributing

1. Check the task list in `.taskmaster/tasks/`
2. Follow the existing code style
3. Ensure all tests pass
4. Update documentation as needed

## License

This project is for educational purposes.
