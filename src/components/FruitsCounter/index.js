// Write your code here
import {Component} from 'react' 
import './index.css'

const FruitsCounter extends Component {
    state = {count: 0}
    mangoIncrement = () => {
  this.setState(prevState => {
      console.log(`prev val ${prevState.count}`)
      return {count: prevState.count + 1}
    })
    }

    bananaIncrement =() => {
   this.setState(prevState => {
      console.log(`prev val ${prevState.count}`)
      return {count: prevState.count + 1}
    })
    }

}

render() {
   const {count} = this.state
   return (
       <div className ="fruits-counter-bg-container">
       <div className= "fruits-counter-container">
       <h1 className ="fruits-counter-heading">Bob ate
        <span className ="fruit-count-color">{count}</span> mangoes <span className ="fruit-count-color">{count}</span> bananas</h1>
       <div>
       <div>
           <img className="mango-img" alt="mango" src="https://assets.ccbp.in/frontend/react-js/mango-img.png"/>
           <button className ="fruit-button" onClick = {this.mangoIncrement}>Eat Mango</button>
       </div>
       <div>
           <img className="banana-img" alt="banana" src="https://assets.ccbp.in/frontend/react-js/banana-img.png"/>
           <button className ="fruit-button" onClick = {this.bananaIncrement}>Eat Banana</button>
       </div>
</div>
       </div>

       </div>
   )
}

export default FruitsCounter