import {useState} from "react";
import Sort from './Sort';
function Filters({categories, activeIndex}) {

    const [activeSpan, setActiveSpan] = useState(activeIndex);


    return (
        <div className="filter">
                <div className="filters">
                    {
                        categories.map((cat, i) => <span key={i} className={activeSpan == i ? "active" : ""} onClick={() => setActiveSpan(i)}>{cat.toUpperCase()}</span>)
                    }
                </div>
                {/* {Sort(["по количеству мест", "по популярности", "по дате", "по цене"])} */}
                <Sort sorts={["по количеству мест", "по популярности", "по дате", "по цене"]}/>
            </div>
    );
}


export default Filters;