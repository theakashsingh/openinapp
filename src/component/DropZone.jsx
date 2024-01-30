import { useRef, useState } from "react";
import "./dropzone.css";
import { useDispatch } from "react-redux";
import { removeCSV, uploadCSV } from "../redux/features/uploadSlice";
import papaparse from "papaparse";

const DropZone = () => {
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  const dispatch = useDispatch();

  const convertCsvToJson = (csvData) => {
    papaparse.parse(csvData, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        // console.log(result.data);
        dispatch(uploadCSV(result.data))
      },
      error: (error) => {
        console.error('CSV parsing error:', error.message);
      },
    });
  };

  const handleDragOver = e => {
    e.preventDefault();
  };
  const handleDrop = e => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    const dragFile = e.dataTransfer.files[0];

    if (dragFile) {
     convertCsvToJson(dragFile)
    }
  };


  

  const handleOnChange = (e) =>{
    const inputFile = e.target.files[0];
    convertCsvToJson(inputFile)
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
