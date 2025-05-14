import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AnimateCards = () => {
  // Use an array to hold refs instead of a ref to an array
  const cardsContainer = useRef(null);
  
  const cards = [
    "Card 1", "Card 2", "Card 3", "Card 4", "Card 5",
    "Card 6", "Card 7", "Card 8", "Card 9", "Card 10"
  ];
  
  useEffect(() => {
    // Select all card elements inside the container
    const cardElements = cardsContainer.current.querySelectorAll('.card-item');
    
    // Create the animation
    gsap.fromTo(cardElements, 
      { 
        y: 100, 
        opacity: 0, 
        rotationX: 45,
        scale: 0.8
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        scale: 1,
        duration: 1, 
        ease: "power3.out", 
        stagger: 0.1,
        clearProps: "all" // Ensures clean state after animation
      }
    );
    
    // Add hover animations
    cardElements.forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.out"
        });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power1.in"
        });
      });
    });
  }, []);
  
  return (
    <div className="flex gap-4 justify-center mt-20 flex-wrap" ref={cardsContainer}>
      {cards.map((text, index) => (
        <div
          key={index}
          className="card-item w-40 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
        >
          <h2>{text}</h2>
        </div>
      ))}
    </div>
  );
};

export default AnimateCards;