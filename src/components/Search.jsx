import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default props => {

    return (
        <ReactSearchBox
            placeholder="Placeholder"
            value="Doe"
            data={this.data}
            callback={record => console.log(record)}
        />
    )

  }