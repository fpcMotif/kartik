'use client'

interface LoaderProps {
  text?: string
  className?: string
}

export const Loader = ({ 
  text = 'Loading',
  className = '' 
}: LoaderProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="loader" style={{ fontSize: '40px' }}>
        <style jsx>{`
          .loader:before {
            content: "${text}";
          }
        `}</style>
      </div>
    </div>
  )
}
