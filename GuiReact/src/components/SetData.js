import React from "react";

const colorSelect =[
    {
        label: "White",
        value: "#ffffff"
    },
    {
        label: "Red",
        value: "#FF0000"
    },
    {
        label: "Green",
        value: "#009933"
    },
    {
        label: "Blue",
        value: "#0066ff"
    },
    {
        label: "Yellow",
        value: "#ffff00"
    },
    {
        label: "Violet",
        value: "#cc00cc"
    },
]
const effectSelect =[
    {
        label: "Fade",
        value: 1
    },
    {
        label: "Rgb",
        value: 2
    },
    {
        label: "Police",
        value: 3
    },
    {
        label: "Relax",
        value: 4
    },
    {
        label: "Strobo",
        value: 5
    },
    {
        label: "Bell",
        value: 6
    },
]

class SetData extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color: "#ffffff",
            effect: 1,
          };
          this.handleChangeColor = this.handleChangeColor.bind(this);
          this.handleChangeEffect = this.handleChangeEffect.bind(this);
    }
    handleChangeColor(e) {
        this.setState({ color: e.target.value });
      }
      handleChangeEffect(e) { 
        this.setState({ effect: e.target.value });
      }
    
    render(){
        return(
            <div className="device-handling">
                <h1>Set State</h1>
                <div className="select-box">
                    <div className="box">
                        <p>Choose a color</p>
                        <select className="select-list" value={this.state.color} onChange={this.handleChangeColor}>
                            {colorSelect.map((color) => (
                                <option value={color.value}>{color.label}</option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <p>Choose a effect</p>
                        <select className="select-list" value={this.state.effect} onChange={this.handleChangeEffect}>
                            {effectSelect.map((effect) => (
                                    <option value={effect.value}>{effect.label}</option>
                                    ))}
                        </select>
                    </div>
                </div>
                <div>
                    <button className="button" onClick={()=>{this.props.SetState(this.state.color, this.state.effect)}}>Confirm</button>
                </div>
            </div>
            
        );
    }
    
}

export default SetData 