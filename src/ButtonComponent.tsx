import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface ButtonComponentProps {
    value: string;
    desciption?: string;
    handleClick?: Function;
}

export /**
 * ButtonComponent
 */
    class ButtonComponent extends React.Component<ButtonComponentProps, {}> {
    render() {
        return <button onClick={this.props.handleClick} className="ms-Button ms-Button--hero" id="add-teaser">
            <span className="ms-Button-icon"><i className="ms-Icon ms-Icon--plus"></i></span>
            <span className="ms-Button-label"> {this.props.value} </span>
            <span className="ms-Button-description"> {this.props.desciption} </span>
        </button>;
    }
}