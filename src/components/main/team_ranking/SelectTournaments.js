import React, { useContext, useState } from 'react';
import { MyContext } from './context/MyContext';
import './MultiSelectComponent.css';  // Import a CSS file for styling (see note below)
import {  Button} from "@material-tailwind/react";


export const MultiSelectComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputShow, setInputShow] = useState(true);
  const {setTournaments, tournamentSuggestion, setConfirmTour} = useContext(MyContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue) {
      setSelectedOptions([...selectedOptions, inputValue]);
      setInputValue('');
    }
  };

  const handleButtonClick = (index) => {
    const newOptions = selectedOptions.filter((_, i) => i !== index);
    setSelectedOptions(newOptions);
    console.log(newOptions);
  };

  const handleAddTournament = () =>{
    if (inputValue) {
      setSelectedOptions([...selectedOptions, inputValue]);
      setInputValue('');
    }
  }

  const addTournaments = ()=>{
    setTournaments(selectedOptions);
    setInputShow(false);
    setConfirmTour(true);
  }

  return (
    <div className="py-4 px-6">
      {
        (inputShow) ? <><select
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      //  className="border border-gray-300 rounded px-3 py-2 w-[50%] mb-4 focus:outline-none focus:border-blue-500"
        className="w-30 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        style={{paddingRight: '16.75rem'}}
      >
        <option value="" disabled selected>
          Select Tournament
        </option>
        {
          tournamentSuggestion.map( (tournament)=>{
              return <option value={tournament.tournament_name}>{tournament.tournament_name}</option>;
          })
        }
        {/* <option value="option1">Option 1</option> */}
       
        {/* Add more options as needed */}
      </select>
      <div className='mb-2 mt-2'>
      <Button
      className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={() => handleAddTournament()}
    >ADD</Button>
      <Button
      className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={() => addTournaments()}
    >Confirm</Button></div></> : ''
      }
      <ul>
        {selectedOptions.map((option, index) => (
          <div key={index} className="option-item">
            <Button className="option-button" onClick={() => handleButtonClick(index)}>
              {option}
              <span className="remove-icon" onClick={() => handleButtonClick(index)}>
                &#x2715; {/* Cross icon */}
              </span>
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

