# Smartphone Store Homepage

A modern, animated Next.js website for a smartphone repair and sales business.

## Features

- **Modern UI**: Clean, minimalist design with attention to typography and whitespace
- **Responsive Layout**: Fully responsive design that works on all devices
- **GSAP Animations**: Smooth, high-performance animations powered by GSAP
- **Page Transitions**: Seamless transitions between pages
- **Scroll Animations**: Elements animate as you scroll down the page
- **Optimized Performance**: Fast loading times and smooth interactions

## Technologies Used

- **Next.js**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Animation library
- **Lucide Icons**: Beautiful, consistent icon set
- **shadcn/ui**: Accessible UI components

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/alexandruarmas/grandsmartphone.git
cd smartphone-store-homepage
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- **`/app`**: Next.js App Router pages
- **`/components`**: Reusable React components
  - **`/ui`**: UI components from shadcn/ui
  - Specialized animation components
- **`/public`**: Static assets
- **`/styles`**: Global styles and Tailwind configuration

## Animation Components

### Page Transitions

The `PageTransition` component handles transitions between pages, creating a smooth user experience when navigating the site.

### Scroll Animations

Various scroll-triggered animations:
- `ScrollAnimations.tsx`: Utility components for fade, zoom and rotate animations
- `HorizontalScrollSection.tsx`: Creates horizontal scrolling sections
- `ProductsScrollAnimation.tsx`: 3D card animations for product showcases

## Performance Considerations

- **Client Components**: All animation components are client-side
- **Proper Cleanup**: All animations properly clean up to prevent memory leaks
- **Hardware Acceleration**: Uses CSS properties for smooth animations
- **Reduced Motion**: Respects user's reduced motion preferences

## Development Notes

- See `gsap-nextjs-guide.md` for best practices when working with GSAP in Next.js
- See `checklist.md` for project implementation status and remaining tasks

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers on iOS and Android

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- GSAP by GreenSock for the animation library
- shadcn/ui for accessible component templates
- Lucide for the beautiful icons  
