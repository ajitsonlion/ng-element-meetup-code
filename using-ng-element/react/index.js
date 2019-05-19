class Application extends React.Component {

    constructor(props) {
        super(props);
        this.ngElementRef = React.createRef();

        this.state = {
            increment: 2,
            time: new Date(),
            message: 'Hello React!'
        }

    }

    componentDidMount() {
        this.ngElementRef.current.addEventListener('doAdd', e => this.reverseMessage(e));
    }

    reverseMessage(e) {
        console.log(e);

        if (e.detail % 10 === 0) {
            this.setState((state) => {
                return {
                    message: state.message.split('').reverse().join('')
                }
            });
            this.ngElementRef.current.time = new Date();
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <ng-element
                    increment={this.state.increment}
                   // time={this.state.time}
                    ref={this.ngElementRef}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Application/>,
    document.getElementById('root')
);

