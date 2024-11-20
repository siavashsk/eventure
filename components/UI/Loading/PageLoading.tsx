const PageLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="h-10 w-10 rounded-full bg-indigo-500"></div>
        <div className="absolute h-10 w-10 animate-ping rounded-full bg-indigo-500"></div>
        <div className="absolute h-10 w-10 animate-pulse rounded-full bg-indigo-500"></div>
      </div>
    </div>
  );
};

export default PageLoading;
