import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Position } from './Position';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/DropDown';
import { ColorPicker, IColorPickerProps } from 'office-ui-fabric-react/lib/ColorPicker';
import { TextField, ITextFieldProps} from 'office-ui-fabric-react/lib/TextField';
import { TextComponent } from './TextComponent';

import EnumUtils from './EnumUtils';

export interface IFormStaes {
    value: string;
    position: Position;
    fontSize: number;
    color: string;
}

export interface IFormProps {
    showButtonProps: boolean;
}

export /**
 * FormContent
 */
    class FormContent extends React.Component<IFormProps, IFormStaes>{
        constructor(props:IFormProps){
            super(props);
            this.state = {
                value: 'Value',
                color: '#FFF',
                fontSize: 20,
                position: Position.TOP_CENTER
            };
        }

    onPositionUpdate = (option: IDropdownOption, index?: number) => {
        this.state.position = index;        
        this.setState(this.state);
    }

    render() {
        const names = EnumUtils.getNames(Position);
        const options = names.map((name) => {
            return { key: name, text: name.replace('_', ' ') };
        });
                
        return <div>
            <TextComponent ref="valueField" description="The text value." type="text" label="Value" value={this.state.value}/>
            <Dropdown options={options} label="Position"/>
            <TextComponent ref="sizeField" description="The font size." type="text" label="Value" value={this.state.fontSize}/>

        </div>;
    }
}