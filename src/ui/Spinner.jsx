import { BounceLoading } from 'respinner';

function Spinner({ color = '#8b0cd5', size = 8, count = 3, duration = 1 }) {
  return (
    <BounceLoading
      fill={color}
      size={size}
      count={count}
      duration={duration}
      className='place-self-center'
    />
  );
}

export default Spinner;
