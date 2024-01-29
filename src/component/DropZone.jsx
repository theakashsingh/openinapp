import { useRef, useState } from "react";
import "./dropzone.css";
import { useDispatch } from "react-redux";
import { removeCSV, uploadCSV } from "../redux/features/uploadSlice";

const DropZone = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleDragOver = e => {
    e.preventDefault();
  };
  const handleDrop = e => {
    e.preventDefault();
    console.log(e);
    setFile(e.dataTransfer.files[0]);
    const dragFile = e.dataTransfer.files[0];

    if (dragFile) {
      const reader = new FileReader();
      reader.onload = e => {
        const csvString = e.target.result;
        const jsonData = parseCSV(csvString);
        setFile(jsonData);
        dispatch(uploadCSV(jsonData));
      };

      reader.readAsText(dragFile);
    }
  };

  const parseCSV = csvString => {
    const rows = csvString.split("\n");
    const headers = rows[0].split(",");

    return rows.slice(1).map(row => {
      const values = row.split(",");
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index].trim();
        return obj;
      }, {});
    });
  };

  const handleOnChange = (e) =>{
    const inputFile = e.target.files[0];

    if (inputFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvString = e.target.result;
        const jsonData = parseCSV(csvString);
        dispatch(uploadCSV(jsonData))
        setFile(jsonData)
      };

      reader.readAsText(inputFile);
    }
  }
  console.log(file);

  return (
    <div className="dropzone_wrapper">
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        {!file ? (
          <div className="before_upload">
            <h1>
              Drop your excel sheet here or{" "}
              <span onClick={() => inputRef.current.click()}>
                <input
                  type="file"
                  hidden
                  ref={inputRef}
                  onChange={e => {
                    handleOnChange(e)
                  }}
                />
                browse
              </span>
            </h1>
          </div>
        ) : (
          <div className="after_upload">
            <h1>{file?.name}</h1>
            <h1
              onClick={() => {
                dispatch(removeCSV());
              }}
              className="remove"
            >
              Remove
            </h1>
          </div>
        )}
      </div>
      <button onClick={() => inputRef.current.click()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Upload
      </button>
    </div>
  );
};

export default DropZone;
