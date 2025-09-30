export default function DualImageSection() {
  return (
    <section className="relative themed-bg px-4 sm:px-6 pt-0 sm:pt-6 thorin-section">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left Image */}
        <div className="relative w-full h-[37.5vh] md:h-[37.5vh]">
          <img
            src="/imgs/thorin-1.webp"
            alt="Thorin Platform"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-6 left-6 space-y-3 hidden sm:block">
            <p className="text-white/70 text-xs tracking-widest font-monument-semi-mono">01</p>
            <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              THORIN
            </h2>
          </div>
          <div className="absolute bottom-6 right-6 max-w-sm hidden sm:block">
            <p className="text-white/85 font-monument-semi-mono text-base leading-tight text-right">
              Thorin is a platform to solve the information asymmetry problem in scrap metal trade
            </p>
          </div>
        </div>

        {/* Right Text Column */}
        <div className="relative w-full h-[37.5vh] md:h-[37.5vh] themed-bg">
          <video
            src="/Aerial-left.mp4"
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  )
}
