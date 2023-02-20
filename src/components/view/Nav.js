import { menusView } from "../../data";
import Footer from "./Footer";

const Nav = () => {
  return `
  <nav>
    <ul class="flex font-bold">
        ${menusView
          .map((menu) => {
            return `
            <li class="list-none px-1  sm:px-6 text-[17px] sm:text-[19px]  hover:text-blue-300"><a href="${menu.link}">${menu.name}</a></li>
            `;
          })
          .join("")}
    </ul>
  </nav>
  `;
};

export default Nav;
