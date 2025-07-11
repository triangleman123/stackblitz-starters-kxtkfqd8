export function Input({ className = "", ...props }) {
  return (
    <input
      className={`block w-full rounded border border-gray-300 p-2 text-sm shadow-sm ${className}`}
      {...props}
    />
  );
}
