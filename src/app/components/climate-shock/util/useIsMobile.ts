import { useEffect, useState } from 'react'
const MOBILE_BREAKPOINT = 768
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

export default useIsMobile
