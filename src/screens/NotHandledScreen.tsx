function NotHandled() {
  return (
    <div className="text-primary flex justify-center items-center h-screen">
      <div className="md:w-2/3 sm:w-4/5 w-4/5">
        <h1 className="mb-4 text-xl md:text-xl font-bold text-gray-800">
          Screen Size Not Supported
        </h1>
        <p>
          We're sorry, but our website doesn't support the current screen size.
        </p>
      </div>
    </div>
  );
}

export default NotHandled;
