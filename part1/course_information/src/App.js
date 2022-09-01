import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of react',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
}

  return (
    <div>
      <Header course = {course.name}/>
      <Content content = {course.parts} />
      <Total total = {course.parts} />
    </div>
  )
}

export default App;
