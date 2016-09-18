import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface DialogComponetProps {
    heading: string;
    content: string;
    onHide?: Function;
}

export /**
 * Dialog
 */
    class DialogComponent extends React.Component<DialogComponetProps, {}> {

    constructor(props:DialogComponetProps) {
        super(props);       
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
                        <form>
                            {this.props.content}
                        </form>
                    </div>
                    <div className="ms-Dialog-actions">
                        <div className="ms-Dialog-actionsRight">
                            <button onClick={this.props.onHide} className="ms-Dialog-action ms-Button ms-Button--primary btn-action-positive">
                                <span className="ms-Button-label">OK</span>
                            </button>
                            <button onClick={this.props.onHide} className="ms-Dialog-action ms-Button btn-action-negetive">
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