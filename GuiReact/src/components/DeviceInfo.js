import React from "react";

class DeviceInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="header">
                <h1>Device information</h1>
                <div className="info">
                    <div className="device">
                    </div>
                    <div>
                        <div className="device-data">
                            <p className="device-title">Device</p>
                            <p className="device-value">{this.props.deviceInfo.product}</p>
                        </div>
                        <div className="device-data">
                            <p className="device-title">Device Name</p>
                            <p className="device-value">{this.props.deviceInfo.deviceName}</p>
                        </div>
                        <div className="device-data">
                            <p className="device-title">Device Id</p>
                            <p className="device-value">{this.props.deviceInfo.id}</p>
                        </div>
                        <div className="device-data">
                            <p className="device-title">Device Ip adress</p>
                            <p className="device-value">{this.props.deviceInfo.ip}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default DeviceInfo;