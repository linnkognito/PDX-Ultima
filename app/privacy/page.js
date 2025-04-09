import Link from 'next/link';

export const metadata = {
  title: 'Privacy',
};

function PrivacyPolicy() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> April 2025
      </p>

      <h2>What data we collect</h2>
      <p>
        Privacy is everything, which is why we only collect the data that’s
        absolutely necessary for the page to function.
      </p>
      <ul>
        <li>
          <strong>Username:</strong> This is what you enter at signup. It can be
          your real name or something totally made up for extra stealth.
        </li>
        <li>
          <strong>Email:</strong> Used only for login-related things like
          sending confirmation links, resetting passwords, and making sure it’s
          really you.
        </li>
        <li>
          <strong>Location (optional):</strong> If you choose to share it, we’ll
          use your current location to calculate the distance to nearby places.
          That’s it.
        </li>
      </ul>

      <h2>What we don’t collect</h2>
      <p>
        No trackers. No creepy background data. No selling your info to third
        parties. We’re here to help you explore Portland, not follow you around.
      </p>

      <h2>Cookies</h2>
      <p>
        We may use minimal cookies to keep you logged in and to remember stuff
        like your saved places. No cookie-based marketing or third-party ads. We
        hate that s*it.
      </p>

      <h2>Your rights</h2>
      <p>
        Want to permanently delete your account or data?{' '}
        {session ? (
          `Go ahead and{' '}
        ${(<Link href='/user/userId/delete'>nuke it</Link>)}`
        ) : (
          <Link href='/auth/login'>Log in to nuke it</Link>
        )}{' '}
        - no questions asked.
      </p>

      <h2>Contact</h2>
      <p>
        Have questions about this policy or your data? Feel free to reach out
        anytime at{' '}
        <Link href='mailto:hello@pdxultima.com'>hello@pdxultima.com</Link>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
