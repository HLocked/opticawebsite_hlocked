import { useEffect, useRef } from 'react'

export default function MaskedParagraphGroup({
  children,
  className = '',
  holdDelay = 0.8,
  animationDuration = 1.1,
  start = 'top 85%',
  end = 'bottom 40%',
  scrub = 0.6,
  resetOnLeaveBack = true
}) {
  const groupRef = useRef(null)

  useEffect(() => {
    const container = groupRef.current
    if (!container || !window.gsap) return
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (ScrollTrigger && gsap.registerPlugin) {
      try { gsap.registerPlugin(ScrollTrigger) } catch (_e) {}
    }

    const overlayBars = container.querySelectorAll('.overlay-bar')
    if (!overlayBars.length) return

    gsap.set(overlayBars, { yPercent: 0, autoAlpha: 1 })

    const tl = gsap.timeline({
      scrollTrigger: ScrollTrigger ? {
        trigger: container,
        start,
        end,
        scrub,
        invalidateOnRefresh: true,
        onLeaveBack: resetOnLeaveBack ? () => gsap.set(overlayBars, { yPercent: 0, autoAlpha: 1 }) : undefined
      } : undefined
    })

    tl.to(overlayBars, { duration: holdDelay, yPercent: 0, autoAlpha: 1, ease: 'none', stagger: 0 })
      .to(overlayBars, { duration: animationDuration, yPercent: 105, autoAlpha: 0, ease: 'power3.inOut', stagger: 0 })

    return () => {
      if (tl && tl.kill) tl.kill()
    }
  }, [holdDelay, animationDuration, start, end, scrub, resetOnLeaveBack])

  return (
    <div ref={groupRef} className={className}>
      {children}
    </div>
  )
}


