import classNames from "classnames";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Col, Container } from "reactstrap";
import HamburgerMenu from "../../atoms/HamburgerMenu";

import { IconBars, IconChartPie, IconGasPump } from "../../atoms/Icons";

const MobileFooter = () => {
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);

  const FooterLinks = [
    {
      name: "Graphs",
      link: "/graphs",
      icon: IconChartPie,
    },
    {
      name: "Home",
      link: "/",
      icon: IconGasPump,
    },
  ];

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="md:hidden pt-48 md:pt-0 z-10">
        <div className="bg-gray-9 text-white fixed-bottom h-48 rounded-t-20">
          <Container className="flex items-center justify-center min-h-full">
            {FooterLinks.map(({ name, link, icon: IconComponent }) => (
              <Col xs="4" key={name}>
                <Link className="flex justify-center" to={link}>
                  <div
                    className={classNames(
                      link === location.pathname &&
                        "bg-gray-11 py-[6px] px-24 rounded-12"
                    )}
                  >
                    <IconComponent
                      className={classNames(
                        link === location.pathname
                          ? "text-yellow-0 border-yellow-0 border-b-1"
                          : "text-white"
                      )}
                    />
                  </div>
                </Link>
              </Col>
            ))}
            <Col xs="4">
              <button
                className="flex justify-center w-full"
                onClick={handleClick}
              >
                <IconBars
                  className={classNames(
                    showMenu
                      ? "text-yellow-0 border-yellow-0 border-b-1"
                      : "text-white"
                  )}
                />
              </button>
            </Col>
          </Container>
        </div>
      </div>

      <HamburgerMenu isOpen={showMenu} />
    </>
  );
};

export default MobileFooter;
