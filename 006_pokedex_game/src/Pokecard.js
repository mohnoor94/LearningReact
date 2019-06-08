import React, {Component} from 'react'
import './Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {

    render() {
        const pad = id => `${'0'.repeat(3 - id.toString().length)}${id}`;
        const props = this.props;
        const imgSrc = `${POKE_API}${pad(props.id)}.png`;
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{props.name}</h1>
                <div className='Pokecard-image'>
                    <img src={imgSrc} alt={props.name}/>
                </div>
                <div className='Pokecard-data'>Type: {props.type}</div>
                <div className='Pokecard-data'>EXP: {props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;