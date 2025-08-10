interface DiagonalBordersProps {
  position?: 'left' | 'right' | 'both' | 'top' | 'bottom' | 'horizontal'
  className?: string
}

export default function DiagonalBorders({ position = 'both', className = 'text-neutral-300 dark:text-neutral-600' }: DiagonalBordersProps) {
  const verticalBorderStyle: React.CSSProperties = {
    width: "50px",
    height: "100%",
    backgroundImage: "repeating-linear-gradient(315deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
    backgroundSize: "10px 10px",
  }

  const horizontalBorderStyle: React.CSSProperties = {
    height: "50px",
    width: "100%",
    backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
    backgroundSize: "10px 10px",
  }

  return (
    <>
      {/* Vertical Borders */}
      {(position === 'left' || position === 'both') && (
        <div
          style={{ ...verticalBorderStyle, borderRight: "1px solid" }}
          className={`absolute left-0 top-0 z-10 ${className}`}
        />
      )}
      {(position === 'right' || position === 'both') && (
        <div
          style={{ ...verticalBorderStyle, borderLeft: "1px solid" }}
          className={`absolute right-0 top-0 z-10 ${className}`}
        />
      )}
      
      {/* Horizontal Borders */}
      {(position === 'top' || position === 'horizontal') && (
        <div
          style={{ ...horizontalBorderStyle, borderBottom: "1px solid" }}
          className={`absolute top-0 left-0 z-10 ${className}`}
        />
      )}
      {(position === 'bottom' || position === 'horizontal') && (
        <div
          style={{ ...horizontalBorderStyle, borderTop: "1px solid" }}
          className={`absolute bottom-0 left-0 z-10 ${className}`}
        />
      )}
    </>
  )
}
