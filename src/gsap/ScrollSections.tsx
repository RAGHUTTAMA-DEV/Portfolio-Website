import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollSections: React.FC = () => {
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Define colors for each section
  const sectionColors = [
    { bg: '#9ED5C5', text: '#333333' },
    { bg: '#8ECAE6', text: '#023047' },
    { bg: '#FFB703', text: '#023047' },
    { bg: '#FB8500', text: '#FFFFFF' }
  ];
  
  const sections = ['About Us', 'Services', 'Projects', 'Contact'];
  
  useEffect(() => {
    // Animation for the title elements inside each section
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;
      
      // Create content elements for animation
      const title = section.querySelector('.section-title');
      const line = section.querySelector('.section-line');
      const content = section.querySelector('.section-content');
      
      // Create a timeline for this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false,
        }
      });
      
      // Add animations to the timeline
      tl.from(section, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .from(title, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, "-=0.4")
      .from(line, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.3")
      .from(content, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      }, "-=0.5");
      
      // Add parallax effect
      gsap.to(section, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
    
    // Add a scroll progress indicator
    gsap.to('.progress-bar', {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div ref={containerRef} style={{ paddingTop: '100px' }}>
      {/* Progress bar at the top of the page */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '6px',
          background: '#eee',
          zIndex: 1000
        }}
      >
        <div 
          className="progress-bar"
          style={{
            height: '100%',
            width: '0%',
            background: 'linear-gradient(to right, #3498db, #8e44ad)',
          }}
        />
      </div>
      
      {sections.map((title, index) => (
        <section
          key={index}
          ref={(el) => {
            if (el) sectionsRef.current[index] = el as HTMLDivElement
          }}
          style={{
            height: '80vh',
            marginBottom: '100px',
            background: sectionColors[index].bg,
            color: sectionColors[index].text,
            borderRadius: '12px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <h2 
            className="section-title"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            {title}
          </h2>
          
          <div 
            className="section-line"
            style={{
              width: '80px',
              height: '4px',
              background: sectionColors[index].text,
              marginBottom: '2rem'
            }}
          />
          
          <div 
            className="section-content"
            style={{
              maxWidth: '600px',
              textAlign: 'center',
              fontSize: '1.2rem',
              lineHeight: 1.6
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus lacinia odio vitae vestibulum vestibulum. 
              Cras porttitor metus vel justo consectetur, sed fringilla lorem pulvinar.
            </p>
          </div>
          
          {/* Background decoration */}
          <div
            style={{
              position: 'absolute',
              bottom: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '20px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
            }}
          />
          
          {/* Section number */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              fontSize: '5rem',
              fontWeight: 'bold',
              opacity: 0.1,
            }}
          >
            {index + 1}
          </div>
        </section>
      ))}    </div>
  );
};

export default ScrollSections;