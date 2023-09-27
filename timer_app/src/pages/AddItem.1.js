// 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AddItem({
  items,
  setItems,
  itemName,
  setItemName,
  hours,
  timeValue,
  setTimeValue,
  setHours,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
}) {
  // STATE:
  const [numberValues, setNumberValues] = useState([]); // Array to store entered number values
  const [buttonClickCount, setButtonClickCount] = useState(0); // Count of button clicks

  // keypad button click handler
  const handleNumberButtonClick = (value) => {
    setNumberValues([...numberValues, value]); // Add the clicked number to the array
    setButtonClickCount(buttonClickCount + 1); // Increment the button click count

	// Logic to set hours, minutes, and seconds based on button click count
    if (buttonClickCount === 0) {
      setHours(value); // Set hours to the first button click
    } else if (buttonClickCount === 1) {
      setHours((prevHours) => prevHours * 10 + value); // Append the value to hours
    } else if (buttonClickCount === 2) {
      setMinutes(value); // Set minutes to the third button click
    } else if (buttonClickCount === 3) {
      setMinutes((prevMinutes) => prevMinutes * 10 + value); // Append the value to minutes
    } else if (buttonClickCount === 4) {
      setSeconds(value); // Set seconds to the fifth button click
    } else if (buttonClickCount === 5) {
      setSeconds((prevSeconds) => prevSeconds * 10 + value); // Append the value to seconds
    }
  };

  // updates timeValue to reflect updated hours minutes and seconds
  useEffect(() => {
    setTimeValue(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  }, [hours, minutes, seconds, setTimeValue]);

  // Updates itemName state when input field is typed in
  const handleInputChange = (event) => {
    setItemName(event.target.value);
  };

  // Adds item to items array and clears input field
  const handleClick = () => {
    setItems([...items, itemName]);
    setItemName('');
  };

  // Returns true if the input field is empty or only whitespace else false
  const isEmpty = itemName.trim() === '';

  // Array to store button titles and values to be mapped through and rendered
  const buttons = [
    {
      title: '1',
      value: 1,
    },
    {
      title: '2',
      value: 2,
    },
    {
      title: '3',
      value: 3,
    },
    {
      title: '4',
      value: 4,
    },
    {
      title: '5',
      value: 5,
    },
    {
      title: '6',
      value: 6,
    },
    {
      title: '7',
      value: 7,
    },
    {
      title: '8',
      value: 8,
    },
    {
      title: '9',
      value: 9,
    },
    {
      title: '0',
      value: 0,
    },
  ];

  return (
    <>
      <div>
        <input id="add-item-input" type="text" onChange={handleInputChange} />
        {buttons.map(({ title, value: buttonValue }) => {
          return (
            <button
              key={title}
              onClick={() => handleNumberButtonClick(buttonValue)}
            >
              {title}
            </button>
          );
        })}
        <h2>{timeValue}</h2>
      </div>
      <Link to="/" aria-label="adds item and switches to homepage">
        <button onClick={handleClick} disabled={isEmpty}>
          Add
        </button>
      </Link>
    </>
  );
}
