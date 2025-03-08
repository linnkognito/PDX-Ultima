function SubContainer({ children, className = '', ...props }) {
  return (
    <div
      className={`${className} py-3 px-4 shadow-sm shadow-violet-400 rounded-md`}
      {...props}
    >
      {children}
    </div>
  );
}

export default SubContainer;
