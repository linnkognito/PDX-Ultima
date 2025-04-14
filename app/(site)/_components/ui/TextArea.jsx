function TextArea({ children, rows = '3', ...props }) {
  return (
    <textarea
      rows={rows}
      className='resize-y bg-background rounded-2xl border-2 border-primary text-heading placeholder:text-par/60 focus:outline-none focus:ring-2 focus:ring-background px-3 py-1'
      {...props}
    >
      {children}
    </textarea>
  );
}

export default TextArea;
