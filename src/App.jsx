const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} number of excercices {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part = {props.part1} exercises = {props.exercises1}></Part>
      <Part part = {props.part2} exercises = {props.exercises2}></Part>
      <Part part = {props.part3} exercises = {props.exercises3}></Part>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of excercices {props.totalE} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const ejer1 = part1.exercises
  const ejer2 = part2.exercises
  const ejer3 = part3.exercises
  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1.name} exercises1 = {ejer1} part2 = {part2.name} exercises2 = {ejer2} part3 = {part3.name} exercises3 = {ejer3}/>
      <Total totalE = {ejer1 + ejer2 + ejer3}/>
    </div>
  )
}

export default App