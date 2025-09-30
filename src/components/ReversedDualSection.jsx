export default function ReversedDualSection() {
  return (
    <section className="relative themed-bg px-4 sm:px-6 pb-4 sm:pb-6">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left Text Column */}
        <div className="relative hidden sm:block w-full h-[37.5vh] md:h-[37.5vh] order-2 md:order-1">
          <video
            src="/Aerial-right.mp4"
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Right Video */}
        <div className="relative w-full h-[37.5vh] md:h-[37.5vh] order-1 md:order-2">
          <video
            src="/Aerial.mp4"
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
