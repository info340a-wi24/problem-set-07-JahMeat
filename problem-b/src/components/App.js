import React, { useState } from 'react';
import { AboutNav } from './Navigation.js';
import { BreedNav } from './Navigation.js';
import PetList from './PetList.js';

import _ from 'lodash';


function App(props) {
  let [petState, setPets] = useState(props.pets);

  function adoptPet(name) {
    let copy = petState.map((pet) => {
      if (pet.name === name) {
        pet.adopted = true;
      }
      return pet;
    })

    setPets(copy);
  }

  let pets = props.pets;

  let petBreeds = [];
  pets.forEach((pet) => {
    petBreeds.push(pet.breed);
  });
  petBreeds = _.uniq(petBreeds);

  return (
    <>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <AboutNav />
            <BreedNav breeds={petBreeds}/>
          </div> {/* <!-- end col --> */}

          <div id="petList" className="col-9">
            <PetList pets={pets} adoptCallback={adoptPet}/>
          </div> {/* <!-- end col --> */}
        </div> {/* <!-- end row --> */}
      </main>

      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </>
  );
}

export default App;
