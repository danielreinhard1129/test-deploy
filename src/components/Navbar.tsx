import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex items-center justify-between bg-[#1b1b1b] p-4 text-white">
        <h1>Logo</h1>
        <h1 className="hidden md:block">Profile</h1>
        <div className="md:hidden">
          <HiMenu size="20px" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
