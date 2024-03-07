export default function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-300 h-32 w-full rounded-md"></div>
      <div className="bg-gray-300 h-6 w-3/4 rounded-md"></div>
      <div className="bg-gray-300 h-4 w-5/6 rounded-md"></div>
      <div className="bg-gray-300 h-4 w-2/3 rounded-md"></div>
    </div>
  );
}
