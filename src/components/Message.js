import React from 'react';

export class Message extends React.Component {
    render() {
        return <div style={{
            background: "violet"
        }}> {this.props.message} </div>
    }
}