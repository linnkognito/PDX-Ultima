function Heading({ children, className = '' }) {
  return (
    <h2
      className={`${className} text-3xl font-bold tracking-wide pb-4 pl-2 border-b border-violet-300/30`}
    >
      {children}
    </h2>
  );
}

export default Heading;
