import '../styles/style.css';

function Square() {
  const buttons = [];
 
  for (let i = 0; i < 4; i++) {
    buttons.push(<button className="button">Botão Grandão</button>);
  }

  return <div>{buttons}</div>
}

export default Square;
