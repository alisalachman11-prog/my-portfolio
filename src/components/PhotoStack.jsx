import { useEffect, useRef, useState } from 'react'

// A fanned deck of photos. Each image is positioned by its current slot;
// hovering advances the order so images rotate through the slots, which —
// with the transition on `transform` — reads as the deck shuffling.
//
// Slots are listed front-most first. Any images beyond the fan stack behind
// the centre on BACK_SLOT.
const SLOTS = [
  { x: 0, y: 0, rot: 0, z: 40, scale: 1 },       // centre, on top
  { x: 42, y: 8, rot: 8, z: 30, scale: 0.95 },   // right, tucked behind
  { x: -42, y: 8, rot: -8, z: 30, scale: 0.95 }, // left, tucked behind
]
const BACK_SLOT = { x: 0, y: 16, rot: 0, z: 10, scale: 0.9 }

const CYCLE_MS = 900

export default function PhotoStack({ images = [], className = '' }) {
  // `order` holds image indices; order[0] is the front card.
  const [order, setOrder] = useState(() => images.map((_, i) => i))
  const timer = useRef(null)

  const advance = () => setOrder((o) => [...o.slice(1), o[0]])

  function startCycling() {
    if (timer.current || images.length < 2) return
    advance() // immediate feedback the moment you hover/focus
    timer.current = setInterval(advance, CYCLE_MS)
  }

  function stopCycling() {
    clearInterval(timer.current)
    timer.current = null
  }

  // Clean up the interval if the component unmounts mid-cycle.
  useEffect(() => () => clearInterval(timer.current), [])

  if (images.length === 0) return null

  return (
    <div
      className={`relative flex h-[200px] items-center justify-center overflow-hidden rounded-xl bg-brand-muted ${className}`}
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
      onFocus={startCycling}
      onBlur={stopCycling}
      onClick={advance}
      tabIndex={0}
      role="img"
      aria-label="A few photos from my travels and hobbies"
    >
      {images.map((src, i) => {
        const slot = SLOTS[order.indexOf(i)] ?? BACK_SLOT
        return (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute h-[150px] w-[120px] rounded-lg object-cover shadow-md transition-all duration-500 ease-out select-none motion-reduce:transition-none"
            style={{
              transform: `translate(${slot.x}px, ${slot.y}px) rotate(${slot.rot}deg) scale(${slot.scale})`,
              zIndex: slot.z,
            }}
          />
        )
      })}
    </div>
  )
}
