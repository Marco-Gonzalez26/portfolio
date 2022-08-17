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
        </div>
        <NavigationsDots active={idName} />
      </div>
    )
  }

export default AppWrap
