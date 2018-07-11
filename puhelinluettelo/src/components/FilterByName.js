import React from 'react'


const FilterByName = ({handler}) => {
    return(
      <form>
      <div>
        rajaa näytettäviä :
        <input name="filter" onChange={handler.handleChange} />
      </div>
    </form>
    )
  }

export default FilterByName;