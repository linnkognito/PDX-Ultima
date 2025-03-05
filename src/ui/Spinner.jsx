import { BounceLoading } from 'respinner';

function Spinner({ color = '#8b0cd5', size = 8, count = 3, duration = 0.8 }) {
  return (
    <BounceLoading fill={color} size={size} count={count} duration={duration} />
  );
}

export default Spinner;
