# 3D Presentation Maker

A modern web application that transforms text descriptions into interactive 3D presentations using React, Three.js, and Vite.

## Features

- 🎨 Modern, responsive UI with glassmorphism effects
- 🌟 Real-time 3D scene generation from text descriptions
- 🎭 Smooth animations and transitions using Framer Motion
- 🎮 Interactive 3D controls for scene manipulation
- 📱 Fully responsive design that works on all devices
- ⚡ Built with Vite for lightning-fast development

## Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **3D Graphics**: Three.js
- **3D React Components**: 
  - @react-three/fiber
  - @react-three/drei
- **Styling**: 
  - styled-components
  - Emotion
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/3d-presentation-maker.git
cd 3d-presentation-maker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a description in the text area
2. Click "Generate 3D Scene" to update the 3D scene
3. Use your mouse to:
   - Left click + drag to rotate the scene
   - Right click + drag to pan
   - Scroll to zoom in/out

## Project Structure

```
3d-presentation-maker/
├── src/
│   ├── components/
│   │   ├── Scene.tsx        # 3D scene rendering
│   │   └── DescriptionInput.tsx  # User input form
│   ├── App.tsx             # Main application component
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Features

1. Create new components in the `src/components` directory
2. Import and use them in `App.tsx`
3. Add any new dependencies to `package.json`
4. Update types in `src/types` if needed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for React bindings
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vite](https://vitejs.dev/) for the build tool 