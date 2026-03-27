import React from 'react'

export const SvgEmptyStar = ({ className = "w-4 h-4 text-gray-300" }) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 22 20"
    >
      <path d="M10.94 1.25l2.52 5.11 5.64.82-4.08 3.98.96 5.61-5.04-2.65-5.04 2.65.96-5.61-4.08-3.98 5.64-.82 2.52-5.11z" />
    </svg>
  )
}