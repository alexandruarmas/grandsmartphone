"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gifContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(false);

  const animatePageTransition = (isInitial = false) => {
    if (!pageRef.current) return () => {};
    
    const ctx = gsap.context(() => {
      if (isInitial) {
        // Initial page load animation
        gsap.fromTo(
          pageRef.current,
          { opacity: 0 },
          { 
            opacity: 1,
            duration: 0.2,
            ease: "power3.out",
            clearProps: "all"
          }
        );
        
        // Make sure GIF overlay is hidden initially
        if (gifContainerRef.current) {
          gsap.set(gifContainerRef.current, { opacity: 0 });
        }
        
        return;
      }
      
      setTransitioning(true);
      
      // Create animation timeline
      const tl = gsap.timeline({
        onComplete: () => {
          setTransitioning(false);
        }
      });
      
      // Fade out current content
      tl.to(pageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.1,
        ease: "power2.in"
      });
      
      // Show GIF with animation if available
      if (gifContainerRef.current) {
        // Get the inner GIF wrapper
        const gifWrapper = gifContainerRef.current.querySelector('.transition-gif');
        
        // Show GIF container
        tl.to(gifContainerRef.current, {
          opacity: 1,
          duration: 0.1,
          ease: "power2.out"
        });
        
        // Animate the GIF wrapper if it exists
        if (gifWrapper) {
          tl.fromTo(
            gifWrapper,
            {
              scale: 0.7,
              rotation: -5
            },
            {
              scale: 1,
              rotation: 0,
              duration: 0.25,
              ease: "elastic.out(1, 0.5)"
            },
            "-=0.08"
          )
          .to(gifWrapper, {
            scale: 1.1,
            rotation: 3,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut"
          });
        }
        
        // Fade out GIF
        tl.to(gifContainerRef.current, {
          opacity: 0,
          duration: 0.1,
          ease: "power2.in"
        });
      }
      
      // Fade in new content
      tl.fromTo(
        pageRef.current,
        {
          opacity: 0,
          scale: 1.05
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.15,
          clearProps: "all",
          ease: "power2.out"
        }
      );
    });
    
    return () => ctx.revert();
  };
  
  // Initial page load animation
  useEffect(() => {
    const cleanup = animatePageTransition(true);
    return cleanup;
  }, []);

  // Handle route changes
  useEffect(() => {
    if (transitioning) return; // Prevent animation overlap
    
    const timeout = setTimeout(() => {
      const cleanup = animatePageTransition();
      
      return () => {
        cleanup();
        clearTimeout(timeout);
      };
    }, 2);
    
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div ref={wrapperRef} className="w-full relative">
      {/* GIF Overlay */}
      <div 
        ref={gifContainerRef} 
        className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
        style={{ opacity: 0 }}
      >
        <div className="transition-gif relative w-[70vmin] h-[70vmin] transform-gpu">
          <Image
            src="/gif.gif" 
            alt="Transition"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
      
      {/* Main content */}
      <div 
        ref={pageRef} 
        className="w-full"
      >
        {children}
      </div>
    </div>
  );
} 