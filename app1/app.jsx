'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
   
//   intialisation
   this.state = {
      status: null,
      likeScore: 0,
      dislikeScore: 0
   };
  }
  
  addLikeScore() {
    const newLikeScore = this.state.likeScore + 1;
    this.setState({likeScore: newLikeScore,
    status: newLikeScore > this.state.dislikeScore ? "Popular" : "Unpopular"
      
    });
    
    
  }
  
  addDislikeScore() {
    const newDislikeScore = this.state.dislikeScore + 1;
    this.setState({dislikeScore: newDislikeScore,
    status: this.state.likeScore > newDislikeScore ? "Popular" : "Unpopular"  
    
    });
    
    
  }
  
  resetScore() {
    this.setState({
      likeScore: 0,
      dislikeScore: 0,
      status: "No Comments"
    });
  
  }
  
  render() {
      return(
          <div>
              <button onClick={() => this.addLikeScore()}>Like</button>
              <button onClick={() => this.addDislikeScore()}>Dislike</button>
              
              <div>Like Score: {this.state.likeScore} </div>
              <div>Dislike Score: {this.state.dislikeScore} </div>
              
              <button onClick={() => this.resetScore()} >Reset</button>
              
              <div>
                Status of page: {this.state.status}
              </div>
              
          </div>
          );
    
  }
};

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);