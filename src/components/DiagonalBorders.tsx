import HorizontalDiagonalBorders from '@/components/HorizontalDiagonalBorders'
import VerticalDiagonalBorders from '@/components/VerticalDiagonalBorders'

interface DiagonalBordersProps {
  position?: 'left' | 'right' | 'both' | 'top' | 'bottom' | 'horizontal'
  className?: string
  width?: string
  height?: string
}

export default function DiagonalBorders({ 
  position = 'both', 
  className = 'text-neutral-300 dark:text-neutral-800',
  width = '50px',
  height = '30px'
}: DiagonalBordersProps) {
  
  // Handle horizontal positions
  if (position === 'horizontal') {
    return <HorizontalDiagonalBorders position="both" className={className} height={height} />
  }
  
  if (position === 'top') {
    return <HorizontalDiagonalBorders position="top" className={className} height={height} />
  }
  
  if (position === 'bottom') {
    return <HorizontalDiagonalBorders position="bottom" className={className} height={height} />
  }
  
  // Handle vertical positions (left, right, both)
  return <VerticalDiagonalBorders position={position} className={className} width={width} />
}
