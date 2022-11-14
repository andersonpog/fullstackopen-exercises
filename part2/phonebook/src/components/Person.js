const Person = ({person, handleDelete}) => {
    return(
        <li>{person.name} {person.number} <button value={person.id} onClick={handleDelete} >Delete</button> </li>
    )
}

export default Person