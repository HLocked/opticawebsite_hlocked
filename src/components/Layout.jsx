import { Link, Outlet } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import AnimatedLogo from './AnimatedLogo'

function Header({ toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 themed-bg backdrop-blur">
      <div id="site-header" className="px-4 sm:px-6 h-16 flex items-center relative">
        {/* Left: Text Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo/optica-text.svg" alt="Optica Industries" className="h-6" />
            <span className="sr-only">Home</span>
          </Link>
        </div>

        {/* Center: Icon Logo - Absolutely centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Link to="/" className="flex items-center">
            <AnimatedLogo className="h-8 w-8" />
            <span className="sr-only">Home</span>
          </Link>
        </div>

        {/* Right: Theme Toggle Button */}
        <div className="ml-auto">
          <button
            onClick={toggleTheme}
            className="flex flex-col justify-center items-center w-8 h-8 relative"
            aria-label="Toggle theme"
            title="Toggle dark/light mode"
          >
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline mb-[2px] themed-text">
              <path d="M0 0H15V1H0V0Z" fill="currentColor"></path>
              <path d="M0 0H6.66667V5H0V0Z" fill="currentColor"></path>
              <path d="M0 8H15V9H0V8Z" fill="currentColor"></path>
              <path d="M0 2H15V3H0V2Z" fill="currentColor"></path>
              <path d="M0 4H15V5H0V4Z" fill="currentColor"></path>
              <path d="M0 6H15V7H0V6Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}


function Footer() {
  const footerRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const footerEl = footerRef.current
    const glowEl = glowRef.current
    if (!footerEl || !glowEl) return

    let rafId = 0
    let latestX = 0
    let latestY = 0
    const handleMove = (e) => {
      const rect = footerEl.getBoundingClientRect()
      // Use absolute offset within footer for matrix transform to mirror snippet
      latestX = e.clientX - rect.left
      latestY = e.clientY - rect.top
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          // Apply !important to override the CSS rule injected for SSR position
          glowEl.style.setProperty('transform', `matrix(1, 0, 0, 1, ${latestX.toFixed(3)}, ${latestY.toFixed(3)})`, 'important')
          rafId = 0
        })
      }
    }

    footerEl.addEventListener('mousemove', handleMove)
    return () => {
      footerEl.removeEventListener('mousemove', handleMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const layerStyles = {
    base: 'absolute inset-0 bg-no-repeat opacity-100',
  }

  const layer5 = {
    backgroundImage:
      "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 4109 1015.002' overflow='visible'><path d='M 1223.782 168.41 L 1178.365 176.666 L 0 666.624 L 0 1015.002 L 4109 1015.002 L 4109 666.624 L 2395.54 189.049 L 2346.82 176.666 C 2346.576 177.628 2289.369 161.47 2251.032 150.661 L 1890.721 16.351 C 1814.579 -5.117 1730.445 -5.456 1653.989 15.397 L 1291.907 150.661 C 1254.569 160.845 1222.944 167.572 1223.782 168.41 Z' fill='rgb(255,237,232)'></path></svg>')",
    backgroundSize: '100% 100%',
    imageRendering: 'pixelated',
  }
  const layer4 = {
    backgroundImage:
      "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 4109 1003.444' overflow='visible'><path d='M 1186.622 175.427 L 1131.296 188.223 L 0 666.624 L 0 1003.444 L 4109 1003.444 L 4109 666.624 L 2371.18 175.427 L 2371.257 175.427 C 2330.21 175.427 2289.511 170.139 2251.174 159.329 L 1890.721 16.351 C 1814.579 -5.117 1730.445 -5.456 1653.989 15.397 L 1274.393 160.155 C 1237.055 170.339 1187.275 174.775 1186.622 175.427 Z' fill='rgb(255,228,139)'></path></svg>')",
    backgroundSize: '100% 100%',
    imageRendering: 'pixelated',
  }
  const layer3 = {
    backgroundImage:
      "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 4109 963.818' overflow='visible'><path d='M 1228.323 167.172 L 1178.365 175.427 L 0 666.624 L 0 963.818 L 4109 963.818 L 4109 666.624 L 2371.18 175.427 L 2371.256 175.427 C 2330.21 175.427 2289.51 170.139 2251.173 159.329 L 1890.721 16.351 C 1814.579 -5.117 1730.445 -5.456 1653.989 15.397 L 1283.65 152.725 C 1246.312 162.909 1226.786 167.312 1228.323 167.172 Z' fill='rgb(135,187,199)'></path></svg>')",
    backgroundSize: '100% 100%',
    imageRendering: 'pixelated',
  }
  const layer2 = {
    backgroundImage:
      "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 4109 880.439' overflow='visible'><path d='M 1256.399 122.593 L 1256.399 122.593 L 0 621.219 L 0 880.439 L 4109 880.439 L 4109 621.219 L 2483.071 177.078 L 2483.071 177.078 C 2451.781 177.078 2293.854 135.922 2263.611 130.435 L 1814.203 8.265 C 1754.419 -2.581 1691.619 -2.755 1631.709 7.76 L 1256.399 122.593 C 1227.041 127.745 1286.709 122.593 1256.399 122.593 Z' fill='rgb(9,42,206)'></path></svg>')",
    backgroundSize: '100% 100%',
    imageRendering: 'pixelated',
  }
  const layer1 = {
    backgroundImage:
      "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 4109 822.651' overflow='visible'><path d='M 1178.396 131.674 L 1178.365 131.674 L 0 622.457 L 0 822.651 L 4109 822.651 L 4109 622.457 L 2371.18 141.167 L 2269.611 124.657 C 2242.489 124.657 2295.85 129.45 2269.512 124.657 L 1901.321 7.215 C 1849.291 -2.252 1794.9 -2.405 1742.774 6.77 L 1534.269 47.469 C 1508.714 51.967 1539.056 51.191 1178.396 131.674 Z' fill='rgb(0,0,0)'></path></svg>')",
    backgroundSize: '100% 100%',
    imageRendering: 'pixelated',
  }

  return (
    <footer ref={footerRef} className="relative overflow-hidden text-white" style={{backgroundColor: '#1A1A1A'}}>
      {/* Inline symbol for logotype to mirror <use href="#..."> structure */}
      <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <symbol id="svg2051644221_28926" viewBox="0 0 665 148">
          <path d="M203.282 39.388C203.282 41.728 203.542 44.016 204.062 46.252C204.634 48.436 205.518 50.412 206.714 52.18C207.91 53.948 209.47 55.378 211.394 56.47C213.318 57.51 215.658 58.03 218.414 58.03C221.17 58.03 223.51 57.51 225.434 56.47C227.358 55.378 228.918 53.948 230.114 52.18C231.31 50.412 232.168 48.436 232.688 46.252C233.26 44.016 233.546 41.728 233.546 39.388C233.546 36.944 233.26 34.578 232.688 32.29C232.168 30.002 231.31 27.974 230.114 26.206C228.918 24.386 227.358 22.956 225.434 21.916C223.51 20.824 221.17 20.278 218.414 20.278C215.658 20.278 213.318 20.824 211.394 21.916C209.47 22.956 207.91 24.386 206.714 26.206C205.518 27.974 204.634 30.002 204.062 32.29C203.542 34.578 203.282 36.944 203.282 39.388ZM191.036 39.388C191.036 35.228 191.66 31.38 192.908 27.844C194.156 24.256 195.95 21.136 198.29 18.484C200.63 15.832 203.49 13.752 206.87 12.244C210.302 10.736 214.15 9.982 218.414 9.982C222.73 9.982 226.578 10.736 229.958 12.244C233.338 13.752 236.198 15.832 238.538 18.484C240.878 21.136 242.672 24.256 243.92 27.844C245.168 31.38 245.792 35.228 245.792 39.388C245.792 43.444 245.168 47.24 243.92 50.776C242.672 54.26 240.878 57.302 238.538 59.902C236.198 62.502 233.338 64.556 229.958 66.064C226.578 67.52 222.73 68.248 218.414 68.248C214.15 68.248 210.302 67.52 206.87 66.064C203.49 64.556 200.63 62.502 198.29 59.902C195.95 57.302 194.156 54.26 192.908 50.776C191.66 47.24 191.036 43.444 191.036 39.388ZM266.409 37.516H275.925C277.329 37.516 278.681 37.412 279.981 37.204C281.281 36.996 282.425 36.606 283.413 36.034C284.401 35.41 285.181 34.552 285.753 33.46C286.377 32.368 286.689 30.938 286.689 29.17C286.689 27.402 286.377 25.972 285.753 24.88C285.181 23.788 284.401 22.956 283.413 22.384C282.425 21.76 281.281 21.344 279.981 21.136C278.681 20.928 277.329 20.824 275.925 20.824H266.409V37.516ZM254.163 11.308H279.279C282.763 11.308 285.727 11.828 288.171 12.868C290.615 13.856 292.591 15.182 294.099 16.846C295.659 18.51 296.777 20.408 297.453 22.54C298.181 24.672 298.545 26.882 298.545 29.17C298.545 31.406 298.181 33.616 297.453 35.8C296.777 37.932 295.659 39.83 294.099 41.494C292.591 43.158 290.615 44.51 288.171 45.55C285.727 46.538 282.763 47.032 279.279 47.032H266.409V67H254.163V11.308ZM318.513 21.604H301.821V11.308H347.451V21.604H330.759V67H318.513V21.604ZM353.872 11.308H366.118V67H353.872V11.308ZM414.004 30.028C413.796 28.624 413.328 27.35 412.6 26.206C411.872 25.01 410.962 23.97 409.87 23.086C408.778 22.202 407.53 21.526 406.126 21.058C404.774 20.538 403.344 20.278 401.836 20.278C399.08 20.278 396.74 20.824 394.816 21.916C392.892 22.956 391.332 24.386 390.136 26.206C388.94 27.974 388.056 30.002 387.484 32.29C386.964 34.578 386.704 36.944 386.704 39.388C386.704 41.728 386.964 44.016 387.484 46.252C388.056 48.436 388.94 50.412 390.136 52.18C391.332 53.948 392.892 55.378 394.816 56.47C396.74 57.51 399.08 58.03 401.836 58.03C405.58 58.03 408.492 56.886 410.572 54.598C412.704 52.31 414.004 49.294 414.472 45.55H426.328C426.016 49.034 425.21 52.18 423.91 54.988C422.61 57.796 420.894 60.188 418.762 62.164C416.63 64.14 414.134 65.648 411.274 66.688C408.414 67.728 405.268 68.248 401.836 68.248C397.572 68.248 393.724 67.52 390.292 66.064C386.912 64.556 384.052 62.502 381.712 59.902C379.372 57.302 377.578 54.26 376.33 50.776C375.082 47.24 374.458 43.444 374.458 39.388C374.458 35.228 375.082 31.38 376.33 27.844C377.578 24.256 379.372 21.136 381.712 18.484C384.052 15.832 386.912 13.752 390.292 12.244C393.724 10.736 397.572 9.982 401.836 9.982C404.904 9.982 407.79 10.424 410.494 11.308C413.25 12.192 415.694 13.492 417.826 15.208C420.01 16.872 421.804 18.952 423.208 21.448C424.612 23.944 425.496 26.804 425.86 30.028H414.004Z" fill="#ffffff" />
          <path d="M72.3311 65.3369L96.5293 84.5801L82.25 70.375L161 9.04004V45.3779L113.426 82.4326L132.354 85.3389L147.968 90.0615L151.494 101.988L144.694 97.7646H136.131L123.898 105.503L123.918 105.519L121.968 106.725L119.56 108.249L119.537 108.229L99.5537 120.596L124.754 141H99.5537L84.3105 129.144L68.1152 141H23.8164L65.7334 113.473L0 64.0859V9L72.3311 65.3369Z" fill="#ffffff" />
        </symbol>
      </svg>
      {/* Cursor glow effect */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div
          ref={glowRef}
          data-followcursor="MPSZpwtdCSCTj"
          className="relative w-[1200px] h-[350px]"
          style={{ filter: 'blur(55px)', transition: 'transform 100ms linear', willChange: 'transform', opacity: 1 }}
        >
          <div className={`${layerStyles.base}`} style={layer5}></div>
          <div className={`${layerStyles.base}`} style={layer4}></div>
          <div className={`${layerStyles.base}`} style={layer3}></div>
          <div className={`${layerStyles.base}`} style={layer2}></div>
          <div className={`${layerStyles.base}`} style={layer1}></div>
          <div className="framer-2rnksy-container" style={{ opacity: 1 }}>
            <div>
              <style>{`[data-followcursor="MPSZpwtdCSCTj"] { transform: translate(0px, 0px) matrix(1, 0, 0, 1, 411.5, 177.639) !important; }`}</style>
            </div>
        </div>
        </div>
        </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Left container */}
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <h4
            className="framer-text hidden sm:block"
            style={{ color: '#ffffff', fontSize: '24px', fontWeight: 400 }}
          >
            Rebuilding American Metal Supply
          </h4>
          <div className="w-full flex justify-center sm:justify-start">
            <img
              src="/logo/optica-icon.svg"
              alt="Optica Industries icon"
              className="w-14 h-14 sm:hidden"
              style={{ filter: 'brightness(0) invert(1)' }}
              loading="lazy"
              decoding="async"
            />
            <img
              src="/logo/optica.svg"
              alt="Optica Industries"
              className="hidden sm:block w-full max-w-[400px] h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Right container */}
        <div className="flex flex-col items-center sm:items-end w-full justify-between h-full gap-4">
          <p className="text-white text-center sm:text-right text-lg sm:text-2xl">
            Interested in working with us? Send us an email at sam[at]optica.industries
          </p>
          <p className="text-white text-center sm:text-right text-xs sm:text-base">© 2025 Optica Industries</p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-full themed-bg">
      <Header toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
