import { useState } from "react";

function Sort({sorts}) {

    const [activeSort, setActiveSort] = useState(0);
    // true - открыто, false - закрыто
    const [isOpen, setIsOpen] = useState(false);


    const changeSort = (i) => {
        setActiveSort(i);
        setIsOpen(false);
    }

    return (<div className="sort">
    <span onClick={() => setIsOpen(true)}>{sorts[activeSort].toUpperCase()} <i className="fa-solid fa-chevron-down"></i></span>

{/* isOpen = true -> отображение
isOpen = false -> не отображение */}

    {
        isOpen && 
        <div className="select-sort">
            {
                sorts.map((s, i) => <div key={i} onClick={() => changeSort(i)}>{s.toUpperCase()}</div>)
            }
        </div>
    }
</div>);
}

export default Sort;