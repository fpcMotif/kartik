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
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      <div className="loader text-center text-lg sm:text-4xl">
        <style jsx>{`
          .loader:before {
            content: "${text}";
          }
        `}</style>
      </div>
    </div>
  )
}
