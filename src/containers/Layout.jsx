import React, { useContext } from 'react'
import ThemeContext from '@context/ThemeContext';
import '@styles/Layout.scss'

const Layout = ({children}) => {
  const { stateTheme } = useContext(ThemeContext);

  return (
      <div className={stateTheme}>
          {children}
      </div>
  )
}

export default Layout;