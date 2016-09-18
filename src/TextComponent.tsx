import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface ITextComponentProps{
    value:string | number;
    label:string;
    description:string;
    type:string;
    onUpdate?:(newValue:string|number) => void;
}

export interface ITextComponentStates{
    value:string | number;
}

export class TextComponent extends React.Component<ITextComponentProps, ITextComponentStates>{
    constructor(props:ITextComponentProps){
        super(props);
        this.state = {
            value: props.value
        }
    }

    onKeyUp  = (event:KeyboardEvent) => {
        this.state.value = (event.target as HTMLInputElement).value;
        this.setState(this.state);  

        if(this.props.onUpdate){
            this.props.onUpdate(this.state.value);
        }
    }

    render() {
        return <div className="ms-TextField">
            <label className="ms-Label">{this.props.label}</label>
            <input className="ms-TextField-field" type={this.props.type} value={this.state.value} onChange={this.onKeyUp}/>
            <span className="ms-TextField-description">{this.props.description}</span>
        </div>;
    }
}

