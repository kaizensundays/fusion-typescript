//
const {useState} = React;

interface Props {
    name: string;
    age: number;
    address: string;
}

const User: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Address: {props.address}</p>
        </div>
    );
};

const MathPanel = () => {

    const [result, setResult] = useState(0);

    const x = 1.3

    return (
        <div>
            <Button label={'Exp'} onClick={() => setResult(Math.exp(x))} style={execButtonStyle}/>
            <h1>Math.exp({x}): {result}</h1>
        </div>
    )
}

const Panel = () => {

    const userProps: Props = {
        name: "Ari Gold",
        age: 39,
        address: "1829 Camino Palmero St., Los Angeles, CA",
    }

    const [helloText, setHelloText] = useState('');

    return (
        <div>
            <User {...userProps} />
            <hr/>
            <Button label={'Hi'} onClick={() => hello("Hello!")} style={etcButtonStyle}/>
            <Button label={'Hello, LA'} onClick={() => setHelloText('Hello, Los Angeles!')} style={etcButtonStyle}/>
            <TextInput text={helloText}/>
            <hr/>
            <MathPanel/>
        </div>
    );
}

ReactDOM.render(<Panel/>, document.getElementById("ts-root"))
