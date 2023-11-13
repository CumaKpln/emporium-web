import React from "react";

function FilterButton({ name, options }) {
    return (<div className="FilterButton"> {name}
        {options.map((o) =>
            (<button> {o} </button>)
        )}
    </div>);
}

export default FilterButton;