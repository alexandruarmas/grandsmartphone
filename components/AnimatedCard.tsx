"use client";

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimatedCardProps {
  title: string;
  description: string;
  delay?: number;
  children?: ReactNode;
}

export function AnimatedCard({ title, description, delay = 0, children }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      // Create the animation
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group hover:border-gray-500 transition-all duration-200 hover:-translate-y-1"
    >
      {children}
    </div>
  );
} 