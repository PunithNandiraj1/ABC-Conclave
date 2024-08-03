"use client"
import React, { useEffect } from 'react'

const TallyPopupButton = ({ href, label }) => {
  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script')
    script.src = "https://tally.so/widgets/embed.js"
    script.async = true
    document.body.appendChild(script)

    // Cleanup
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <button 
      data-tally-open={href} 
      data-tally-emoji-text="👋" 
      data-tally-emoji-animation="wave"
      className="text-lg font-bold text-white hover:text-purple-600"
    >
      {label}
    </button>
  )
}

export default TallyPopupButton