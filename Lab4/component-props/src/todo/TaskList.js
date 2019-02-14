import React, { Component } from 'react'
import { Table } from 'reactstrap'

class TaskList extends Component {
    render() {
        if (this.props.code)
            return (
                <Table border="1" width='50%' align="center">
              <thead>
                <tr>
                  <th>ชื่อ</th>
                  <th>รหัส</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.code.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.codeNumber}</td>
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