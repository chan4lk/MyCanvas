import * as React from 'react';
import { MyCanvas, ICanvasElements } from './MyCanvas';
import { ButtonComponent } from './ButtonComponent';
import { DialogComponent } from './Dialog';
import { TextElement } from './TextElement';
import { Position } from './Position';
import { IUpdates } from './IUpdates';
import { DialogResult } from './DialogResult';
import { Constants } from './Constants';

export interface IMyPageProps {
    background: string;
}

export interface IMyPageStates {
    headerClass: string;
    teaserClass: string;
    buttonClass: string;
    elements: ICanvasElements;
    dialogs: {
        headerDialog: IUpdates,
        teaserDialog: IUpdates,
        buttonDialog: IUpdates
    };
}

export interface IMyPageComponent {
    addHeader: () => void;
    hideHeaderDialog: (updates: IUpdates, result: DialogResult) => void;
}

export class MyPageComponent extends React.Component<IMyPageProps, IMyPageStates> implements IMyPageComponent {

    constructor(props: IMyPageProps) {
        super(props);

        this.state = {
            headerClass: Constants.HiddenClass,
            teaserClass: Constants.HiddenClass,
            buttonClass: Constants.HiddenClass,
            elements: {
                background: this.props.background,
                texts: []
            },
            dialogs: {
                headerDialog: { color: '#fff', fontSize: 10, position: Position.TOP_CENTER, value: 'Header' },
                teaserDialog: { color: '#fff', fontSize: 10, position: Position.TOP_CENTER, value: 'Teaser' },
                buttonDialog: { color: '#fff', fontSize: 10, position: Position.TOP_CENTER, value: 'View' },
            }

        };

    }

    addHeader = () => {
        this.state.headerClass = Constants.VisibleClass;
        this.setState(this.state);
    }

    hideHeaderDialog = (updates: IUpdates, result: DialogResult) => {
        this.state.headerClass = Constants.HiddenClass;

        if (DialogResult.OK === result) {
            this.updateElements(updates);
        }

        this.setState(this.state);
    }

    addTeaser = () => {
        this.state.teaserClass = Constants.VisibleClass;
        this.setState(this.state);
    }

    hideTeaserDialog = (updates: IUpdates, result: DialogResult) => {
        this.state.teaserClass = Constants.HiddenClass;
        if (DialogResult.OK === result) {
            this.updateElements(updates);
        }

        this.setState(this.state);
    }

    addButton = () => {
        this.state.buttonClass = Constants.VisibleClass;
        this.setState(this.state);
    }

    hideButtonDialog = (updates: IUpdates, result: DialogResult) => {
        this.state.buttonClass = Constants.HiddenClass;
        if (DialogResult.OK === result) {
            this.updateElements(updates);
        }

        this.setState(this.state);
    }

    onUndo = () => {
        if (this.state.elements.texts.length > 0) {
            this.state.elements.texts = this.state.elements.texts.slice(0, this.state.elements.texts.length - 1);
            this.setState(this.state);
        }
    }

    onClear = () => {
        this.state.elements.texts = [];
        this.setState(this.state);
    }

