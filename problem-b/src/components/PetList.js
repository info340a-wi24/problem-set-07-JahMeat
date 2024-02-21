import React from 'react';

function PetCard(props) {
    let petData = props.petData;

    petData = petData.map((pet) => {
        let displayedName = pet.name;
        if (pet.adopted) displayedName += " (Adopted)";
        let adopt = () => {
            props.adoptCallback(pet.name);
        };

        return (
            <div className="card" key={pet.name} onClick={adopt}>
                <img className="card-img-top" src={pet.img} alt={pet.name} />
                <div className="card-body">
                <h3 className="card-title">{displayedName}</h3>
                <p className="card-text">{pet.sex} {pet.breed}</p>
                </div>
            </div>
        )
    });

    return petData;
}

export default function PetList(props) {
    let pets = props.pets;
    let adoptCallback = props.adoptCallback;

    return (
        <>
            <h2>Dogs for Adoption</h2>
            <div className="card-deck">
                <PetCard petData={pets} adoptCallback={adoptCallback}/>
            </div>
        </>
    )
}