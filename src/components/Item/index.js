import React from "react";
import "./item.scss";

import Highlight from "react-highlight.js";

const checkClick = e => {
	if (e.currentTarget.style.maxHeight == "40px") {
		e.currentTarget.style.maxHeight = "600px";
	} else {
		e.currentTarget.style.maxHeight = "40px";
	}
};

const handleChild = e => {
	e.stopPropagation();
};

const itemColor = (occ, count) => {
	let obj;

	if (occ == 0 && count == 0) {
		obj = { maxHeight: "40px", backgroundColor: "rgba(255, 255, 255, 0.3)" };
	} else {
		obj = { maxHeight: "40px" };
	}

	return obj;
};

const Item = props => (
	<div id="fix" onClick={checkClick} style={itemColor(props.occurrences, props.count)}>
		<div className="info">{props.info || "Description not supplied"}</div>
		<div className={props.fixcolor} title={"Displayed: " + props.occurrences + " | Found: " + props.count}>
			{props.occurrences != props.count ? props.diff : props.occurrences}
		</div>
		<div className="show-fix-contain" onClick={handleChild}>
			<div>
				<b style={{ userSelect: "none" }}>Search:</b>
				<Highlight language="html" style={{ whiteSpace: "normal", marginTop: "-5px" }}>
					{props.search}
				</Highlight>
			</div>

			<div>
				<b style={{ userSelect: "none" }}>Replace:</b>
				<Highlight language="html" style={{ whiteSpace: "normal", marginTop: "-5px" }}>
					{props.replace}
				</Highlight>
			</div>
		</div>
	</div>
);

export default Item;
