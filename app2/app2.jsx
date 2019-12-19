'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        likeScore: 0,
        dislikeScore: 0
    };
  }
  
  addLikeCounter() {
    this.setState({ likeScore: this.state.likeScore+1});
  }
  
  addDislikeCounter() {
    this.setState({ dislikeScore: this.state.dislikeScore+1});
  }
  
  resetCounters() {
    this.setState({ likeScore: 0, dislikeScore: 0});
  }

  render() {
    let status;
    if (this.state.likeScore === 0 && this.state.dislikeScore === 0) {
        status = "Let's begin the game of like and dislike";
    } else if (this.state.likeScore >= this.state.dislikeScore) {
        status = "This page is popular"
    } else {
        status = "This page is not popular"
    }
    
    return (
        <div id="app-wrapper">
            <div id="status">{status}</div>
            <Counter
              addLikeCounter={() => this.addLikeCounter()}
              addDislikeCounter={() => this.addDislikeCounter()}
              resetCounters={() => this.resetCounters()}
              likeScore={this.state.likeScore}
              dislikeScore={this.state.dislikeScore}
            />
        </div>    
    )
  }
};

//it's like a mediatory or an in between to communicate to the childerens 
//to compartmentalise and reduce the number of things to change
class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="counter-wrapper">
        <button id="like-button" onClick={() => this.props.addLikeCounter()}>Like</button>
        <button id="dislike-button" onClick={() => this.props.addDislikeCounter()}>Dislike</button>
        
        <div>Likes: {this.props.likeScore}</div>
        <div>Dislikes: {this.props.dislikeScore}</div>
        
        <button id="reset-button" onClick={() => this.props.resetCounters()}>Reset</button>
      </div>  
    );
  }
};

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);