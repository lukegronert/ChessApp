import React from 'react';
import {useEffect} from 'react';
import pawnMovement from '../images/pawnMovement.png';
import knightMovement from '../images/knightMovement.png';
import bishopMovement from '../images/bishopMovement.png';
import rookMovement from '../images/rookMovement.png';
import queenMovement from '../images/queenMovement.png';
import kingMovement from '../images/kingMovement.png';

export default function Movements(props) {
    const {moves, setMoves, score} = props;

    const movementsArray = [
        {
          name: 'Pawn',
          image: pawnMovement,
        },
        {
          name: 'Knight',
          image: knightMovement,
        },
        {
          name: 'Bishop',
          image: bishopMovement,
        },
        {
          name: 'Rook',
          image: rookMovement,
        },
        {
          name: 'Queen',
          image: queenMovement,
        },
        {
          name: 'King',
          image: kingMovement,
        }
      ];

    // Takes the array and returns a shuffled array
    const shuffle = (array) => {
        var currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    
    // Shuffles the moves array when component initially renders
    //When score changes, component re-renders and shuffles moves again
    useEffect(() => {
        setMoves(shuffle(movementsArray))
    }, [score])

    return (
        <div className='grid grid-cols-6 gap-x-20 px-5'>
            {moves.map((move) => {
                return (
                    <div key={move.name} className='mx-auto' onClick={() => props.onClick(move.name)}>
                        <img src={move.image} alt='' />
                    </div>
                )
            })}
        </div>
    )
}
