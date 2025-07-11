export function Select({ children, ...props }) {
  return (
    <select className="block w-full rounded border border-gray-300 p-2 text-sm" {...props}>
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
