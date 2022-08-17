import React from 'react'

const NavigationsDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, index) => {
          return (
            <a
              key={item + index}
              href={`#${item}`}
              className="app__navigation-dot"
              style={
                active === item
                  ? { backgroundColor: '#313B7A', cursor: 'pointer' }
                  : { cursor: 'pointer' }
              }
            />
          )
        }
      )}
    </div>
  )
}

export default NavigationsDots
