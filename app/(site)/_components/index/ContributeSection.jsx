import Link from 'next/link';
import Button from '../ui/Button';

function ContributeSection() {
  return (
    <section aria-labelledby='contribute-heading'>
      <h2 id='contribute-heading'>So you think you know Portland?</h2>
      <p>
        If you have what it takes &dash; charm, whit and streetsmart &dash;
        we&apos;d love to have you as a local guide.
      </p>
      <Link href='/contact/contribute'>
        <Button>Contact us</Button>
      </Link>
    </section>
  );
}

export default ContributeSection;
