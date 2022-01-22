import { Link } from "react-router-dom";
import "./word_navbar.css";
import { WordNavbarData } from "../constants/word_navbar_data";

function WordNavbar(props: { word: string }) {
  const { word } = props;
  return (
    <nav className="word-navbar navbar-default">
      <ul className="word-navbar-ul navbar-nav">
        {WordNavbarData.map((item, index) => {
          return (
            <li key={index} className='word-navbar-li' data-hover={item.title}>
                <Link to={item.path(word)}>
                  {item.icon}
                </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default WordNavbar;
