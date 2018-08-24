import React, {Component} from 'react';

import { Menu, Dropdown } from 'antd';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const style = {border: "none", backgroundColor: "rgba(0,0,0,0)"}

class ReadyGear extends Component {
    constructor() {
        super()
        this.state = {
            color: "green",
            menu: <Menu>
                <Menu.Item>
                    <button onClick={()=> this.setState({color: "green"})}style={style} >Ready</button>
                </Menu.Item>
                <Menu.Item>
                    <button onClick={()=> this.setState({color: "red" })} style={style} >Not Ready</button>
                </Menu.Item>
            </Menu>,
            
        }
    }


render() {
   
    return (
        <div className="cogIcon">
        <Dropdown overlay={this.state.menu} placement="topLeft">
            <FontAwesomeIcon icon="cog" size="2x" color={this.state.color}/>
            </Dropdown>
        </div>
    )
}
    
}

export default ReadyGear