import "./Style.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <nav>
        <div className="top-bar">
          {/* search slide not allowed */}
          <div className="input">
            <input
              type="text"
              className="search-inp"
              placeholder="məhsul axtar..."
            />{" "}
            <FiSearch className="icon search" />
          </div>

          {/* dropdown slide not allowed */}
          <DropdownButton id="dropdown-basic-button" title="AZE">
            <Dropdown.Item href="#/action-1">AZ</Dropdown.Item>
            <Dropdown.Item href="#/action-2">RU</Dropdown.Item>
            <Dropdown.Item href="#/action-3">ENG</Dropdown.Item>
          </DropdownButton>

          <div className="sosial-media-icons">
            <FaTelegram className="icon" />
            <FaFacebook className="icon" />
            <span className="linkedin">
              <FaLinkedinIn className="icon-linkedin" />
            </span>
            <span className="instagram">
              <FaInstagram className="icon-instagram" />
            </span>
          </div>
        </div>
        <div className="bottom-bar">
        <Link to="/"> <img src={logo} alt="logo" /></Link>

          <ul className="nav-links">
            <li>
              <Link to="/haqqimizda">Haqqımızda</Link>
            </li>
            <li>
              <Link to="aksiyalar">Aksiyalar</Link>
            </li>
            <li>
              <Link to="teklifler">Xüsusi təkliflər</Link>
            </li>
            <li>
              <Link to="sosial">Sosial məsuliyyət</Link>
            </li>
            <li>
              <Link to="dəyərlərimiz">Dəyərlərimiz</Link>
            </li>
            <li>
              <Link to="karyera">Karyera</Link>
            </li>
            <li>
              <Link to="əlaqə">Əlaqə</Link>
            </li>
            <li className="shop-btn">
              <Link to="market">
                <FiShoppingCart className="shop" />
                Online market
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
