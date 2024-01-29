
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const Table = () => {
//   const [csvData, setCsvData] = useState([]);
  const [selectedTags, setSelectedTags] = useState({});
 const data = useSelector(state=>state.csvData)

  const handleTagSelect = (rowIndex, selectedOption) => {
    setSelectedTags((prevSelectedTags) => {
      const updatedSelectedTags = { ...prevSelectedTags };
      updatedSelectedTags[rowIndex] = selectedOption;
      return updatedSelectedTags;
    });
  };

  const handleTagRemove = (rowIndex) => {
    setSelectedTags((prevSelectedTags) => {
      const updatedSelectedTags = { ...prevSelectedTags };
      delete updatedSelectedTags[rowIndex];
      return updatedSelectedTags;
    });
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.links}</td>
              <td>{row.prefix}</td>
              <td>
                {/* <Select
                  options={row.addTags.split(',').map(tag => ({ value: tag, label: tag }))}
                  onChange={(selectedOption) => handleTagSelect(index, selectedOption)}
                  isMulti
                /> */}
              </td>
              <td>
                {selectedTags[index] && (
                  <div>
                    {selectedTags[index].map((tag, tagIndex) => (
                      <div key={tagIndex}>
                        {tag.label}
                        <button onClick={() => handleTagRemove(index, tagIndex)}>Remove</button>
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
