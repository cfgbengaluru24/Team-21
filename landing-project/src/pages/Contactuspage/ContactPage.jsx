import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact/Contact';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-blue-gray-100" >
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
