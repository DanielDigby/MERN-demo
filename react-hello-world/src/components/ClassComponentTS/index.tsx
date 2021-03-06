// https://github.com/typescript-cheatsheets/react
import React from "react";

type MyProps = {
    // using `interface` is also ok
    message: string;
};

type MyState = {
    count: number; // like this
};

class ClassComponent extends React.Component<MyProps, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      count: 0,
    };

    render() {
        return (
            <div>
                {this.props.message} {this.state.count}
            </div>
      );
    }
}
export default ClassComponent;