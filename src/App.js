import React, {useState} from "react";
import "./app.scss";
import {getRandomColor,createImageFromInitials, genCharArray} from './Components/Utils'
function App() {
	let name = useState()
	let imgSrc = {};
	const alphabet = genCharArray('a', 'z');

	return (
		<div>
			<input type="text" onInput={(e) => name = e.target.value} />
			{ alphabet.map((letter) => (
				<img
					id='preview'
					src={
						createImageFromInitials(500, letter, getRandomColor(), imgSrc)
					}
					alt='profile-pic'
				/>
			))}
		</div>
	);
}

export default App;
