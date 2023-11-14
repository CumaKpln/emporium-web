import React, { useState } from "react";

function FilterRange() {
    let [minVal, changeMinVal] = useState(0);
    let [maxVal, changeMaxVal] = useState(0);

    return <div>
        Min value
        <input type="number" onChange={(val) => { changeMinVal(val) }} /> <br />
        Max value
        <input type="number" onChange={(val) => { changeMaxVal(val) }} />
    </div>
}

export default FilterRange;