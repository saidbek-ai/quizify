// import { useState } from "react";
import html2pdf from "html2pdf.js";
import { useSelector } from "react-redux";

const DocGenerator = ({ htmlContent, wordCount, writingData }) => {
  // const [pdfUrl, setPdfUrl] = useState("");
  const username = useSelector((state) => state.auth.username);

  const renderDoc = () => {
    const sheet = document.getElementById("styledSheet");

    html2pdf()
      .set({
        padding: 10,
        filename: `${
          writingData.topic
            ? writingData.topic.slice(0, 12)
            : writingData.typeOfWritring === "part_1"
            ? "Report"
            : "Essay"
        }.pdf`,
        html2canvas: { scale: 4 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(sheet)
      .toPdf()
      .outputPdf("bloburl") // Get the PDF as a Blob URL
      // .then((pdfUrl) => {
      //   window.open(pdfUrl); // Open the PDF in a new tab
      // });
      // .then((pdfUrl) => {
      //   setPdfUrl(pdfUrl);
      //   // Open the PDF in a new tab
      // })
      .save();
  };

  // console.log(username);

  return (
    <div className="">
      <template>
        <div id="styledSheet" className="p-12 mb-5 flex flex-col">
          <div className="border-b border-gray-900 pb-3 mb-5 flex justify-between items-center">
            <span className="text-2xl">
              {writingData.typeOfWriting === "part_1"
                ? "Task 1 (Report)"
                : "Task 2 (Essay)"}
            </span>
            <span className="text-lg">{wordCount}</span>
          </div>
          <div
            className="mb-4 text-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></div>
          {username ? (
            <span className="text-lg py-5 text-right italic">
              {username.toUpperCase()}
            </span>
          ) : (
            ""
          )}
        </div>
      </template>
      <button
        onClick={renderDoc}
        disabled={wordCount === 0}
        className="mt-4 px-4 py-2 bg-teal-700 text-white rounded disabled:opacity-50"
      >
        Download Pdf
      </button>
    </div>
  );
};

export default DocGenerator;
