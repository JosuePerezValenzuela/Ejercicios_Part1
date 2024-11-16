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
  const elements = [];
  
  props.parts.forEach(item => {
    elements.push(<Part part = {item.name} exercises = {item.exercises} key = {item.name}></Part>);
  });

  return(
    <div>
      {elements}
    </div>
  )
}

const Total = (props) => {
  let sumatoria = 0
  props.parts.forEach(item => {
    sumatoria += item.exercises;
  });

  return(
    <div>
      <p>Number of excercices {sumatoria} </p>
    </div>
  )
}

const App = () => {
  const course ={
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
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
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App