import logo from "../assets/images/logo/logo.svg";
import list from "../assets/images/icons/list.svg";
function Header() {
  return (
    <header id="header" className="fixed left-0 w-full bg-transparent">
      <div className="container mx-auto">
        <nav className="border-b border-primary py-5 flex items-center justify-between">
          <div className="logo">
            <a href="/" className="text-primary">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="list_menu flex items-center">
            <div className="auth pe-4">
              <a href="/" className="text-primary pe-4 text-sm md:text-lg">
                Create Account
              </a>
              <a href="/" className="text-primary text-sm md:text-lg">
                Login
              </a>
            </div>
            <div className="menu border-primary border-s ps-4">
              <button type="button">
                <img src={list} alt="list" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
