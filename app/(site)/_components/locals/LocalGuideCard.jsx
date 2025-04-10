import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

function LocalGuideCard({ name, bio, favGuide, image }) {
  return (
    <div>
      {/* <Image src={image} /> */}
      <h2>{name}</h2>
      <p>{bio}</p>

      <Link href={favGuide}>
        <Button>{name}'s favorites</Button>
      </Link>
    </div>
  );
}

export default LocalGuideCard;
