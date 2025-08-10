interface VerticalDiagonalBordersProps {
  position?: 'left' | 'right' | 'both'
  className?: string
  width?: string
}

export default function VerticalDiagonalBorders({ 
  position = 'both', 
  className = 'text-neutral-300 dark:text-neutral-800',
  width = '50px'
}: VerticalDiagonalBordersProps) {
  const verticalBorderStyle: React.CSSProperties = {
    width: width,
    height: "100%",
    backgroundImage: "repeating-linear-gradient(315deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
    backgroundSize: "10px 10px",
  }

  return (
    <>
      {/* Left Vertical Border */}
      {(position === 'left' || position === 'both') && (
        <div
          style={{ ...verticalBorderStyle, borderRight: "1px solid" }}
          className={`absolute left-0 top-0 z-10 ${className}`}
        />
      )}
      
      {/* Right Vertical Border */}
      {(position === 'right' || position === 'both') && (
        <div
          style={{ ...verticalBorderStyle, borderLeft: "1px solid" }}
          className={`absolute right-0 top-0 z-10 ${className}`}
        />
      )}
    </>
  )
}
