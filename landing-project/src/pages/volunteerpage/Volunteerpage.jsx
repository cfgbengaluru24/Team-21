import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Volunteer from '../../components/volunteer/Volunteer';

const Volunteerpage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-blue-gray-100" >
        <Volunteer />
      </div>
      <Footer />
    </div>
  );
}

export default Volunteerpage;
