import * as React from 'react';
import { FormContent } from './FormContent';
import { IUpdates } from './IUpdates';
import { DialogResult } from './DialogResult';

export interface IDialogComponetProps {
    heading: string;
    formProps: IUpdates;
    onHide?: (updats: IUpdates, result: DialogResult) => void;
}

export interface IDialogComponentStates {
    formProps: IUpdates;
}

export /**
        * Dialog
        */
    class DialogComponent extends React.Component<IDialogComponetProps, IDialogComponentStates> {

    constructor(props: IDialogComponetProps) {
        super(props);
        this.state = {
            formProps: this.props.formProps
        };
    }

    onUpdate = (props: IUpdates) => {
        this.state.formProps = props;
        this.setState(this.state);
    }

    onConfirm = (event: MouseEvent) => {
        if (this.props.onHide) {
          this.props.onHide(this.state.formProps, DialogResult.OK);
        }
    }

    onCancel = (event: MouseEvent) => {
        if (this.props.onHide) {
          this.props.onHide(this.state.formProps, DialogResult.Cancel);
        }
    }

    /**
     * Get HTML
     */
    render() {
        return <div className='ms-Dialog'>
            <div className='ms-Overlay'></div>
            <div className='ms-Dialog-main'>
                <button className='ms-Dialog-button ms-Dialog-button--close'>
                    <i className='ms-Icon ms-Icon--x'></i>
                </button>
                <div className='ms-Dialog-header'>
                    <p className='ms-Dialog-title'>{this.props.heading}</p>
                </div>
                <div className='ms-Dialog-inner'>
                    <div className='ms-Dialog-content'>
                        <FormContent
                            showButtonProps={false}
                            value={this.state.formProps.value}
                            color={this.state.formProps.color}
                            fontSize={this.state.formProps.fontSize}
                            position={this.state.formProps.position}
                            onUpdate={this.onUpdate}
                            />
                    </div>
                    <div className='ms-Dialog-actions'>
                        <div className='ms-Dialog-actionsRight'>
                            <button onClick={this.onConfirm} className='ms-Dialog-action ms-Button ms-Button--primary btn-action-positive'>
                                <span className='ms-Button-label'>OK</span>
                            </button>
                            <button onClick={this.onCancel} className='ms-Dialog-action ms-Button btn-action-negetive'>
                                <span className='ms-Button-label'>Cancel</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}