import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import got from "./got.json"

class App extends Component {

  state = {
    message: "Click a character to begin game!",
    highScore: 0,
    currentScore: 0,
    card: got,
    unpickedCards: got
  }

  shuffleCards = characterArray => {
    for (let i = characterArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * ( i + 1));
      [characterArray[i], characterArray[j]] = [characterArray[j], characterArray[i]];
    };
  };

  cardPick = character => {
    const findCard = this.state.unpickedCards.find(item => item.name === character);

    if (findCard === undefined) {
      this.setState({
        message: "Incorrect Guess!",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        card: got,
        unpickedCards: got
      });
    } else {
      const newCard = this.state.unpickedCards.filter(item => item.name !== character);
      this.setState({
        message: "Correct Guess!",
        currentScore: this.state.currentScore + 1,
        card: got,
        unselectedPhotos: newCard
      });
  } 
  this.shuffleCards(got);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
        message = { this.state.message }
        currentScore = { this.state.currentScore }
        highScore = { this.state.highScore }
        />
        <Jumbotron />
        {
          this.state.card.map(card => (
            <Card
              key={card.id}
              id={card.id}
              image={card.photo}
              name={card.character}
              selectCard={this.cardPick}
              currentScore={this.state.currentScore}
            />
          ))
        }
      </Wrapper>
    )
  }
}

export default App;