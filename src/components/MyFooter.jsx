import Contacts from "./Contacts";
import Map from "./Map";

const MyFooter = () => {
  <div className="h-screen flex justify-between">
    <div className="bg-teal-800 w-[50%]">
      <Map />
    </div>
    <div className="bg-sky-800 w-[50%]">
      <Contacts />
    </div>
  </div>;
};

export default MyFooter;
