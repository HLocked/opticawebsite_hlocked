import AnimatedText from './AnimatedText.jsx'

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] themed-bg px-4 sm:px-6 pb-4 sm:pb-6">
      {/* Image Container with Gradient */}
      <div className="relative w-full h-full">
        <img 
          src="/imgs/hero-1.webp" 
          alt="Optica Industries" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay - Only on Image */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
          }}
        ></div>
      </div>
      
      {/* Overlay Text - Bottom Left */}
      <div className="absolute left-4 right-4 sm:left-6 sm:right-auto bottom-4 sm:bottom-12 max-w-full sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl p-3 sm:p-6">
        <AnimatedText 
          text="Rebuilding
American
Metal Supply"
          className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.94] sm:leading-[0.8] text-left"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          animationType="mask-reveal-letters"
          delay={0.5}
          duration={0.8}
          stagger={0.04}
        />
      </div>
    </section>
  )
}
