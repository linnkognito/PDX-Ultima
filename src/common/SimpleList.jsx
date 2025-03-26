import Icon from './Icon';
import ButtonIcon from '../ui/ButtonIcon';

function SimplePlaceList({ list, numbered = true }) {
  return (
    <ul className='flex flex-col m-4 border border-violet-500/20 rounded w-9/10 mx-auto'>
      {list?.length > 0 &&
        list.map((item, index) => (
          <li
            key={item.id}
            className='flex gap-2 items-center justify-between w-full px-4 py-2 odd:bg-violet-500/20 text-lg first:rounded-t last:rounded-b'
          >
            <div className='flex gap-2 items-center'>
              {numbered && (
                <span className='text-violet-400 text-xl'>{index}. </span>
              )}
              {item.name || item.title}
            </div>

            {/* Delete button */}
            <ButtonIcon title='Delete'>
              <Icon name='delete_forever' />
            </ButtonIcon>
          </li>
        ))}
    </ul>
  );
}

export default SimplePlaceList;
