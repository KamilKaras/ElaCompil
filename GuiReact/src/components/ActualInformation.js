import React from "react";

class ActualInformation extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let style ={
            margin: `0.5rem`,
            width:`20px`,
            height: `20px`,
            borderRradius: `50%`,
            backgroundColor: `#${this.props.actualState.currentColor}`,
        };
        return(
            <div className="actualInformation">
                <h1>Actual State</h1>
                <div className="information">
                    <div className="led">
                        <div className="firstRow">
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>       
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>            
                        </div>
                        <div className="secondRow">
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>  
                            <div className="circle" style={style}></div>  
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>
                            <div className="circle" style={style}></div>            
                        </div>
                    </div>
                    <div>
                        <div className="device-data-info">
                            <p className="device-title-info">Color Mode</p>
                            <p className="device-value-info">{this.props.actualState.colorMode}</p>
                        </div>
                        <div className="device-data-info">
                            <p className="device-title-info">Efect Id</p>
                            <p className="device-value-info">{this.props.actualState.effectID}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}
export default ActualInformation;