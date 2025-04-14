import CreateGuideForm from '../../_components/guides/CreateGuideForm';
import SectionHeading from '../../_components/ui/SectionHeading';

function Page() {
  return (
    <section className='w-screen h-screen bg-green-50'>
      <div className='flex flex-col items-center w-full max-w-site p-div'>
        <SectionHeading tag='h1'>Create a new city guide</SectionHeading>
        <CreateGuideForm />
      </div>
    </section>
  );
}

export default Page;
