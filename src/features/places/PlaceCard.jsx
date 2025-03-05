import Icon from '../../common/Icon';
import ButtonIcon from '../../ui/ButtonIcon';
import ButtonTag from '../../ui/ButtonTag';

function PlaceCard() {
  return (
    <div className='shadow-md shadow-violet-400 rounded-md'>
      {/* Header */}
      <div className='flex items-center justify-between bg-violet-500 rounded-t-md pr-4'>
        <div className='px-4 pb-2 pt-1'>
          <h3>Place name</h3>

          <div className='flex gap-1'>
            <h4 className='text-sm font-bold text-violet-950'>Area:</h4>
            <p className='text-sm text-violet-300'>Woodstock</p>
          </div>
        </div>

        <div className='flex gap-1'>
          <ButtonIcon title='View on Google Maps'>
            <Icon name='location_on' />
          </ButtonIcon>
          <ButtonIcon title='View on Google Maps'>
            <Icon name='star' />
          </ButtonIcon>
        </div>
      </div>

      <div className='h-fit flex gap-4 pr-6 text-justify text-sm'>
        <img
          className='w-1/5 aspect-square object-cover rounded-bl-md'
          src='https://wiutvoyxphqqwolipruf.supabase.co/storage/v1/object/public/places-images//proper-pint.jpg'
          alt='Beer and handbag on a table with a dog in the background.'
          loading='lazy'
        />

        <div className='flex flex-col gap-4 pt-4 pb-3 place-content-between'>
          <div className='flex gap-2'>
            <ButtonTag className='pt-[2px] px-[3px] text-sm' size='sm'>
              🍺Beer
            </ButtonTag>
            <ButtonTag className='pt-[2px] px-[3px] text-sm' size='sm'>
              🍎Cider
            </ButtonTag>
            <ButtonTag className='pt-[2px] px-[3px] text-sm' size='sm'>
              🚶‍♀️Local
            </ButtonTag>
          </div>

          {/* Description */}
          <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Tags */}
          <div className='flex py-1 px-2 gap-2 bg-violet-800/30 items-center text-sm rounded-md'>
            <h4 className='font-bold text-violet-400'>Tags:</h4>
            <ButtonTag>Bar</ButtonTag>
            <ButtonTag>Taproom</ButtonTag>
            <ButtonTag>Local</ButtonTag>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
