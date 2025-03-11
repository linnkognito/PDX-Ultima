function TagsContainer({ children }) {
  return (
    <div className='flex w-fit max-w-full flex-wrap py-1 px-2 gap-2 bg-violet-800/30 items-center text-sm rounded-md'>
      <h4 className='font-bold text-violet-400'>Tags:</h4>
      {children}
    </div>
  );
}

export default TagsContainer;
