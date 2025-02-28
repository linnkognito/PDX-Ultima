import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className='h-screen w-screen flex'>
      <Sidebar />
      <main className='w-full'>
        <div className='py-8 px-12 w-full'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
