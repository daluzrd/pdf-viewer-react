import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";

export default function Pdf({ fileName }) {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const previousPage = () => {
		if (pageNumber > 1) setPageNumber(pageNumber - 1);
	};

	const nextPage = () => {
		if (pageNumber < numPages) setPageNumber(pageNumber + 1);
	};

	return (
		<>
			<nav>
				<button onClick={previousPage}>Previous</button>
				<button onClick={nextPage}>Next</button>
			</nav>
			<Document file={fileName} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				{pageNumber} of {numPages}
			</p>
		</>
	);
}
