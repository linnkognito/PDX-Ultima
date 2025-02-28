function ButtonTag({ children }) {
  return (
    <button className='text-xs rounded-md px-2 py-[1px] bg-violet-400/30 hover:bg-violet-300 cursor-pointer hover:text-violet-950 active:text-violet-950 active:bg-violet-200'>
      {children}
    </button>
  );
}

export default ButtonTag;
