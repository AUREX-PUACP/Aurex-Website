import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';


export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="pt-24 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}