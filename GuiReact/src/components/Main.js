import React from "react";
import ActualInformation from "./ActualInformation";
import DeviceInfo from "./DeviceInfo";
import SetData from "./SetData";

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            deviceInfo:"",
            actualState:"",
        }
    }
    render(){
        return(
            <div>
                <h1 className="title">EXTERNAL API SUPPORT</h1>
                <div className="container">
                <DeviceInfo deviceInfo={this.state.deviceInfo}/>
                <ActualInformation actualState={this.state.actualState}/>
                <SetData SetState={this.SetState.bind(this)}/>
                </div>
            </div>
            
            
        );
    }

    GetInformaton() {
        fetch("https://localhost:44364/gui/call/info")
            .then(async response => {
                const data = await response.json();
  
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                this.setState({
                    deviceInfo:{
                        apiLevel: data.device.apiLevel,
                        deviceName: data.device.deviceName,
                        fv: data.device.fv,
                        hv: data.device.hv,
                        id: data.device.id,
                        ip: data.device.ip,
                        product: data.device.product,
                        type: data.device.type,
                    }  
                })
            })
            .catch(error => {
                alert("Server doesn't respond", error);
            });
    }

    GetState() {
        fetch("https://localhost:44364/gui/call/state")
            .then(async response => {
                const data = await response.json();
    
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                this.setState({
                    actualState:{
                        colorMode: data.rgbw.colorMode,
                        currentColor: data.rgbw.currentColor,
                        desiredColor: data.rgbw.desiredColor,
                        durationsMs: {
                            colorFade: data.rgbw.durationsMs.colorFade,
                            effectFade: data.rgbw.durationsMs.effectFade,
                            effectStep: data.rgbw.durationsMs.effectStep,
                        },
                        effectID: data.rgbw.effectID,
                        lastOnColor: data.rgbw.lastOnColor,
                    } 
                })
            })
            .catch(error => {
                alert("Server doesn't respond", error);
            });
    } 
    
    SetState(color, effect) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                rgbw:{
                    desiredColor:color,
                    effectID:effect,
                    durationsMs:{
                        colorFade: 1000,
                        effectFade: 1500,
                        effectStep: 2000
                    }
                }
               })
        };
        fetch(`https://localhost:44364/gui/call/set`,requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
              
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                this.GetState();
            })
            .catch(error => {
                alert("Server doesn't respond", error);
            });
           
      }   

    componentDidMount() {
        this.GetInformaton();
        this.GetState();
    }
}

export default Main;