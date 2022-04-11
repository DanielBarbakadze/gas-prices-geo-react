import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Header = () => {
  return (
    <div className="w-full bg-white-0 shadow-100 mb-32 py-12">
      <Container className="flex justify-between items-center">
        <Link to={"/"} className="no-underline">
          <div className="flex items-center">
            <img
              alt="icon"
              src="/gas-pump.png"
              className="h-[14px] md:h-[20px] w-[14px] md:w-[20px]"
            />

            <h1 className="text-center font-600 text-12 md:text-16 m-0 pl-8">
              საწვავის ფასები
            </h1>
          </div>
        </Link>

        <div>
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
