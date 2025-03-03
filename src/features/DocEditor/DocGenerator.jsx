// import { useState } from "react";
import html2pdf from "html2pdf.js";
import { useSelector } from "react-redux";
import { username } from "../auth/autSlice";

const DocGenerator = ({ htmlContent, wordCount, writingData }) => {
  // const [pdfUrl, setPdfUrl] = useState("");
  const username = useSelector((state) => state.auth.username);

  const element = `
      <style>
        body { font-family: Arial, sans-serif; text-color: #111; }
        h1 { color: #0f766e; text-align: center; font-size: 28px; font-weight: bold; }
        h2 { color: #0f766e; text-align: center; font-size: 20px; font-weight: bold; }
        p { font-size: 16px; line-height: 1.6; }
        ul, ol { padding-left: 20px; }
        li { font-size: 16px; margin-bottom: 5px; }
        b, strong { font-weight: bold;}
        i, em { font-style: italic; }
        u { text-decoration: underline; }
        blockquote { font-style: italic; background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc; }
      </style>
      <div style="padding: 16px; margin-bottom: 20px;">
      <span style="font-size: 10px;">formatted by @saidbekxudayberdiyev</span>
        <div style=" border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
        
        <span style="font-size: 22px;">IELTS Writing (${
          writingData.typeOfWriting === "part_1" ? "Part 1" : "Essay"
        })</span>
        <span style="font-size: 16px;">Word Count: ${wordCount}</span>
        </div>
        ${
          writingData.topic
            ? `<h2 style="padding: 12px 24px;">${writingData?.topic}</h2>`
            : ""
        }
        ${htmlContent}

      ${
        username
          ? `<p style="font-size: 16px; padding: 18px 0; text-align: right; font-style: italic;">${username.toUpperCase()}</p>`
          : ""
      }
      </div>
    `;

  const renderDoc = () => {
    html2pdf()
      .set({
        padding: 10,
        filename: `
        Essay.pdf`,
        html2canvas: { scale: 4 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
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
