import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

function FormTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <Form onSubmit={ handleSubmit }> 
		<Form.Control
			type="text"
			className="input"
			value={value}
			onChange={e => setValue(e.target.value)}
			placeholder="Adicionar uma tarefa"
		/>
      <Button className="button" variant="primary mb-3" type="submit">Adicionar</Button>
    </Form>
  );
}

export default FormTask;