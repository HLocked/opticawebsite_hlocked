import { useState, useEffect } from 'react'

export default function AnimatedLogo({ className = "" }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative ${className} text-black dark:text-white`}>
      <svg 
        width="161" 
        height="132" 
        viewBox="0 0 161 132" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main logo path with drawing animation */}
        <path 
          ref={(el) => {
            if (el) {
              const pathLength = el.getTotalLength();
              // Set up the dash array to match path length
              el.style.strokeDasharray = `${pathLength}`;
              
              if (isVisible) {
                // Start with path completely hidden
                el.style.strokeDashoffset = `${pathLength}`;
                // Force a reflow
                el.getBoundingClientRect();
                // Animate to reveal the path
                el.style.transition = 'stroke-dashoffset 2.5s ease-out';
                el.style.strokeDashoffset = '0';
              } else {
                // Reset to hidden state
                el.style.strokeDashoffset = `${pathLength}`;
                el.style.transition = 'none';
              }
            }
          }}
          d="M80.5251 62.7199L161 0.0398822V36.3782L113.425 73.4325L132.353 76.3392L147.968 81.0611L151.494 92.9887L144.694 88.7649H136.131L123.898 96.503L123.918 96.5187L121.968 97.7245L119.559 99.2493L119.537 99.2289L99.5533 111.596L124.754 132H99.5533L84.3106 120.144L68.1154 132H23.8166L65.7337 104.473L0 55.0857V0L80.5251 62.7199Z" 
          fill="none"
          stroke="currentColor"
          className="text-black dark:text-white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Fill appears after the stroke is drawn */}
        <path 
          d="M80.5251 62.7199L161 0.0398822V36.3782L113.425 73.4325L132.353 76.3392L147.968 81.0611L151.494 92.9887L144.694 88.7649H136.131L123.898 96.503L123.918 96.5187L121.968 97.7245L119.559 99.2493L119.537 99.2289L99.5533 111.596L124.754 132H99.5533L84.3106 120.144L68.1154 132H23.8166L65.7337 104.473L0 55.0857V0L80.5251 62.7199Z" 
          fill="currentColor"
          className="text-black dark:text-white"
          stroke="none"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease-out',
            transitionDelay: '2s'
          }}
        />
      </svg>
    </div>
  )
}
