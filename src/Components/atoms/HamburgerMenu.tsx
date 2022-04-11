import classNames from "classnames";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { IconChartPie, IconGasPump } from "./Icons";

type HamburgerMenuProps = {
  isOpen: boolean;
};

const HamburgerMenu = ({ isOpen }: HamburgerMenuProps) => {
  const location = useLocation();

  const FooterLinks = [
    {
      name: "ფასების ისტორია",
      link: "/graphs",
      icon: IconChartPie,
    },
    {
      name: "საწვავის ფასები",
      link: "/",
      icon: IconGasPump,
    },
  ];

  const isCurrentPage = (link: string) => {
    return link === location.pathname;
  };

  return (
    <div
      className={classNames(
        "h-[35%] fixed left-0 w-full bg-gray-9 rounded-b-20 z-20 text-white duration-300 transition-all",
        isOpen ? "top-0 opacity-100" : "-top-[35%]"
      )}
    >
      <nav className="w-full">
        <ul className="p-32 m-0">
          <span className="block text-18 text-center pb-16 border-white-0 border-b-1">
            ნავიგაცია
          </span>
          {FooterLinks.map(({ name, link, icon: IconComponent }) => (
            <li key={name} className="flex">
              <Link
                className={classNames(
                  "flex items-center no-underline my-16 py-8 text-18",
                  isCurrentPage(link)
                    ? "text-yellow-0 border-yellow-0 border-b-1"
                    : "text-white"
                )}
                to={link}
              >
                <IconComponent width={28} height={28} />
                <span className="pl-8">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
