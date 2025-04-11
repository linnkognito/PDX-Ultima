import { SocialIcon } from 'react-social-icons';

function IconSocial({ href, network }) {
  return (
    <a href={href} className='hover:cursor-pointer'>
      <SocialIcon
        network={network}
        radius='10%'
        style={{ width: 40, height: 40 }}
      />
    </a>
  );
}

export default IconSocial;
