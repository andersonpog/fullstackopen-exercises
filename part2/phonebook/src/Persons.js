import Person from "./Person"

const Persons = ({personsToShow}) => {
    return (
      <ul>
          {personsToShow.map( person => <Person key={person.name} name={person.name} phone={person.phone}/> )}
        </ul>
    )
}

export default Persons