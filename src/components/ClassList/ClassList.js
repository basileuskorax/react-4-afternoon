import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ClassList extends Component {

componentDidMount() {
  axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then((res) => {
    this.setState({
      students: res.data
    })
  })
}

  constructor() {
    super()
    this.state = {
      students: []
    }
    
  }

  render() {

    const studentsArray = this.state.students.map((e,i) => <Link to={`/student/${e.id}`} key={i}><h3>
    {e.first_name} {e.last_name}</h3></Link>
  )

    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {studentsArray}
      </div>
    )
  }
}