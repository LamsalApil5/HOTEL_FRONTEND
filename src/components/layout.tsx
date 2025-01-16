import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="">
      <Header />
        {children}
      <Footer />
      </main>
    </div>
  );
};

export default Layout;
