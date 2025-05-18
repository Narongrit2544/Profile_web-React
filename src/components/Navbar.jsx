import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass =
    'relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300';

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://img5.pic.in.th/file/secure-sv1/pngwing.com5a7b9b359ed92934.png"
          alt="Logo"
          className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-sm"
        />
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? 'after:w-full text-blue-600 font-bold' : 'after:w-0 hover:after:w-full'}`
              }
            >
              Home
            </NavLink>
          </li>
         
          
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? 'after:w-full text-blue-600 font-bold' : 'after:w-0 hover:after:w-full'}`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? 'after:w-full text-blue-600 font-bold' : 'after:w-0 hover:after:w-full'}`
              }
            >
              Project
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? 'after:w-full text-blue-600 font-bold' : 'after:w-0 hover:after:w-full'}`
              }
            >
              Resume
            </NavLink>
          </li>

              <li>
            <NavLink
              to="/contract"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? 'after:w-full text-blue-600 font-bold' : 'after:w-0 hover:after:w-full'}`
              }
            >
              Contract
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
