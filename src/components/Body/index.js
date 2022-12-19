// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="leftBar-container">
              <h1 className="body-headings">Left Navbar Menu</h1>
              <ul className="lists">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent && (
            <div className="content-container">
              <h1 className="body-headings">Content</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="rightBar-container">
              <h1 className="body-headings">Right Navbar</h1>
              <div className="ad-box">
                <p>Ad 1</p>
              </div>
              <div className="ad-box">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
