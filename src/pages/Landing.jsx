import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <div className="container page"></div>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            architecto atque tempora, nisi laborum facilis assumenda voluptatem
            ratione dolores officia, enim nulla corrupti repudiandae nihil non
            unde, natus doloribus recusandae.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
