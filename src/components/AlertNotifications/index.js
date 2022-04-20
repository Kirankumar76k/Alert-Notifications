// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import {Component} from 'react'
import Notification from '../Notification'
import './index.css'

class AlertNotification extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Alert Notifications</h1>

          <Notification>
            <AiFillCheckCircle className="success icon" />
            <div className="card">
              <h1 className="success title"> Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </Notification>

          <Notification>
            <MdWarning className="error icon" />
            <div className="card">
              <h1 className="error title"> Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </Notification>
          <Notification>
            <RiErrorWarningFill className="warning icon" />
            <div className="card">
              <h1 className="warning title"> Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </Notification>
          <Notification>
            <MdInfo className="info icon" />
            <div className="card">
              <h1 className="info title"> Info</h1>
              <p className="description">
                Anyone on the internet can view these files
              </p>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}
export default AlertNotification
