# GSAP Animation Guide for Next.js

This guide outlines best practices for implementing GSAP animations in Next.js applications, focusing on the App Router architecture.

## Server vs Client Components

Next.js App Router uses React Server Components by default. When working with animations, you need to be aware of the limitations:

- GSAP and other DOM-manipulating libraries cannot run in Server Components
- `useEffect`, `useState`, and other React hooks are not available in Server Components
- Dynamic imports with `ssr: false` cannot be used directly in Server Components

## Proper Implementation Structure

### 1. Create Client Components for Animations

Always mark components that use GSAP with the `"use client"` directive at the top of the file:

```tsx
"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// Import any GSAP plugins
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedComponent() {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // GSAP animations here
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        opacity: 1,
        y: 0,
        duration: 1
      });
    }
    
    // Cleanup
    return () => {
      // Kill animations/ScrollTriggers
    };
  }, []);
  
  return <div ref={elementRef}>Animated content</div>;
}
```

### 2. Client Component Wrapper Pattern

For complex pages with multiple animated sections, create a client wrapper component:

```tsx
// components/AnimationWrapper.tsx
"use client";

import dynamic from 'next/dynamic';

// Use dynamic imports with ssr: false ONLY in client components
const HeavyAnimationComponent = dynamic(() => import('./HeavyAnimationComponent'), { ssr: false });

export default function AnimationWrapper() {
  return (
    <>
      <HeavyAnimationComponent />
      {/* Other animation components */}
    </>
  );
}
```

Then import this wrapper in your Server Component page:

```tsx
// app/page.tsx (Server Component)
import AnimationWrapper from '@/components/AnimationWrapper';

export default function Page() {
  return (
    <main>
      <h1>My Page</h1>
      <AnimationWrapper />
    </main>
  );
}
```

### 3. Safely Loading GSAP

Always check for `window` before using GSAP to prevent SSR errors:

```tsx
// Safe plugin registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

// Safe animation initialization in useEffect
useEffect(() => {
  if (typeof window === 'undefined') return;
  
  // GSAP code here
}, []);
```

## Performance Optimization

### Lazy Loading GSAP

For better performance, consider loading GSAP only when needed:

```tsx
import { useEffect, useRef } from 'react';

export default function AnimatedComponent() {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Dynamic import GSAP only on the client
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);
      
      // Now use GSAP
      gsap.to(elementRef.current, { opacity: 1, duration: 1 });
    };
    
    loadGSAP();
  }, []);
  
  return <div ref={elementRef}>Content</div>;
}
```

### Use Hardware Acceleration

Add the `will-change` CSS property and `transform-gpu` Tailwind class to elements that will animate:

```tsx
<div 
  ref={elementRef} 
  className="transform-gpu"
  style={{ willChange: 'transform, opacity' }}
>
  Animated content
</div>
```

## ScrollTrigger Best Practices

### Cleanup on Component Unmount

Always clean up ScrollTrigger instances to prevent memory leaks:

```tsx
useEffect(() => {
  const trigger = ScrollTrigger.create({
    trigger: elementRef.current,
    start: "top center",
    onEnter: () => gsap.to(elementRef.current, { opacity: 1, y: 0 })
  });
  
  return () => {
    // Proper cleanup
    trigger.kill();
  };
}, []);
```

### Refreshing on Layout Changes

Refresh ScrollTrigger when your layout changes:

```tsx
useEffect(() => {
  // After content loads or layout changes
  ScrollTrigger.refresh();
}, [contentLoaded]);
```

## Debugging Animation Issues

### Common Errors and Solutions

1. **"ssr: false is not allowed in Server Components"**
   - Move dynamic imports to Client Components
   - Create a client wrapper component

2. **Hydration Errors**
   - Make sure initial state matches server-rendered HTML
   - Use `useLayoutEffect` for animations that should run before paint
   - Consider using `suppressHydrationWarning` for elements with dynamic content

3. **Animations Not Working**
   - Check browser console for errors
   - Verify selectors are correct
   - Ensure GSAP is properly imported and registered
   - Check if refs are properly attached to elements

## Accessibility Considerations

### Respecting User Preferences

Honor the user's reduced motion preference:

```tsx
useEffect(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Use simpler animations or skip them entirely
    gsap.to(element, { opacity: 1, duration: 0.1 });
  } else {
    // Full animations
    gsap.to(element, { opacity: 1, y: 0, duration: 1 });
  }
}, []);
```

## Examples

### Page Transition

```tsx
"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Run animation when route changes
    const tl = gsap.timeline();
    
    tl.to(overlayRef.current, {
      scaleY: 1,
      duration: 0.5,
      ease: "power4.inOut"
    }).to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.5,
      ease: "power4.inOut"
    });
    
  }, [pathname]);
  
  return (
    <div className="relative">
      {children}
      <div 
        ref={overlayRef} 
        className="fixed inset-0 bg-black transform-gpu scale-y-0 origin-bottom z-50"
      />
    </div>
  );
}
```

### Scroll Animation Component

```tsx
"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function FadeIn({ children, delay = 0 }) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    gsap.set(element, { opacity: 0, y: 50 });
    
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out"
        });
      },
      once: true
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [delay]);
  
  return (
    <div ref={elementRef} className="will-change-transform">
      {children}
    </div>
  );
}
```

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [React Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components)
- [Client Components in Next.js](https://nextjs.org/docs/getting-started/react-essentials#client-components) 