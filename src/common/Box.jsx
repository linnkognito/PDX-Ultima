function Box({ children, className = '' }) {
  return (
    <div
      className={`${className} shadow-sm shadow-violet-400 rounded-md py-4 px-6`}
    >
      {children}
    </div>
  );
}

export default Box;
