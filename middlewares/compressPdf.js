const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

const compressPdf = async (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }

    const filePath = req.file.path;
    if (!filePath.toLowerCase().endsWith("pdf")) {
      return next(); // only compress pdf.
    }

    const pdfBytes = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const compressBytes = await pdfDoc.save({
      useObjectStreams: true,
      addDefaultPage: false,
      compress: true,
    });

    fs.writeFileSync(filePath, compressBytes);

    console.log(`compressed pdf ${req.file.filename}`);
    next();
  } catch (error) {
    console.error("PDF compression failed.", error);
    next();
  }
};

module.exports = compressPdf;
