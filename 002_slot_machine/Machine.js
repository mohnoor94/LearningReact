class Machine extends React.Component {

    render() {
        const props = this.props;
        const s1 = props.s1;
        const s2 = props.s2;
        const s3 = props.s3;

        const winner = s1 === s2 && s2 === s3;
        const msg = winner ? " You win!" : "You lose!";

        const elementsStyle = {fontSize: '32px', backgroundColor: 'yellow'};

        return (
            <div className='Machine'>
                <p style={elementsStyle}>{s1} {s2} {s3}</p>

                <p className={winner ? 'win' : 'lose'}>
                    {msg}
                </p>
            </div>
        );
    }
}