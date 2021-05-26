import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";

export default function Pdf({ fileName }) {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const previousButton = useRef(null);
	const nextButton = useRef(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const previousPage = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		}
	};

	const nextPage = () => {
		if (pageNumber < numPages) {
			setPageNumber(pageNumber + 1);
		}
	};

	useEffect(() => {
		if (previousButton) {
			if (pageNumber === 1) previousButton.current.disabled = true;
			else previousButton.current.disabled = false;
		}

		if (nextButton) {
			if (pageNumber === numPages) nextButton.current.disabled = true;
			else nextButton.current.disabled = false;
		}
	}, [pageNumber, numPages]);

	return (
		<>
			<nav>
				<button ref={previousButton} onClick={previousPage}>
					Previous
				</button>
				<button ref={nextButton} onClick={nextPage}>
					Next
				</button>
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
