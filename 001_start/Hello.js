class Hello extends React.Component {

    static defaultProps = {
        from: 'Anonymous'
    };

    render() {
        const props = this.props;
        return (
            <div>
                <h1>Hello {props.to} from {props.from}!</h1>
            </div>
        );
    }
}