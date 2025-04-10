import Link from 'next/link';
import Button from '../ui/Button';

function SignupSection() {
  return (
    <section aria-labelledby='signup-heading'>
      <h2 id='signup-heading'>Build your bucket list</h2>
      <p>Create an account to start saving your favorite spots</p>
      <Link href='/auth/signup'>
        <Button>Signup</Button>
      </Link>
    </section>
  );
}

export default SignupSection;
