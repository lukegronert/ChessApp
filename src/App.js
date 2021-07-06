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
    const doc = document.querySelector('html');
    if(moveName === selectedPiece.name) {
      console.log('WINNER');
      setScore(score+1)
      doc.style.backgroundColor = 'green';
      setTimeout(() => {
        doc.style.backgroundColor = 'white';
      },400)
      console.log(score)
    } else {
      doc.style.backgroundColor = 'red';
      setTimeout(() => {
        doc.style.backgroundColor = 'white';
      },400)
      console.log('LOSER');
    }
  }

  return (
    <div className="App">
      <div id='piece' className='mt-5'>
        <Piece pieces={pieces} selectedPiece={selectedPiece} setSelectedPiece={setSelectedPiece} score={score} />
      </div>
      <div id='movement' className='mt-10 mb-5'>
        <Movements moves={moves} score={score} setMoves={setMoves}  onClick={clickMovement} />
      </div>
      <div id='letters' className='grid grid-cols-6 gap-x-20 px-5 text-center text-4xl'>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
        <div>F</div>
      </div>
    </div>
  );
}

export default App;
