import React, {useState} from 'react'
import { Container , Card, CardContent,  TextField, Typography, Button} from '@material-ui/core' 
import './AddForm.css';

const AddForm = (props) => {
  
  const [isValid, setIsValid] = useState(true)


  const submitHandler = (e)=>{

    e.preventDefault();
    const todo = e.target.todo.value;
    if(todo !==''){
      setIsValid(true)
      props.addTodo(todo);
      
    }else{
      setIsValid(false)
    }
  }

  let userInput =  <TextField  label="Todo" placeholder="Enter Todo" variant="outlined" className="input-field" name="todo"/> ; 
  if(!isValid){
    userInput =   <TextField  label="Todo" placeholder="Enter Todo" variant="outlined" className="input-field" name="todo" error helperText="Please provide Todo"/>
  }

  return (
    <Container maxWidth="md" >
      <Card className="AddForm" elevation={4}>
        <CardContent>
        <Typography variant="h4" align="center" color="primary" gutterBottom>ADD TODO</Typography>
        <form onSubmit={submitHandler}>
            {userInput}
          <Button type="submit" variant="contained" color="primary" className="btn" >ADD</Button>
        </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default AddForm
