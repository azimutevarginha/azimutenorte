import { Menu } from "./style.ts";
import  Close  from "../../../img/close.png"
import { titulosSobre, linksSobre, titulosArtigos, linksArtigos } from "../NavBar/index.tsx";

interface MenuHamburgerProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuHamburger({ menuIsVisible, setMenuIsVisible }: MenuHamburgerProps) {
  return (
    <Menu isVisible={menuIsVisible}>
      <img src={Close} alt="" onClick={() => setMenuIsVisible(false)}/>
        <ul>
          <li><a href={linksSobre[0]}>{titulosSobre[0]}</a></li>
          <li><a href={linksSobre[1]}>{titulosSobre[1]}</a></li>
          <li><a href={linksArtigos[0]}>{titulosArtigos[0]}</a></li>
        </ul>
    </Menu>
  );
}