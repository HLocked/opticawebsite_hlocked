import { useEffect, useRef } from 'react'

export default function AnimatedText({ 
  text, 
  className = "", 
  animationType = "wave", 
  delay = 0,
  duration = 0.8,
  stagger = 0.05 
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !window.gsap) return

    const container = containerRef.current
    const letters = container.querySelectorAll('.letter')
    
    // Clear any existing animations
    window.gsap.set(letters, { clearProps: "all" })
    
    // Set up animation based on type
    switch (animationType) {
      case 'mask-reveal-letters':
        // Mask reveal effect but letter by letter
        const maskedLetters = container.querySelectorAll('.masked-letter')
        
        // Set up the mask reveal animation for letters
        window.gsap.set(maskedLetters, { 
          y: "100%"
        })
        
        window.gsap.to(maskedLetters, {
          y: "0%",
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "power3.inOut"
        })
        break
        
      case 'mask-reveal':
        // Mask reveal effect like Framer - multiple text layers with clipping
        const textLines = container.querySelectorAll('.text-line')
        
        // Set up the mask reveal animation
        window.gsap.set(textLines, { 
          y: "100%"
        })
        
        window.gsap.to(textLines, {
          y: "0%",
          duration: duration * 1.2,
          stagger: stagger * 2,
          delay: delay,
          ease: "power3.inOut"
        })
        break
        
      case 'industrial':
        // Industrial effect - rigid upward slide, no overshoot
        window.gsap.set(letters, { 
          y: 60, 
          opacity: 0
        })
        
        window.gsap.to(letters, {
          y: 0,
          opacity: 1,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "power2.out"
        })
        break
        
      case 'wave':
        // Wave effect - letters appear sequentially from bottom
        window.gsap.set(letters, { 
          y: 50, 
          opacity: 0,
          rotationX: -90
        })
        
        window.gsap.to(letters, {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "back.out(1.7)",
          transformOrigin: "center bottom"
        })
        break
        
      case 'typewriter':
        // Typewriter effect - letters appear one by one
        window.gsap.set(letters, { 
          opacity: 0,
          scaleX: 0
        })
        
        window.gsap.to(letters, {
          opacity: 1,
          scaleX: 1,
          duration: 0.1,
          stagger: 0.03,
          delay: delay,
          ease: "power2.out",
          transformOrigin: "left center"
        })
        break
        
      case 'falling':
        // Falling letters - drop in from above
        window.gsap.set(letters, { 
          y: -100, 
          opacity: 0,
          rotation: () => Math.random() * 20 - 10
        })
        
        window.gsap.to(letters, {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "bounce.out"
        })
        break
        
      case 'rotating':
        // Rotating letters - each letter rotates in from different angles
        window.gsap.set(letters, { 
          opacity: 0,
          scale: 0,
          rotation: () => Math.random() * 360
        })
        
        window.gsap.to(letters, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "elastic.out(1, 0.5)"
        })
        break
        
      case 'slide':
        // Slide in from left
        window.gsap.set(letters, { 
          x: -50, 
          opacity: 0
        })
        
        window.gsap.to(letters, {
          x: 0,
          opacity: 1,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "power3.out"
        })
        break
        
      default:
        // Default fade in
        window.gsap.set(letters, { opacity: 0 })
        window.gsap.to(letters, {
          opacity: 1,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: "power2.out"
        })
    }
  }, [text, animationType, delay, duration, stagger])

  // Split text into individual letters while preserving spaces and line breaks
  const splitText = (text) => {
    if (animationType === 'mask-reveal-letters') {
      // For letter-by-letter mask reveal, split by lines first to prevent wrapping
      const lines = text.split('\n')
      return lines.map((line, lineIndex) => (
        <div 
          key={lineIndex}
          style={{ 
            whiteSpace: 'nowrap',
            display: 'block'
          }}
        >
          {line.split('').map((char, charIndex) => {
            if (char === ' ') {
              return <span key={`${lineIndex}-${charIndex}`} className="letter space">&nbsp;</span>
            }
            return (
              <span 
                key={`${lineIndex}-${charIndex}`} 
                className="masked-letter-container"
                style={{ 
                  display: 'inline-block',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <span 
                  className="masked-letter"
                  style={{ 
                    display: 'inline-block',
                    willChange: 'transform',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    letterSpacing: '-0.04em'
                  }}
                >
                  {char}
                </span>
              </span>
            )
          })}
        </div>
      ))
    }
    
    if (animationType === 'mask-reveal') {
      // For mask reveal, create lines with proper masking structure
      const lines = text.split('\n')
      return lines.map((line, lineIndex) => (
        <div 
          key={lineIndex} 
          className="text-line-container"
          style={{ 
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div 
            className="text-line"
            style={{ 
              display: 'inline-block',
              willChange: 'transform',
              textTransform: 'uppercase',
              fontWeight: '600',
              letterSpacing: '-0.04em'
            }}
          >
            {line}
          </div>
        </div>
      ))
    }
    
    // Default letter-by-letter splitting
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} className="letter space">&nbsp;</span>
      }
      if (char === '\n') {
        return <br key={index} />
      }
      return (
        <span 
          key={index} 
          className="letter inline-block" 
          style={{ display: 'inline-block' }}
        >
          {char}
        </span>
      )
    })
  }

  return (
    <div ref={containerRef} className={className}>
      {splitText(text)}
    </div>
  )
}

/*

*/