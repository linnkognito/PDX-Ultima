import { useSearchParams } from 'react-router-dom';
import ButtonIcon from './ButtonIcon';

function Filter({ filter, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const curFilter = searchParams.get(filter) || options[0].value;

  function handleClick(val) {
    searchParams.set(filter, val);
    setSearchParams(searchParams);
  }

  return (
    <div className='flex gap-2'>
      <h3 className='font-bold text-lg tracking-wide text-violet-400 pr-1'>
        Filter:
      </h3>

      {options.map((op) => (
        <ButtonIcon
          key={op.value}
          bg={
            op.value === curFilter
              ? 'bg-violet-400 hover:bg-violet-300'
              : 'bg-violet-700 hover:bg-violet-400'
          }
          className={'min-w-fit px-2'}
          onClick={() => handleClick(op.value)}
        >
          {op.label}
        </ButtonIcon>
      ))}
    </div>
  );
}

export default Filter;
