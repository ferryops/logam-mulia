export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-red-500">Error: Something went wrong</div>
      <div className="text-red-500 text-sm">{message}</div>
    </div>
  );
}
