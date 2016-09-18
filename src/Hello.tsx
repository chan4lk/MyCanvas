import * as React from "react";
import * as ReactDOM from "react-dom";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

export class ButtonRender {
    public render(element: HTMLElement) {
        ReactDOM.render(<Hello compiler="tsx" framework="react"/>, element);
    }
}