// Destructure pokemon props here :)
import { Type } from "./Type";

export const Pokemon = ({ name, types, height, weight, category }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Category: {category}</p>
      <div>
        {types.map((type) => (
          <Type key={type} type={type} />
        ))}
      </div>
    </div>
  );
};
