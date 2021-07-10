import React , {Component} from 'react'
import { Card, CardContent , IconButton} from '@material-ui/core'; 
import DeleteIcon from '@material-ui/icons/Delete';
import './TodoItem.css';

// const TodoItem = (props) => {
//   return (

//     <Card elevation={2} className="Todo">
//       <CardContent>
//           {props.children}
//       </CardContent>
//     </Card>
//   )
// }

class TodoItem extends Component{


  render(){
    return (
      <Card elevation={2} className="Todo">
        <CardContent className="todo-item">
            {this.props.children}
            <IconButton color="inherit">
              <DeleteIcon/>
            </IconButton>
        </CardContent>
      </Card>
    )
  }

}




export default TodoItem
