const Header = (props) => {
  return (
    <>
    <p>
      {props.course.name}
    </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <p>
      {props.part.parts[0].name}: {props.part.parts[0].exercises}
    </p>
    <p>
      {props.part.parts[1].name}: {props.part.parts[1].exercises}
    </p>
    <p>
      {props.part.parts[2].name}: {props.part.parts[2].exercises}
    </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      Total exercises: {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
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
        <Header course={course} />
        <Content part={course} />
        <Total total={course} />
    </div>
  )
}

export default App