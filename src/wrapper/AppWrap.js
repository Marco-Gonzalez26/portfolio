import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'
import NavigationsDots from '../components/NavigationsDots'

const AppWrap = (Component, idName, classNames) =>
  function HOC () {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMediaIcons />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 MARCO</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationsDots active={idName} />
      </div>
    )
  }

export default AppWrap
