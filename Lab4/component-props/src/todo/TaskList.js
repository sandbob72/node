import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Github from './Github'

class TaskList extends Component {
    render() {
        if (this.props.code)
            return (
                <Table border="1" width='50%' align="center">
              <thead>
                <tr>
                  <th>ชื่อ-นามสกุล</th>
                  <th>รหัสนักศึกษา</th>
                  <th>Github</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.code.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.codeNumber}</td>
                        <td><Github/></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
                   )
    }
}

export default TaskList