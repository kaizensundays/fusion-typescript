//
const execButtonStyle: React.CSSProperties = {
    backgroundColor: '#4caf50',
    color: '#ffffff',
    border: 'none',
    fontSize: 16,
    padding: '8px 32px',
    margin: '8px',
    textAlign: 'center',
    textDecoration: 'none'
};

const etcButtonStyle: React.CSSProperties = {
    backgroundColor: '#99a199',
    color: '#ffffff',
    border: 'none',
    fontSize: 16,
    padding: '8px 32px',
    margin: '8px',
    textAlign: 'center',
    textDecoration: 'none',
};

const textInputStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    color: '#333333',
    border: '1px solid #333333',
    borderRadius: 5,
    fontSize: 16,
    padding: '8px 16px',
    width: '256px',
    boxSizing: 'border-box',
    margin: '8px 0',
};

const hello = (message: string) => {
    alert(message);
}

type ButtonProps = {
    label: string;
    onClick: () => void;
    style: React.CSSProperties;
}

const Button = ({label, onClick, style}: ButtonProps) => {
    return (
        <button style={style} onClick={onClick}>{label}</button>
    );
}

const TextInput = ({text}) => {
    return (
        <input type="text" value={text} style={textInputStyle}/>
    );
}
