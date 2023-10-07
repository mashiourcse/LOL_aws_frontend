import React, { useContext, useState } from 'react';
import { MyContext } from './context/MyContext';
export const MultiSelectComponent = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const {setTeams,teamSuggestion} = useContext(MyContext);
  const [inputShow, setInputShow] = useState(true);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue) {
      setSelectedOptions([...selectedOptions, inputValue]);
      setInputValue('');
    }
    
  };

  const handleAddTeam = () =>{
    if (inputValue) {
      setSelectedOptions([...selectedOptions, inputValue]);
      setInputValue('');
    }
  }

  const handleButtonClick = (index) => {
    const newOptions = selectedOptions.filter((_, i) => i !== index);
    setSelectedOptions(newOptions);
    
  };

  const addTeams = ()=>{
    setTeams(selectedOptions);
    setInputShow(false);
  }

  return (
    <div className="py-4 px-6">
      {
        (inputShow) ? <><select
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        className="border border-gray-300 rounded px-3 py-2 w-[50%] mb-4 focus:outline-none focus:border-blue-500"
        style={{paddingRight: '11.75rem'}}
      >
        <option value="" disabled selected>
          Select Team
        </option>
        {
          teamSuggestion.map( (team)=>{
              return <option value={team.team_name}>{team.team_name}</option>;
          })
        }
        {/* <option value="option1">Option 1</option> */}
        
        {/* Add more options as needed */}
      </select>
      <button
      className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={() => handleAddTeam()}
    >ADD</button>

      <button
      className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={() => addTeams()}
    >Confirm</button></> : ''
      }
  
      <ul>
        {selectedOptions.map((option, index) => (
          <div key={index} className="option-item">
          <button className="option-button" onClick={() => handleButtonClick(index)}>
            {option}
            <span className="remove-icon" onClick={() => handleButtonClick(index)}>
              &#x2715; {/* Cross icon */}
            </span>
          </button>
        </div>
        ))}
      </ul>
    </div>
  );
};
