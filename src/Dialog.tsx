import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormContent, IFormProps } from './FormContent'
import { IUpdates } from './IUpdates';

export interface DialogComponetProps {
    heading: string;
    formProps: IUpdates;
    onHide?: (updats: IUpdates)=> void;
}

export interface DialogComponentStates{
    formProps: IUpdates;
}

export /**
 * Dialog
 */
    class DialogComponent extends React.Component<DialogComponetProps, DialogComponentStates> {

    constructor(props:DialogComponetProps) {
        super(props);    
        this.state = {
            formProps: this.props.formProps
        }   
    }

    onUpdate = (props: IUpdates) =>{
        this.state.formProps = props;
        this.setState(this.state);
    }

    onHide = () =>{
        if(this.props.onHide){
            this.props.onHide(this.state.formProps);
        }
    }

    /**
     * Get HTML
     */
    render() {
        return <div className="ms-Dialog">
            <div className="ms-Overlay"></div>
            <div className="ms-Dialog-main">
                <button className="ms-Dialog-button ms-Dialog-button--close">
                    <i className="ms-Icon ms-Icon--x"></i>
                </button>
                <div className="ms-Dialog-header">
                    <p className="ms-Dialog-title">{this.props.heading}</p>
                </div>
                <div className="ms-Dialog-inner">
                    <div className="ms-Dialog-content">                        
                            <FormContent
                                showButtonProps={false} 
                                value={this.state.formProps.value}
                                color={this.state.formProps.color} 
                                fontSize={this.state.formProps.fontSize}
                                position={this.state.formProps.position}
                                onUpdate={this.onUpdate}
                                />                        
                    </div>
                    <div className="ms-Dialog-actions">
                        <div className="ms-Dialog-actionsRight">
                            <button onClick={this.onHide} className="ms-Dialog-action ms-Button ms-Button--primary btn-action-positive">
                                <span className="ms-Button-label">OK</span>
                            </button>
                            <button onClick={this.onHide} className="ms-Dialog-action ms-Button btn-action-negetive">
                                <span className="ms-Button-label">Cancel</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            ;
    }
}