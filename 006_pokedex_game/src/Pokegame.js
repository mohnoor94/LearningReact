import React, {Component} from 'react'
import Pokedex from './Pokedex'
import './Pokegame.css'

class Pokegame extends Component {

    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    };

    render() {
        const props = this.props;
        const {hand1, hand2} = Pokegame.getHands(props);
        const {score1, score2} = Pokegame.getScores(hand1, hand2);

        return (
            <div className='Pokegame'>
                <Pokedex pokemon={hand1} score={score1} isWinner={score1 >= score2}/>
                <Pokedex pokemon={hand2} score={score2} isWinner={score2 >= score1}/>
            </div>
        );
    }

    static getScores(hand1, hand2) {
        const score1 = this.addExp(hand1);
        const score2 = this.addExp(hand2);
        return {score1, score2};
    }

    static addExp(hand) {
        return hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    }

    static getHands(props) {
        const hand1 = [];
        const hand2 = [...props.pokemon];

        while (hand1.length < hand2.length) {
            const randomIdx = Math.floor(Math.random() * hand2.length);
            hand1.push(hand2.splice(randomIdx, 1)[0]);
        }
        return {hand1, hand2};
    }
}

export default Pokegame;