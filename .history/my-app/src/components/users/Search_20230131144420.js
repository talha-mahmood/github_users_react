import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div>
        <form className='form'>
            <input type="text" name="text" placeholder='Search Users..'/>
            <input type="submit" classname="" value="Search">
            
        </form>

      </div>
    )
  }
}

export default Search