import React from "react";
import Pdf from "./components/pdf";

function App() {
	const files = require.context("../public/", false, /\.pdf$/);
	const fileKeys = files.keys();

	return (
		<div style={{ width: 600 }}>
			{fileKeys.map((fileKey) => {
				return <Pdf key={fileKey} fileName={fileKey} />;
			})}
		</div>
	);
}

export default App;
