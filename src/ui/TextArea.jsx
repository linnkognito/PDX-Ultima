function TextArea({ ...props }) {
  return (
    <textarea
      {...props}
      rows='3'
      className='resize bg-violet-300 rounded-md shadow-sm shadow-violet-300 focus:bg-violet-200 focus:shadow-[0_0_6px_#ddd6fe] focus:shadow-violet-200 focus:scale-105 outline-0 text-violet-950 px-2 py-1 w-full md:w-[380px] animation-prep-200'
    />
  );
}

export default TextArea;
