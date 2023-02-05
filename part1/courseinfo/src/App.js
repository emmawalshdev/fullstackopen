const Header = (props) => {
  return (
    <>
    {props.course}
    </>
  )

}

const Part = (props) => {
  return (
    <>
    {props.part}: {props.exercise}
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <p>
      <Part part={props.part[0]} exercise={props.exercise[0]}/>
    </p>
    <p>
      <Part part={props.part[1]} exercise={props.exercise[1]}/>
    </p>
    <p>
      <Part part={props.part[2]} exercise={props.exercise[2]}/>
    </p>
    </>
  )
}

const Total = (props) => {
  let arr = props.total

  let sum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <p>
      Number of excercises: {sum}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React','Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
        <Header course={course} />
        <Content part={parts} exercise={exercises}/>
        <Total total={exercises}/>
    </div>
  )
}

export default App