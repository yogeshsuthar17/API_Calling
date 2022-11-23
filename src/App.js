import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {myap:[]}
  }

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(pr => pr.json())
  .then(pr => {
    // console.table(response)
    this.setState({myap:pr})
      
  })
  
}
render()
{
  return(
    <div>
   {/* {JSON.stringify(this.state.myap)} */}
   {this.state.myap.map(val=>(
    <>
      <table>
        <tbody>
  
        <tr>
          <td>{val.id}&nbsp;&nbsp;</td>
          <td>{val.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>{val.email}</td>
        
        </tr>
        </tbody>
      </table>
   
    <br/>
    </>
   ))}
    </div>)
    
}
}



export default App;
