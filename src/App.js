import React, { Component } from 'react';
import './style.css';
import cronometro from './assets/cronometro.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'INICIAR'
    };

    this.timer = null;
    this.ligar = this.ligar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  ligar(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'INICIAR';
    } 
    else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.01;
        if(state.numero >= 59) {
          clearInterval(this.timer);
          this.timer = null;
          state.botao = 'INICIAR';
        }
        this.setState(state);
      }, 10); // Intervalo reduzido para 10ms para maior precisão
      state.botao = 'PARAR';
    }
    this.setState(state);
  }

  limpar(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    state.numero = 0;
    state.botao = 'INICIAR';
    this.setState(state);
  }

  render(){
    return(
      <div className='container'>
        <img src={cronometro} className='img'/>
        <a className='timer'>{this.state.numero.toFixed(2)}</a>
        <div className='areaBtn'>
          <a className='botao' onClick={this.ligar}>{this.state.botao}</a>
          <a className='botao' onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    )
  }
}

export default App;
