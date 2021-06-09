import React from 'react';
import { useEffect } from 'react';

export default function Piece(props) {
    const {pieces, selectedPiece, setSelectedPiece, score} = props;

    //Randomly selects a piece to display when component renders
    //Component re-renders and displays a new random piece when score changes
    useEffect (() => {
        setSelectedPiece(pieces[Math.floor(Math.random() * pieces.length)])
    }, [score])

    return (
        <div>
            <img src={selectedPiece.image} className='mx-auto' alt='' />
        </div>
    )
}
