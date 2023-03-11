const {useState} = React;

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{margin: "8px"}}>JavaScript Counter: {counter}</h1>
            <Button label={'+'} onClick={() => setCounter(counter + 1)} style={execButtonStyle}/>
            <Button label={'-'} onClick={() => setCounter(counter - 1)} style={execButtonStyle}/>
        </div>
    );
}

ReactDOM.render(<Counter/>, document.getElementById('js-root'))
