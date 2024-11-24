import React from "react";

const AnimalsTable = ({
  animals,
  checkResult,
  selectedAnimal,
  setSelectedAnimal,
}) => {
  return (
    <div className="border-orange">
      <h3>Choose an Animal</h3>
      <div className="animal-table">
        {animals.map((animal, index) => (
          <div
            key={index}
            className="animal-card"
            onClick={() => {
              setSelectedAnimal(animal.name);
              checkResult(animal.name);
            }}
          >
            <img
              className={`animal-image
                        ${selectedAnimal === animal.name ? "selected" : ""}`}
              src={`./fig/${animal.img}`}
              alt={animal.name}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalsTable;
