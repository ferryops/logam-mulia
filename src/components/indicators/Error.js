export default function Error({ message }) {
  return (
    <div class="flex items-center justify-center w-full h-screen">
      <div class="text-red-500">Error: Something went wrong</div>
      <div class="text-red-500 text-sm">{message}</div>
    </div>
  );
}
