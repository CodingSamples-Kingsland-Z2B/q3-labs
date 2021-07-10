import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

import { Container, Card, CardContent } from '@material-ui/core';

const TodoList = ({todos}) => {

  return (
    <div>
      <Container maxWidth='md' style={{marginTop:'2rem'}}>
        <Card elevation={4}>
          <CardContent>
            <TodoItem>{todos[0]}</TodoItem>
            <TodoItem>{todos[1]}</TodoItem>
            <TodoItem>{todos[2]}</TodoItem>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default TodoList;
