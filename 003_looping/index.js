class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Ali"
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />

                <Friend
                    name="Noor"
                    hobbies={['Coding', 'YouTube']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));