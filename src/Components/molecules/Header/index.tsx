import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { IconChartPie, IconGasPump } from "../../atoms/Icons";

const Header = () => {
  return (
    <div className="pt-12 md:pt-0">
      <div className="hidden md:block w-full bg-white-0 shadow-100 mb-32 py-12">
        <Container className="flex justify-between items-center">
          <Link to={"/"} className="no-underline flex items-center">
            <IconGasPump />
            <h1 className="text-center font-600 text-12 md:text-16 m-0 pl-4">
              საწვავის ფასები
            </h1>
          </Link>

          <div>
            <span className="text-center font-600 text-12 md:text-16 m-0">
              <Link to={"/graphs"} className="no-underline flex items-center">
                <IconChartPie />
                <span className="pl-4">ფასების ისტორია</span>
              </Link>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
