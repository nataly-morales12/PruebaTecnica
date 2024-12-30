import React, { useState } from 'react';
import { VStack, Input, Textarea, Button, Box } from '@chakra-ui/react';

const AgregarTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (!title) {
      alert('El título es obligatorio');
      return;
    }
    const newTask = {
      title,
      description,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="sm"
      backgroundColor="white"
    >
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="lg"
          focusBorderColor="teal.500"
        />
        <Textarea
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          size="lg"
          focusBorderColor="teal.500"
        />
        <Button
          colorScheme="teal"
          size="lg"
          onClick={handleAddTask}
        >
          Agregar tarea
        </Button>
      </VStack>
    </Box>
  );
};

export default AgregarTask;