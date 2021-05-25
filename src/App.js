import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Header from "./components/header";

function App() {
	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);

	const onPageLoaded = ({ pages }) => {
		debugger;
		setNumPages(pages);
	};

	const previousPage = () => {
		setPageNumber(pageNumber - 1);
	};

	const nextPage = () => {
		setPageNumber(pageNumber + 1);
	};

	return (
		<>
			<Header prevPage={previousPage} nextPage={nextPage} />
			<Document
				file="/wwwroot/pdf/25-05-COVID-19_BOLETIM20210525.pdf"
				onLoadSuccess={onPageLoaded}
			>
				<Page pageNumber={pageNumber} />
			</Document>
		</>
	);
}

export default App;
