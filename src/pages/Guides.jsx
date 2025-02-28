import { useEffect } from 'react';
import { getGuides } from '../services/apiGuides';

function Guides() {
  useEffect(() => {
    getGuides().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>Guides</h2>
    </div>
  );
}

export default Guides;
