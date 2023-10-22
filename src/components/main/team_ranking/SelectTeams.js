import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from './context/MyContext';
import { Button } from "@material-tailwind/react";

export const MultiSelectComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { setTeams, teamSuggestion,setConfirmTeam } = useContext(MyContext);
  const [inputShow, setInputShow] = useState(true);
  const [sortedTeamSuggestions, setSortedTeamSuggestions] = useState([]);

  useEffect(() => {
    // Sort teamSuggestion alphabetically for display
    const sortedTeams = teamSuggestion.slice().sort((a, b) => a.team_name.localeCompare(b.team_name));
    setSortedTeamSuggestions(sortedTeams);
  }, [teamSuggestion]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue) {
      setSelectedOptions([...selectedOptions, inputValue]);
      setInputValue('');
    }
  };

  const handleAddTeam = () => {
    if (inputValue) {
      setSelectedOptions([...selectedOptions, inputValue]);
      setInputValue('');
    }
  };

  const handleButtonClick = (index) => {
    const newOptions = selectedOptions.filter((_, i) => i !== index);
    setSelectedOptions(newOptions);
  };

  const addTeams = () => {
    setTeams(selectedOptions);
    setInputShow(false);
    setConfirmTeam(true);
  };

  return (
    <div className="py-4 px-6">
      {inputShow ? (
        <>
          <select
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
           // className="border border-gray-300 rounded px-3 py-2 w-[50%] mb-4 focus:outline-none focus:border-blue-500"
            className="px-4 w-50 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
           // style={{ paddingRight: '11.75rem' }}
          >
            <option value="" disabled selected>
              Select Team
            </option>
            {sortedTeamSuggestions.map((team) => (
              <option key={team.team_name} value={team.team_name}>
                {team.team_name}
              </option>
            ))}
          </select>
          <div className='mb-2 mt-2'>
          <Button
            className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={handleAddTeam}
          >
            ADD
          </Button>

          <Button
            className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={addTeams}
          >
            Confirm
          </Button>
          </div>
        </>
      ) : (
        ''
      )}

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
