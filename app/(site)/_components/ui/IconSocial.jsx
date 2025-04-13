import { SocialIcon } from 'react-social-icons';

function IconSocial({ href, network }) {
  return (
    <SocialIcon
      url={href}
      network={network}
      radius='10%'
      style={{ width: 32, height: 32, cursor: 'pointer', opacity: '85%' }}
      aria-label={`Visit our ${network} profile`}
      role='link'
      target='_blank'
      rel='noopener noreferrer'
      title={`Visit our ${network} profile`}
    />
  );
}

export default IconSocial;
