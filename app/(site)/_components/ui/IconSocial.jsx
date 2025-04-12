import { SocialIcon } from 'react-social-icons';

function IconSocial({ href, network }) {
  return (
    <SocialIcon
      url={href}
      network={network}
      radius='10%'
      style={{ width: 40, height: 40, cursor: 'pointer' }}
    />
  );
}

export default IconSocial;
