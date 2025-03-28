# 3D Presentation Maker

An interactive web application that converts text descriptions into 3D animated presentations using Next.js, Three.js, and shadcn/ui.

## Features

- Convert text descriptions into 3D scenes
- Interactive 3D visualization with orbit controls
- Modern and responsive UI
- Real-time preview of 3D elements
- Smooth animations and transitions

## Tech Stack

- Next.js 14
- TypeScript
- Three.js / React Three Fiber
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-presentation-maker
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - React components
  - `/ui` - shadcn/ui components
- `/lib` - Utility functions and helpers
- `/public` - Static assets

## Usage

1. Enter a description of the 3D scene you want to create in the text area
2. Click "Generate 3D Presentation"
3. Interact with the 3D scene using your mouse:
   - Left click + drag to rotate
   - Right click + drag to pan
   - Scroll to zoom

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 