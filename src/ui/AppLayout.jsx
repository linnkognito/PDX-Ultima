import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className='min-h-screen w-screen flex'>
      <Sidebar />
      <main className='w-full h-screen overflow-y-auto'>
        <div className='py-8 px-12 w-full max-w-[1200px]'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
