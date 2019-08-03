import React,{useState} from 'react';

const InputBar = props => {
	
	//Using State
	const [term,setTerm] = useState("");

	//For Update item in state
	const onChangeTerm = e => {
    	setTerm(e.target.value);
  	};

  	//When we Click on add Button
  	const onFormSubmit = e => {
    	e.preventDefault();
    	props.setList(term);
    	setTerm("");
 	};

	return (
		<form onSubmit={onFormSubmit} className="search-form">
	        <input className="search-bar" value={term} onChange={onChangeTerm}/>
	        <a onClick={onFormSubmit} className="search-button">Add</a>
    	</form>
	);
}

export default InputBar;