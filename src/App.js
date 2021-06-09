import './App.css';
import { useState } from 'react';
import Piece from './components/Piece';
import Movements from './components/Movements';

function App() {

  const [selectedPiece, setSelectedPiece] = useState({});
  const [moves, setMoves] = useState([]);
  const [score, setScore] = useState(0);

  const pieces = [
    {
      name: 'Pawn',
      image: 'https://image.flaticon.com/icons/png/128/107/107616.png',
    },
    {
      name: 'Knight',
      image: 'https://image.flaticon.com/icons/png/128/726/726165.png',
    },
    {
      name: 'Bishop',
      image: 'https://image.flaticon.com/icons/png/128/107/107618.png',
    },
    {
      name: 'Rook',
      image: 'https://image.flaticon.com/icons/png/128/2313/2313658.png',
    },
    {
      name: 'Queen',
      image: 'https://image.flaticon.com/icons/png/128/44/44502.png',
    },
    {
      name: 'King',
      image: 'https://image.flaticon.com/icons/png/128/107/107613.png',
    }
  ];

  const clickMovement = (moveName) => {
    if(moveName === selectedPiece.name) {
      console.log('WINNER');
      setScore(score+1)
      console.log(score)
    } else {
      console.log('LOSER');
    }
  }

  return (
    <div className="App">
      <div id='piece'>
        <Piece pieces={pieces} selectedPiece={selectedPiece} setSelectedPiece={setSelectedPiece} score={score} />
      </div>
      <div id='movement'>
        <Movements moves={moves} score={score} setMoves={setMoves}  onClick={clickMovement} />
      </div>
    </div>
  );
}

export default App;
