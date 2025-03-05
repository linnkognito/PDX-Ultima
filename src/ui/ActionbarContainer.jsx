function ActionbarContainer({ children, className = '' }) {
  return (
    <div
      className={`${className} flex flex-col flex-wrap md:flex-row py-3 pl-4 pr-6 gap-4 bg-violet-800/30 md:items-center text-sm rounded-md my-2`}
    >
      {children}
    </div>
  );
}

export default ActionbarContainer;
