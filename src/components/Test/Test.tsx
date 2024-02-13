import React from "react";

export const Test = () => {
  const automaticallyTyped = "Hello!";

  const manuallyTyped: string = "Greetings!";

  let valueCanChange = 7;

  valueCanChange = 13;

  const arrayOfNumbers = [2, 4, 6, 8, 10, valueCanChange];

  const testObject = {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    releaseYear: 1994,
  };

  return (
    <div className="margin-bottom__md">
      <p>Automatically typed const string: {automaticallyTyped}</p>
      <p>Manually typed const string: {manuallyTyped}</p>
      <p className="margin-bottom__md">Value of let: {valueCanChange}</p>

      <strong>
        <p>Let's display a list</p>
      </strong>
      <ul className="margin-bottom__md">
        {arrayOfNumbers.map((item, index) => {
          return (
            <li>
              Value of item at position {index}: {item}
            </li>
          );
        })}
      </ul>
      <strong>
        <p>Let's display an object!</p>
      </strong>
      <ul>
        <li>Title: {testObject.title}</li>
        <li>Director: {testObject.director}</li>
        <li>Release Year: {testObject.releaseYear}</li>
      </ul>
    </div>
  );
};
