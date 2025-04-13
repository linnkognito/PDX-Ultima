function Notepad({ children, className = '' }) {
  return (
    <div
      className={`min-h-1/2 bg-background notepad-bg rounded-xl shadow-standard ${className}`}
    >
      {children}
    </div>
  );
}

export default Notepad;
