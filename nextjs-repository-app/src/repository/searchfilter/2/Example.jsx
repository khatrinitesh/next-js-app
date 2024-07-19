import React from 'react'

const Example = (props) => {
    const [searchVal, setSearchVal] = React.useState('');

    const handleChange = (e) => {
        setSearchVal(e.target.value)
    }

    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchVal)
    });

    const handleClearBtn  =() => {
        setSearchVal('');
    }
  return (
    <>
     <div className='container'>
      <div className='input-wrap'>
        <i className="fas fa-search"></i>
        <label 
          for="product-search" 
          id="input-label"
        >
          Product Search
        </label>
        <input 
          onChange={handleChange}
          value={searchVal}
          type="text" 
          name="product-search" 
          id="product-search" 
          placeholder="Search Products"
        />
        <i 
          onClick={handleClearBtn}
          className="fas fa-times"
        ></i>
      </div>
      <div className="results-wrap">
        <ul>
          {filteredProducts.map((product) => {
            return <li key={product} className='list-item'><a href='#'>{product}</a></li>
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Example