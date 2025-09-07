// components/Card.jsx
export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`
      bg-white rounded-xl shadow-lg p-6
      ${hover ? 'hover:shadow-xl transition-shadow' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}