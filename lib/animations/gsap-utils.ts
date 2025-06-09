import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Common animation presets
export const fadeIn = (element: string | Element, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    duration,
    ease: 'power2.out'
  });
};

export const slideIn = (element: string | Element, direction = 'left', duration = 1) => {
  const x = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
  const y = direction === 'up' ? -100 : direction === 'down' ? 100 : 0;
  
  return gsap.from(element, {
    x,
    y,
    opacity: 0,
    duration,
    ease: 'power2.out'
  });
};

export const scaleIn = (element: string | Element, duration = 1) => {
  return gsap.from(element, {
    scale: 0,
    opacity: 0,
    duration,
    ease: 'back.out(1.7)'
  });
};

// Scroll-triggered animations
export const scrollFadeIn = (element: string | Element, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    duration,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Stagger animations for lists
export const staggerFadeIn = (elements: string | Element, stagger = 0.1, duration = 1) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 20,
    duration,
    stagger,
    ease: 'power2.out'
  });
};

// Parallax effect
export const parallaxEffect = (element: string | Element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};

// Custom animation timeline
export const createTimeline = () => {
  return gsap.timeline();
}; 