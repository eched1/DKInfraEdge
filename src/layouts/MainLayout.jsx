import Navbar from '../components/common/Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} DKInfraEdge LLC. All Rights Reserved.
      </footer>
    </div>
  );
}
