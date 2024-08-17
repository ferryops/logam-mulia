export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center w-full h-screen gap-1">
      <div className="text-red-500">Something went wrong or</div>
      <div className="text-red-500">{message}</div>
    </div>
  );
}
