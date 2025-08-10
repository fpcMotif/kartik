interface HorizontalDiagonalBordersProps {
  position?: 'top' | 'bottom' | 'both'
  className?: string
  height?: string
}

export default function HorizontalDiagonalBorders({ 
  position = 'both', 
  className = 'text-neutral-300 dark:text-neutral-800',
  height = '30px' 
}: HorizontalDiagonalBordersProps) {
  const horizontalBorderStyle: React.CSSProperties = {
    height: height,
    width: "100%",
    backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
    backgroundSize: "10px 10px",
  }

  return (
    <>
      {/* Top Horizontal Border */}
      {(position === 'top' || position === 'both') && (
        <div
          style={{ ...horizontalBorderStyle, borderBottom: "1px solid" }}
          className={`absolute top-0 left-0 z-10 ${className}`}
        />
      )}
      
      {/* Bottom Horizontal Border */}
      {(position === 'bottom' || position === 'both') && (
        <div
          style={{ ...horizontalBorderStyle, borderTop: "1px solid" }}
          className={`absolute bottom-0 left-0 z-10 ${className}`}
        />
      )}
    </>
  )
}
