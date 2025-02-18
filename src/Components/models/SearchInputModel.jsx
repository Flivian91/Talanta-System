import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchInputModel() {
  return (
    <div className='fixed top-20 left-1/2 transform -translate-x-1/2 bg-white w-1/2 z-50  shadow-md'>
      {/* Search Area */}
      <div>
        <button>
          <AiOutlineSearch size={20} />
        </button>
      </div>
      {/* Suggestion results Area */}
    </div>
  )
}

export default SearchInputModel
