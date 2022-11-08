const Filter = ({nameFilter, handleNameFilterChange}) => {
    return ( 
        <div>
        filter show with: <input
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
      </div>
     )
}
 
export default Filter;