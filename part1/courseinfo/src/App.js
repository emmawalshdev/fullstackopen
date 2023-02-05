const Header = (props) => {
  return (
    <>
    {props.course}
    </>
  )

}

const Content = (props) => {
  return (
    <>
    {props.part}
    </>
  )
}

const Total = (props) => {
  return (
    <>
    {props.total}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>
        <Header course={course} /></h1>
      <p>
        <Content part={part1}/> : <Total total={exercises1}/>
      </p>
      <p>
        <Content part={part2}/> : <Total total={exercises2}/>
      </p>
      <p>
        <Content part={part3}/> : <Total total={exercises3}/>
      </p>
    </div>
  )
}

export default App