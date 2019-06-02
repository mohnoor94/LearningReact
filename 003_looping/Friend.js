class Friend extends React.Component {

    render() {
        const {name, hobbies} = this.props;
        const hobbiesList = hobbies.map(h => <li>{h}</li>);
        return (
            <div>
                <h1>Name: {name}</h1>
                <p>Hobbies:</p>
                <ul>
                    {hobbiesList}
                </ul>
            </div>
        );
    }
}