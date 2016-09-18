import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyCanvas, ICanvasElements } from './MyCanvas';
import { ButtonComponent } from './ButtonComponent';
import { DialogComponent, DialogComponetProps } from './Dialog';
import TextElement from './TextElement';
import { Position } from './Position';
import { IUpdates } from './IUpdates';

export interface IMyPageProps { }
export interface IMyPageStates {
    headerClass: string;
    teaserClass: string;
    buttonClass: string;
    elements: ICanvasElements;
    dialogs: {
        headerDialog: IUpdates,
        teaserDialog: IUpdates,
        buttonDialog: IUpdates
    }
}

export class MyPageComponent extends React.Component<IMyPageProps, IMyPageStates> {    

    constructor(props: IMyPageProps) {
        super(props);

        this.state = {
            headerClass: 'ms-Grid-row hide',
            teaserClass: 'ms-Grid-row hide',
            buttonClass: 'ms-Grid-row hide',
            elements: {
                background: 'images/header_1.jpg',
                texts: []
            },
            dialogs:{
                headerDialog: {color:'', fontSize:0, position:Position.TOP_CENTER, value:''},
                teaserDialog: {color:'', fontSize:0, position:Position.TOP_CENTER, value:''},
                buttonDialog: {color:'', fontSize:0, position:Position.TOP_CENTER, value:''},
            }

        };

        //this.addHeader = this.addHeader.bind(this);
    }

    addHeader = ()=> {
        this.state.headerClass = "ms-Grid";
        this.setState(this.state);
    }

    hideHeaderDialog = () => {
        this.state.headerClass = "ms-Grid hide";
        this.state.elements.texts.push(new TextElement('Header' + this.state.elements.texts.length, '30pt Arial', '#fff', Position.TOP_LEFT));
        this.setState(this.state);
    }

    addTeaser = ()=> {
        this.state.teaserClass = "ms-Grid";
        this.setState(this.state);
    }

    hideTeaserDialog = () => {
        this.state.teaserClass = "ms-Grid hide";
        this.state.elements.texts.push(new TextElement('Teaser', '20pt Arial', '#fff', Position.MIDDLE_CENTER));
        this.setState(this.state);
    }

    addButton = ()=> {
        this.state.buttonClass = "ms-Grid";
        this.setState(this.state);
    }

    hideButtonDialog = () => {
        this.state.buttonClass = "ms-Grid hide";
        this.state.elements.texts.push(new TextElement('Button', '10pt Arial', '#fff', Position.BOTTOM_RIGHT));
        this.setState(this.state);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-u-md6 ms-u-hiddenSm">
                        <span className="ms-font-m-plus">
                            <i className="ms-Icon ms-Icon--editBox" aria-hidden="true"></i>
                            Draw
                        </span>
                    </div>
                </div>
                <div className="ms-Grid-row cr-commands">
                    <div className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4">
                        <ButtonComponent value="Add Header" handleClick={this.addHeader}/>
                    </div>
                    <div className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4">
                        <ButtonComponent value="Add Teaser" handleClick={this.addTeaser}/>
                    </div>
                    <div className="ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4">
                        <ButtonComponent value="Add Button" handleClick={this.addButton}/>
                    </div>
                </div>

                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12">
                        <div className="ms-CommandBar">
                            <div className="ms-CommandBarSearch">
                                <input className="ms-CommandBarSearch-input" type="text" placeholder="Search" tabIndex="1"/>
                                <div className="ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper">
                                    <i className="ms-Icon ms-Icon--search"></i>
                                </div>
                                <div className="ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s">
                                    <i className="ms-Icon ms-Icon--x"></i>
                                </div>
                            </div>
                            <div className="ms-CommandBar-sideCommands">
                                <div className="ms-CommandBarItem">
                                    <div className="ms-CommandBarItem-linkWrapper">
                                        <a className="ms-CommandBarItem-link" tabIndex="1">
                                            <span className="ms-CommandBarItem-icon ms-Icon ms-Icon--reactivate"></span>
                                            <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Undo</span>
                                            <i className="ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-CommandBar-mainArea">
                                <div className="ms-CommandBarItem">
                                    <div className="ms-CommandBarItem-linkWrapper">
                                        <a className="ms-CommandBarItem-link" tabIndex="1">
                                            <span className="ms-CommandBarItem-icon ms-Icon ms-Icon--star"></span>
                                            <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">New</span>
                                            <i className="ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="ms-CommandBarItem">
                                    <div className="ms-CommandBarItem-linkWrapper">
                                        <a className="ms-CommandBarItem-link" tabIndex="1">
                                            <span className="ms-CommandBarItem-icon ms-Icon ms-Icon--save"></span>
                                            <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Delete</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="ms-CommandBarItem">
                                    <div className="ms-CommandBarItem-linkWrapper">
                                        <a className="ms-CommandBarItem-link" tabIndex="1">
                                            <span className="ms-CommandBarItem-icon ms-Icon ms-Icon--flag"></span>
                                            <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Archive</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="ms-CommandBarItem ms-CommandBarItem--hasTextOnly">
                                    <div className="ms-CommandBarItem-linkWrapper">
                                        <a className="ms-CommandBarItem-link" tabIndex="1">
                                            <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Junk</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="ms-CommandBarItem ms-CommandBarItem--hasTextOnly">
                                    <div className="ms-CommandBarItem-linkWrapper">
                                        <a className="ms-CommandBarItem-link" tabIndex="1">
                                            <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Move To</span>
                                            <i className="ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="ms-CommandBarItem ms-CommandBarItem--hasTextOnly">
                                    <div className="ms-CommandBarItem-linkWrapper">
                                        <a className="ms-CommandBarItem-link" tabIndex="1">
                                            <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Categories</span>
                                            <i className="ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="ms-CommandBarItem ms-CommandBarItem--iconOnly ms-CommandBarItem-overflow">
                                    <div className="ms-CommandBarItem-linkWrapper">
                                        <a className="ms-CommandBarItem-link" tabIndex="2">
                                            <span className="ms-CommandBarItem-icon ms-Icon ms-Icon--ellipsis"></span>
                                            <span className="ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular">Ellipsis</span>
                                            <i className="ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown"></i>
                                        </a>
                                    </div>
                                    <ul className="ms-CommandBar-overflowMenu ms-ContextualMenu"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-Grid-row" id="drawing-container">
                    <MyCanvas width={100} height={100} elements={this.state.elements} />
                </div>
                <div className={ this.state.headerClass}>
                    <DialogComponent
                     heading="Hi" 
                     formProps={this.state.dialogs.headerDialog}
                     onHide={this.hideHeaderDialog}/>
                </div>
                <div className={ this.state.teaserClass}>
                    <DialogComponent
                     heading="Hi" 
                     formProps={this.state.dialogs.teaserDialog} 
                     onHide={this.hideTeaserDialog}/>
                </div>
                <div className={ this.state.buttonClass }>
                    <DialogComponent
                     heading="Hi" 
                     formProps={this.state.dialogs.buttonDialog} 
                     onHide={this.hideButtonDialog}/>
                </div>
            </div>

        );
    }
}

