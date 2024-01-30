
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Dropdown from "./Dropdown"
import "./table.css"

const Table = () => {
  const [selectedTags, setSelectedTags] = useState({});
 const data = useSelector(state=>state.csvData)

 const handleTagSelect = (rowIndex, selectedOption) => {
  setSelectedTags((prevSelectedTags) => {
    const updatedSelectedTags = { ...prevSelectedTags };
    if (!updatedSelectedTags[rowIndex]) {
      updatedSelectedTags[rowIndex] = [];
    }
    updatedSelectedTags[rowIndex].push(selectedOption);
    return updatedSelectedTags;
  });
};

const handleTagRemove = (rowIndex, tagIndex) => {
  setSelectedTags((prevSelectedTags) => {
    const updatedSelectedTags = { ...prevSelectedTags };
    updatedSelectedTags[rowIndex] = updatedSelectedTags[rowIndex].filter((_, index) => index !== tagIndex);
    return updatedSelectedTags;
  });
};

  return (
    <div className='table_wrapper'>
     <h1>Uploads</h1>
     <div className="inside_table">

      <table>
        <thead>
          <tr>
            <th>SI No.</th>
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
              <td><a>{row.links}</a></td>
              <td>{row.prefix}</td>
              <td>
                 <Dropdown
                options={row["select tags"].split(',').map(tag => ({ value: tag.trim(), label: tag.trim() }))}
                onSelect={(selectedOption) => handleTagSelect(index, selectedOption)}
              />
              </td>
              <td>
                {selectedTags[index] && (
                  <div className='selected_tags'>
                   {selectedTags[index].map((tag, tagIndex) => (
                    <div key={tagIndex}>
                     

                      {tag.label}
                     
                      <span style={{cursor:"pointer", display:"flex"}} onClick={() => handleTagRemove(index, tagIndex)}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span>
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
    </div>
  );
};

export default Table;
