import React from "react";

function Header({ prevPage, nextPage }) {
	return (
		<>
			<button onClick={prevPage}>Previous</button>
			<button onClick={nextPage}>Next</button>
		</>
	);
}

export default Header;
