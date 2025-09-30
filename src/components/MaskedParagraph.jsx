import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

/**
 * MaskedParagraph
 * Renders a paragraph with animated per-line overlay rectangles that slide downward to reveal text.
 * - overlayType "blue": all stripes are blue rectangles
 * - overlayType "flag": alternating red and white rectangles (flag-like)
 * Animation triggers on scroll into view (requires gsap + ScrollTrigger on window)
 */
export default function MaskedParagraph({
  text,
  className = '',
  overlayType = 'blue', // 'blue' | 'flag'
  blueColor = '#1E3A8A', // tailwind blue-800
  redColor = '#B91C1C', // tailwind red-700
  whiteColor = '#FFFFFF',
  animationDuration = 1.2,
  lineStagger = 0.06,
  holdDelay = 0.8,
  scrub = false,
  resetOnLeaveBack = true,
  scrollStart = 'top 85%',
  scrollEnd = 'top 40%'
}) {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const [lineRects, setLineRects] = useState([])

  // Render words wrapped in spans to measure lines precisely
  const words = useMemo(() => {
    // Split by spaces and keep order. We'll render spaces as separate text nodes
    return text.split(' ').map((word, index) => ({ word, key: `${index}` }))
  }, [text])

  useLayoutEffect(() => {
    const textElement = textRef.current
    const container = containerRef.current
    if (!textElement || !container) return

    const measure = () => {
      const range = document.createRange()
      range.selectNodeContents(textElement)
      const rects = Array.from(range.getClientRects())
      const containerRect = container.getBoundingClientRect()
      const fragments = rects
        .filter(r => r.width > 0 && r.height > 0)
        .map(r => ({
          top: r.top - containerRect.top,
          left: r.left - containerRect.left,
          right: r.right - containerRect.left,
          width: r.width,
          height: r.height
        }))

      // Merge fragments that belong to the same visual line
      const tolerance = 2 // px tolerance for grouping by top
      fragments.sort((a, b) => a.top - b.top)
      const merged = []
      for (const frag of fragments) {
        const last = merged[merged.length - 1]
        if (last && Math.abs(last.top - frag.top) <= tolerance) {
          // Extend the current line bounds
          last.left = Math.min(last.left, frag.left)
          last.right = Math.max(last.right, frag.right)
          last.width = last.right - last.left
          last.height = Math.max(last.height, frag.height)
        } else {
          merged.push({
            top: frag.top,
            left: frag.left,
            right: frag.right,
            width: frag.width,
            height: frag.height
          })
        }
      }

      setLineRects(merged)
    }

    measure()

    const ro = new ResizeObserver(() => measure())
    try { ro.observe(textElement) } catch (_e) {}
    window.addEventListener('resize', measure)

    return () => {
      try { ro.disconnect() } catch (_e) {}
      window.removeEventListener('resize', measure)
    }
  }, [text])

  useEffect(() => {
    const container = containerRef.current
    if (!container || lineRects.length === 0) return

    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (!gsap) return

    if (ScrollTrigger && gsap.registerPlugin) {
      try { gsap.registerPlugin(ScrollTrigger) } catch (_e) {}
    }

    const overlayBars = container.querySelectorAll('.overlay-bar')
    gsap.set(overlayBars, { yPercent: 0, autoAlpha: 1 })

    const tl = gsap.timeline({
      scrollTrigger: ScrollTrigger ? {
        trigger: container,
        start: scrollStart,
        end: scrollEnd,
        scrub: scrub ? 0.6 : false,
        toggleActions: scrub ? undefined : 'play none none reverse',
        invalidateOnRefresh: true,
        onLeaveBack: resetOnLeaveBack ? () => gsap.set(overlayBars, { yPercent: 0, autoAlpha: 1 }) : undefined
      } : undefined
    })

    // Hold phase (no visual change) to let colors be visible
    tl.to(overlayBars, { duration: holdDelay, yPercent: 0, autoAlpha: 1, ease: 'none', stagger: 0 })
      // Reveal phase
      .to(overlayBars, { duration: animationDuration, yPercent: 105, autoAlpha: 0, ease: 'power3.inOut', stagger: 0 })

    return () => {
      if (tl && tl.kill) tl.kill()
    }
  }, [lineRects, animationDuration, holdDelay, scrub, scrollStart, scrollEnd])

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <p ref={textRef} className={className} style={{ whiteSpace: 'normal', margin: 0 }}>
        {words.map(({ word, key }, i) => (
          <span key={`n-${key}`} data-word>{word}{i < words.length - 1 ? ' ' : ''}</span>
        ))}
      </p>

      {/* Overlay lines */}
      <div className="pointer-events-none absolute inset-0">
        {lineRects.map((rect, index) => {
          let backgroundColor = blueColor
          if (overlayType === 'flag') {
            backgroundColor = index % 2 === 0 ? redColor : whiteColor
          }
          return (
            <div
              key={index}
              className="overlay-line"
              style={{
                position: 'absolute',
                top: `${rect.top}px`,
                left: `${Math.max(0, rect.left - 10)}px`,
                width: `${rect.width + 20}px`,
                height: `${rect.height}px`,
                overflow: 'hidden'
              }}
            >
              <div
                className="overlay-bar"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor,
                  willChange: 'transform, opacity'
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}


