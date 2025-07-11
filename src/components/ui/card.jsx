export function Card({ className = "", ...props }) {
  return <div className={`rounded-xl border bg-white text-black shadow ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}
