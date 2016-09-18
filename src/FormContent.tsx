import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Position } from './Position';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/DropDown';
import { ColorPicker, IColorPickerProps } from 'office-ui-fabric-react/lib/ColorPicker';
import { TextComponent } from './TextComponent';
import { IUpdates } from './IUpdates';
import EnumUtils from './EnumUtils';

export interface IFormStaes extends IUpdates {  
    dropDownOptions: IDropdownOption[];
}

export interface IFormProps extends IUpdates { 
    showButtonProps: boolean;
    onUpdate?:(states:IUpdates) => void;
}

export /**
 * FormContent
 */
    class FormContent extends React.Component<IFormProps, IFormStaes>{
    

    constructor(props: IFormProps) {
        super(props);

        const names = EnumUtils.getNames(Position);
        const options = names.map((name) => {
            return { key: name, text: name.replace('_', ' ') };
        });


        this.state = {
            value: this.props.value,
            color: this.props.color,
            fontSize: this.props.fontSize,
            position: this.props.position,
            dropDownOptions: options
        };

        
    }

    onPositionUpdate = (selectedOption: IDropdownOption, index?: number) => {
        this.state.position = index;
        const names = EnumUtils.getNames(Position);
        const options = names.map((name) => {
            return { key: name, text: name.replace('_', ' '), isSelected:false };
        });
        options.filter((option) => { return option.key === selectedOption.key })[0].isSelected = true;
        this.state.dropDownOptions = options;
        this.setState(this.state);

        if(this.props.onUpdate){
            this.props.onUpdate(this.state);
        }
    }

    onValueUpdate = (newValue: string) => {
        this.state.value = newValue;
        this.setState(this.state);

        if(this.props.onUpdate){
            this.props.onUpdate(this.state);
        }
    }

    onSizeUpdate = (newValue: number) => {
        this.state.fontSize = newValue;
        this.setState(this.state);

        if(this.props.onUpdate){
            this.props.onUpdate(this.state);
        }
    }

    render() {


        return <div>
            <TextComponent onUpdate={this.onValueUpdate} description="The text value." type="text" label="Value" value={this.state.value}/>
            <Dropdown options={this.state.dropDownOptions} label="Position" onChanged={this.onPositionUpdate}/>
            <TextComponent onUpdate={this.onSizeUpdate} description="The font size." type="number" label="Value" value={this.state.fontSize}/>

        </div>;
    }
}