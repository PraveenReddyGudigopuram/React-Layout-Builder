// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onContentChange = () => {
        onToggleShowContent()
      }
      const onLeftNavBarChange = () => {
        onToggleShowLeftNavbar()
      }
      const onRightNavBarChange = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-container">
          <div className="app-container">
            <h1 className="heading">Layout</h1>
            <div className="checkbox-container">
              <div>
                <input
                  type="checkbox"
                  id="content"
                  checked={showContent}
                  onChange={onContentChange}
                />
                <label className="label" htmlFor="content">
                  Content
                </label>
              </div>
              <br />
              <div>
                <input
                  type="checkbox"
                  id="left-navbar"
                  checked={showLeftNavbar}
                  onChange={onLeftNavBarChange}
                />
                <label className="label" htmlFor="left-navbar">
                  Left Navbar
                </label>
              </div>
              <br />
              <input
                type="checkbox"
                id="right-navbar"
                checked={showRightNavbar}
                onChange={onRightNavBarChange}
              />
              <label className="label" htmlFor="right-navbar">
                Right Navbar
              </label>
              <br />
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