    updateElements(updates: IUpdates) {

        this.state.elements.texts.push(new TextElement(
            updates.value + this.state.elements.texts.length,
            `${updates.fontSize}pt ${Constants.FontName}`,
            updates.color,
            updates.position));
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='ms-Grid'>
                <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-u-md6 ms-u-hiddenSm'>
                        <span className='ms-font-m-plus'>
                            <i className='ms-Icon ms-Icon--editBox' aria-hidden='true'></i>
                            Draw
                        </span>
                    </div>
                </div>
                <div className='ms-Grid-row cr-commands'>
                    <div className='ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4'>
                        <ButtonComponent value='Add Header' handleClick={this.addHeader}/>
                    </div>
                    <div className='ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4'>
                        <ButtonComponent value='Add Teaser' handleClick={this.addTeaser}/>
                    </div>
                    <div className='ms-Grid-col ms-u-sm12 ms-u-md4 ms-u-lg4'>
                        <ButtonComponent value='Add Button' handleClick={this.addButton}/>
                    </div>
                </div>

                <div className='ms-Grid-row'>
                    <div className='ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12'>
                        <div className='ms-CommandBar'>
                            <div className='ms-CommandBarSearch'>
                                <input className='ms-CommandBarSearch-input' type='text' placeholder='Search' tabIndex='1'/>
                                <div className='ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper'>
                                    <i className='ms-Icon ms-Icon--search'></i>
                                </div>
                                <div className='ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s'>
                                    <i className='ms-Icon ms-Icon--x'></i>
                                </div>
                            </div>
                            <div className='ms-CommandBar-sideCommands'>
                                <div className='ms-CommandBarItem'>
                                    <div className='ms-CommandBarItem-linkWrapper'>
                                        <a className='ms-CommandBarItem-link' tabIndex='1' onClick={this.onUndo}>
                                            <span className='ms-CommandBarItem-icon ms-Icon ms-Icon--reactivate'></span>
                                            <span className='ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'>Undo</span>
                                            <i className='ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='ms-CommandBar-mainArea'>
                                <div className='ms-CommandBarItem'>
                                    <div className='ms-CommandBarItem-linkWrapper'>
                                        <a className='ms-CommandBarItem-link' tabIndex='1'>
                                            <span className='ms-CommandBarItem-icon ms-Icon ms-Icon--star'></span>
                                            <span className='ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'>New</span>
                                            <i className='ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'></i>
                                        </a>
                                    </div>
                                </div>
                                <div className='ms-CommandBarItem'>
                                    <div className='ms-CommandBarItem-linkWrapper'>
                                        <a className='ms-CommandBarItem-link' tabIndex='1' onClick={this.onClear}>
                                            <span className='ms-CommandBarItem-icon ms-Icon ms-Icon--save'></span>
                                            <span className='ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'>Delete</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='ms-CommandBarItem'>
                                    <div className='ms-CommandBarItem-linkWrapper'>
                                        <a className='ms-CommandBarItem-link' tabIndex='1'>
                                            <span className='ms-CommandBarItem-icon ms-Icon ms-Icon--flag'></span>
                                            <span className='ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'>Archive</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='ms-CommandBarItem ms-CommandBarItem--hasTextOnly'>
                                    <div className='ms-CommandBarItem-linkWrapper'>
                                        <a className='ms-CommandBarItem-link' tabIndex='1'>
                                            <span className='ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'>Junk</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='ms-CommandBarItem ms-CommandBarItem--hasTextOnly'>
                                    <div className='ms-CommandBarItem-linkWrapper'>
                                        <a className='ms-CommandBarItem-link' tabIndex='1'>
                                            <span className='ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'>Move To</span>
                                            <i className='ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'></i>
                                        </a>
                                    </div>
                                </div>
                                <div className='ms-CommandBarItem ms-CommandBarItem--hasTextOnly'>
                                    <div className='ms-CommandBarItem-linkWrapper'>
                                        <a className='ms-CommandBarItem-link' tabIndex='1'>
                                            <span className='ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'>Categories</span>
                                            <i className='ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'></i>
                                        </a>
                                    </div>
                                </div>

                                <div className='ms-CommandBarItem ms-CommandBarItem--iconOnly ms-CommandBarItem-overflow'>
                                    <div className='ms-CommandBarItem-linkWrapper'>
                                        <a className='ms-CommandBarItem-link' tabIndex='2'>
                                            <span className='ms-CommandBarItem-icon ms-Icon ms-Icon--ellipsis'></span>
                                            <span className='ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular'>Ellipsis</span>
                                            <i className='ms-CommandBarItem-chevronDown ms-Icon ms-Icon--chevronDown'></i>
                                        </a>
                                    </div>
                                    <ul className='ms-CommandBar-overflowMenu ms-ContextualMenu'></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ms-Grid-row' id='drawing-container'>
                    <MyCanvas width={100} height={100} elements={this.state.elements} />
                </div>
                <div className={ this.state.headerClass}>
                    <DialogComponent
                        heading='Hi'
                        formProps={this.state.dialogs.headerDialog}
                        onHide={this.hideHeaderDialog}/>
                </div>
                <div className={ this.state.teaserClass}>
                    <DialogComponent
                        heading='Hi'
                        formProps={this.state.dialogs.teaserDialog}
                        onHide={this.hideTeaserDialog}/>
                </div>
                <div className={ this.state.buttonClass }>
                    <DialogComponent
                        heading='Hi'
                        formProps={this.state.dialogs.buttonDialog}
                        onHide={this.hideButtonDialog}/>
                </div>
            </div>

        );
    }
}

