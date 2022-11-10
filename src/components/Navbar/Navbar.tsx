import Image from "next/image";
import { useState } from "react";
import Sidebar from "../Sidebar";

import * as S from "./styles";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function toggleSidebar() {
    setIsSidebarVisible((prev) => !prev);
  }

  return (
    <>
      <S.Container>
        <S.Content>
          <Image src="/logo.svg" width={30} height={28} alt="NVGO" />
          <h1>Controle financeiro</h1>
          <S.Button onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </S.Button>
          <S.NavLinks>
            <ul>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Resumo</a>
              </li>
              <li>
                <a href="#">Configurações</a>
              </li>
            </ul>
          </S.NavLinks>
        </S.Content>
      </S.Container>
      <Sidebar toggleSidebar={toggleSidebar} isVisible={isSidebarVisible} />
    </>
  );
};

export default Navbar;
