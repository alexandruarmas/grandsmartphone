import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

type AnimationFunction = (element: Element) => gsap.core.Tween | gsap.core.Timeline;

export const useGSAP = (animation: AnimationFunction, dependencies: any[] = []) => {
  const elementRef = useRef<Element | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      const animationInstance = animation(elementRef.current);

      // Cleanup function
      return () => {
        if (animationInstance) {
          animationInstance.kill();
        }
      };
    }
  }, dependencies);

  return elementRef;
};

// Example usage:
/*
const MyComponent = () => {
  const elementRef = useGSAP((element) => {
    return gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });
  });

  return <div ref={elementRef}>Animated Element</div>;
};
*/ 