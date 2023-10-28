import React from 'react';
import './pagination.scss'
import ReactPaginate from 'react-paginate';
export const Pagination =({value,OnChage})=>{
    return(
        <div>
            <ReactPaginate
            className='root1'
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={(event)=>OnChage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={value-1}
    
        renderOnZeroPageCount={null}
      />
        </div>
    )
}