import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      vehicles: [],
      value: '',
      pilot: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
  console.log(this.state.value);
  this.setState({value: e.target.value});
  }



  handleSubmit(e) {
    e.preventDefault();
    console.log('Its Working!')
    let previousValue = this.state.value;
    this.setState({value: '', pilot: previousValue})
  }

  componentDidMount(){
      console.log('hey');
      fetch('https://swapi.co/api/vehicles/').then(results => {
            return results.json();
          }).then(data => {
            this.setState({vehicles: data.results});
            console.log("state", this.state.vehicles);
            })
    };

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:



  render() {
    let newStyle={
      width: '20rem'
    }
    let textStyle={
      listStyle: 'none'
    }
    let vehicleCart = this.state.vehicles.map((vech, index) => {
      return (
        <div key={index} className="card" style={newStyle}>
        <div className="card-block">
              <h4 className="card-title">Vehicle Info</h4>
        <ul>
          <li className='starWarsVechicles' style={textStyle}>
            Vehicle: {vech.name}
          </li>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Model: {vech.model}</li>
            <li className="list-group-item">Manufacturer: {vech.manufacturer}</li>
            <li className="list-group-item">Class: {vech.vehicle_class}</li>
            <li className="list-group-item">Passangers: {vech.passangers}</li>
            <li className="list-group-item">Crew: {vech.crew}</li>
            <li className="list-group-item">Length: {vech.length}</li>
            <li className="list-group-item">Max Speed: {vech.max_atmosphering_speed}</li>
            <li className="list-group-item">Cargo Capacity: {vech.cargo_capacity}</li>
          </ul>
        </ul>
      </div>
        </div>
      )
    })

    return (
      <div className="App">
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
         <form className='jumbotron'>
           <h1>Give us your pilots name!</h1>

           <input type='text' onChange={this.handleNameChange}/>
           <button type='submit' onClick={this.handleSubmit}> Click here quick!</button>

           <h3>{this.state.pilot} <br/> </h3>
           <p>^ Pilots Name ^</p>
         </form>
          <div className="card">
            <ul className="list-group list-group-flush">
                {vehicleCart}
            </ul>
         </div>
      </div>
    );
    }

  }


export default App;

// PROPS AND STATE
// Set props and state below.
// You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
// Enter your code below:

// FORM: HANDLE INPUT CHANGES
// handleNameChange below:
// See form lesson for details.
// Enter your code below:

//  FORM: SUBMIT METHOD
// handleSubmit below:
// See form lesson for details.
// Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
// Then, set the value of the input back to an empty string.
// Enter your code below:

// LIFECYCLE
// Which lifecycle is best for fetching data?
// Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
// Once you have fetched that data, set the state of vehicles to the fetched data.
// In your response look for 'results'. It should return this array.
// You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
// Enter your code below:

/*
Store vehicles state in a variable.
Map over this variable to access the values needed to render.
*/
