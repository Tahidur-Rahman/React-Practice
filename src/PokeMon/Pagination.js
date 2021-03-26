import React from 'react'

function Pagination({prevPage,nextPage}) {
    return (
        <div>
           {prevPage && <button onClick={prevPage}>Previous</button>}
            {nextPage && <button onClick={nextPage}>Next</button>}
        </div>
    )
}

export default Pagination
