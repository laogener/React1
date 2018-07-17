class HelloMessage extends React.Component {
    render(){
        return <div>Hello3 {this.props.name}</div>;
    }
}

ReactDOM.render(
<HelloMessage name="Taylor" />,
    document.getElementById('container')
);
