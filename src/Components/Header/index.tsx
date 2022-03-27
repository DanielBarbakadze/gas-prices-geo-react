import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Header = () => {
  return (
    <div className="w-full bg-white-0 shadow-100 mb-32 py-12">
      <Container className="flex justify-between items-center">
        <h1 className="text-center font-600 text-12 md:text-18 m-0">
          საწვავის ფასები
        </h1>

        <div>
          <span className="text-center font-600 text-12 md:text-16 m-0 pr-8 md:pr-16 ">
            <Link to={"/"} className="no-underline">
              მიმდინარე ფასები
            </Link>
          </span>

          <span className="text-center font-600 text-12 md:text-16 m-0">
            <Link to={"/graphs"} className="no-underline">
              ფასების ისტორია
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Header;
