function Cube({ children, className = '', width = '', ...props }) {
  return (
    <div className={`${className} ${width} p-div rounded-xl`} {...props}>
      {children}
    </div>
  );
}

export default Cube;
