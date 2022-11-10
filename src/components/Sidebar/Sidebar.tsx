import Image from "next/image";

import * as S from "./styles";

interface SidebarProps {
  toggleSidebar: () => void;
  isVisible: boolean;
}

const Sidebar = ({ toggleSidebar, isVisible }: SidebarProps) => {
  return (
    <S.Container isVisible={isVisible}>
      <S.Button onClick={toggleSidebar}>
        <Image src="/icons/close.svg" width={16} height={16} alt="close" />
      </S.Button>
      <nav>
        <S.NavLinkContainer>
          <S.NavLink>
            <a href="#">Resumo</a>
          </S.NavLink>
          <S.NavLink>
            <a href="#">Dashboard</a>
          </S.NavLink>
          <S.NavLink>
            <a href="#">Configurações</a>
          </S.NavLink>
        </S.NavLinkContainer>
      </nav>
    </S.Container>
  );
};

export default Sidebar;
