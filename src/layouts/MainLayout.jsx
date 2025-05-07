import Navbar from '../components/common/Navbar';

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="container mx-auto px-4 py-6">{children}</main>
  </>
);

export default MainLayout;
