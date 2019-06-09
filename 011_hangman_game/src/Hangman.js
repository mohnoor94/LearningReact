import React, {Component} from "react";
import {randomWord} from './words'

import "./Hangman.css";

import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";


class Hangman extends Component {
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };

    state = {
        nWrong: 0, guessed: new Set(), answer: randomWord()
    };

    /** guessedWord: show current-state of word:
     if guessed letters are {a,p,e}, show "app_e" for "apple"
     */
    guessedWord = () => {
        return this.state.answer
            .split("")
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
    };

    /** handleGuess: handle a guessed letter:
     - add to guessed letters
     - if not in answer, increase number-wrong guesses
     */
    handleGuess = evt => {
        let ltr = evt.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));
    };

    /** generateButtons: return array of letter buttons to render */
    generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ));
    };

    restart = () => {
        this.setState({nWrong: 0, guessed: new Set(), answer: randomWord()});
    };

    /** render: render game */
    render() {
        const state = this.state;
        const props = this.props;
        const isLoser = state.nWrong >= props.maxWrong;
        const isWinner = state.answer === this.guessedWord().join('');
        const msg = isLoser
            ? 'You Lose!'
            : isWinner
                ? 'You Win!'
                : state.nWrong > 0 && `Wrong Guesses: ${state.nWrong}`;
        const showButtons = !isLoser && !isWinner;
        const image = !isLoser
            && <img src={this.props.images[this.state.nWrong]}
                    alt={`${state.nWrong}/${props.maxWrong} Wrong Guesses!`}/>;

        return (
            <div className='Hangman'>
                <h1>Hangman</h1>
                {image}
                <p>{msg}</p>
                <p className='Hangman-word'>{isLoser ? state.answer : this.guessedWord()}</p>
                <p className='Hangman-btns'>{showButtons && this.generateButtons()}</p>
                <button id='restart-btn' onClick={this.restart}>Restart!</button>
            </div>
        );
    }
}

export default Hangman;
