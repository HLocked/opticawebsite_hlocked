import MaskedParagraph from './MaskedParagraph.jsx'
import MaskedParagraphGroup from './MaskedParagraphGroup.jsx'

export default function MissionSection() {
  return (
    <section id="mission" className="relative themed-bg px-4 sm:px-12">
      <div className="px-0 sm:px-0 pt-0 pb-16 sm:pt-22 sm:pb-22 lg:pt-26 lg:pb-26 border-t border-b border-black/10 dark:border-white/10">
        <div className="grid grid-cols-1 gap-6 sm:gap-12 lg:grid-cols-[auto_1fr_1fr] lg:gap-16 lg:items-start">
          {/* Column 1 - Mission Label (auto-width) */}
          <div className="max-w-xl lg:max-w-none">
            <div className="sm:hidden border-t border-neutral-500/40 dark:border-white/20 mb-4"></div>
            <h2 className="text-2xl font-medium text-black dark:text-gray-300 tracking-wide uppercase" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Our Mission
            </h2>
          </div>

          {/* Column 2 - American Steel History */}
          <div>
            <MaskedParagraphGroup className="space-y-6" holdDelay={1.0} animationDuration={1.1} start="top 80%" end="bottom 40%" scrub={0.8}>
              <MaskedParagraph
                text={"There was a time when American steel was a global standard of strength. Our mills roared, our furnaces lit the skies, and U.S. Steel stood as a symbol of American ingenuity and power. From skyscrapers to railroads, bridges to ships, American metal carried the weight of a nation’s ambition."}
                className="text-base sm:text-lg text-black dark:text-gray-200 leading-relaxed font-monument-semi-mono"
                overlayType="blue"
              />
              
              <MaskedParagraph
                text={"But then we made a choice. We shipped our muscle overseas. We traded the pride of our workers for the false promise of cheaper labor. We allowed the heartbeat of our industry to grow faint, and with it, a piece of our sovereignty slipped away. That was our mistake. That is our regret."}
                className="text-base sm:text-lg text-black dark:text-gray-200 leading-relaxed font-monument-semi-mono"
                overlayType="flag"
              />
              
              <MaskedParagraph
                text={"But decline is not destiny. America has always been at its best when it chooses to lead. Today, we have the chance to launch a new industrial renaissance—one that brings production back home, modernizes our factories, and restores resilience to our supply chains."}
                className="text-base sm:text-lg text-black dark:text-gray-200 leading-relaxed font-monument-semi-mono"
                overlayType="flag"
              />
            </MaskedParagraphGroup>
          </div>

          {/* Column 3 - American Steel Future */}
          <div>
            <MaskedParagraphGroup className="space-y-6" holdDelay={1.0} animationDuration={1.1} start="top 80%" end="bottom 40%" scrub={0.8}>
              <MaskedParagraph
                text={"Steel built the America we know. It held up the bridges that connect our cities and the ships that carried our trade. In this century, it can do the same—carrying forward that tradition of strength into new industries, new frontiers, and new opportunities. The story of steel is not over; it is being written again, in our time."}
                className="text-base sm:text-lg text-black dark:text-gray-200 leading-relaxed font-monument-semi-mono"
                overlayType="flag"
              />
              
              <MaskedParagraph
                text={"We are on the cusp of a new industrial renaissance filled with possibilities. The possibility that this nation can once again create more than it consumes. The possibility that America's might can be forged, not imported. The possibility that our children will inherit not a memory of strength, but the living reality of it."}
                className="text-base sm:text-lg text-black dark:text-gray-200 leading-relaxed font-monument-semi-mono"
                overlayType="flag"
              />
              
              <MaskedParagraph
                text={"This is our call to build, to lead, and to forge a new American century."}
                className="text-base sm:text-lg text-black dark:text-gray-200 leading-relaxed font-monument-semi-mono"
                overlayType="flag"
              />
            </MaskedParagraphGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
