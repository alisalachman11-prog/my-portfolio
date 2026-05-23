export default function LogoMark({ mark, className = '' }) {
  if (mark === 'asterisk') {
    return (
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 0v16M0 8h16M2.34 2.34l11.32 11.32M13.66 2.34L2.34 13.66" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }

  if (mark === 'triangle') {
    return (
      <svg
        className={className}
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 0L16 14H0L8 0z" />
      </svg>
    )
  }

  if (mark === 'wix') {
    return null
  }

  return null
}
