import { useSearchParams } from 'react-router-dom';

import ButtonIcon from './ButtonIcon';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(val) {
    searchParams.set('area', val);
    setSearchParams(searchParams);
  }

  return (
    <div className='flex py-3 px-3 gap-2 bg-violet-800/30 items-center text-sm rounded-md my-2'>
      <h4 className='font-bold text-lg tracking-wide text-violet-400 pr-1'>
        Filter:
      </h4>

      <ButtonIcon className='min-w-fit px-2' onClick={() => handleClick('all')}>
        Show all
      </ButtonIcon>
      <ButtonIcon onClick={() => handleClick('se')}>SE</ButtonIcon>
      <ButtonIcon onClick={() => handleClick('ne')}>NE</ButtonIcon>
      <ButtonIcon onClick={() => handleClick('sw')}>SW</ButtonIcon>
      <ButtonIcon onClick={() => handleClick('nw')}>NW</ButtonIcon>
    </div>
  );
}

export default Filter;
