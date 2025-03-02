import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import DocGenerator from "../features/DocEditor/DocGenerator";
import Navbar from "../features/main/Navbar";

const HTMLEditor = () => {
  const initialState = {
    writingData: {
      typeOfWriting: "part_1",
      topic: "",
    },
    text: "",
  };

  const [writingData, setWritingData] = useState(initialState.writingData);
  const [text, setText] = useState(initialState.text);
  const [wordCount, setWordCount] = useState(0);
  const quillRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setWritingData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    let rawTextArr = [];

    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      rawTextArr = quill.getText().trim();
    }

    setWordCount(
      rawTextArr.length === 0
        ? 0
        : rawTextArr.split(/[/./,/;/:\r\n\s]+/).filter((item) => item !== "")
            .length
    );
  }, [text]);

  const requiredWordCount = writingData.typeOfWriting === "part_2" ? 250 : 150;
  const isEssaeyElligible = wordCount >= requiredWordCount;

  return (
    <div className="">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 px-4 flex justify-center items-center flex-col">
        <h2 className="text-2xl text-center p-4 font-bold text-teal-700">
          IELTS Writing formatter
        </h2>
        <div className="w-full flex flex-col gap-4">
          <label htmlFor="typeOfWriting" className="flex flex-col gap-2">
            <span className="text-md text-teal-700 font-semibold">
              Writing Part
            </span>
            <select
              name="typeOfWriting"
              id="typeOfWriting"
              value={writingData.typeOfWriting}
              onChange={handleChange}
              className="text-teal-700 font-semibold text-xl border border-teal-700 py-2 px-4 outline-none"
            >
              <option value="part_1" className="focus:bg-teal-700">
                Part 1
              </option>
              <option value="part_2" className="">
                Part 2 (Essay)
              </option>
            </select>
          </label>

          <label htmlFor="topic"></label>
          <input
            id="topic"
            name="topic"
            onChange={handleChange}
            type="text"
            className="border border-teal-700 w-full py-2 px-4 outline-none placeholder:font-thin placeholder:italic placeholder:text-gray-700 placeholder:text-sm text-teal-700 text-lg font-semibold"
            placeholder="Topic (optional)"
          />
        </div>
        {/* Toolbar + Editor */}
        <div className="w-full mt-4">
          <div className="w-full flex justify-between items-center mb-4 text-teal-700">
            <h1 className="text-xl font-bold ">
              Type your{" "}
              {writingData.typeOfWriting === "part_1" ? "task 1" : "essay"}{" "}
              here:
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span
                className={`text-xl font-semibold ${
                  isEssaeyElligible ? "text-teal-700" : "text-red-500"
                }`}
              >
                words: {wordCount}
              </span>
            </div>
          </div>
          <ReactQuill
            ref={quillRef}
            value={text}
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],

                ["bold", "italic", "underline"],
                ["clean"],
              ],
            }}
            onChange={setText}
            placeholder="Write your essay here..."
            className={`mb-4 text-teal-900 border border-teal-700 ${
              isEssaeyElligible ? "text-teal-700" : "slate-900"
            }`}
          />
        </div>
        <DocGenerator
          htmlContent={text}
          wordCount={wordCount}
          writingData={writingData}
        />
      </div>
    </div>
  );
};

export default HTMLEditor;
