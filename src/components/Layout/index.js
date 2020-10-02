import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import styled from "styled-components"

import * as S from './styled'
import GlobalStyles from "../../styles/global"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"


const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Sidebar />
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
