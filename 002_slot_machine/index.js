class App extends React.Component {
    render() {
        return (
            <div>
                <Machine s1="x" s2="y" s3="z"/>
                <Machine s1="x" s2="x" s3="x"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));