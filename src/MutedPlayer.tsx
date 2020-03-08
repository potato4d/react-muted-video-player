import React, { useState, useRef, useLayoutEffect } from 'react'

export type MutedPlayerProps = JSX.IntrinsicElements['video']

export const MutedPlayer: React.FC<MutedPlayerProps> = props => {
  const [dispatched, setDispatched] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  useLayoutEffect(() => {
    if (dispatched) {
      return
    }
    if (!videoRef || !videoRef.current) {
      return
    }
    setDispatched(true)
    videoRef.current.setAttribute('muted', '1')
    videoRef.current.setAttribute('playsinline', '1')
    videoRef.current.setAttribute('autoplay', '1')
  }, [dispatched, setDispatched])

  return <video {...props} />
}
