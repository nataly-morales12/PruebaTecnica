import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const EditTaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [title, setTitle] = React.useState(task?.title || '');
  const [description, setDescription] = React.useState(task?.description || '');
  const [completed, setCompleted] = React.useState(task?.completed || false);

  React.useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCompleted(task.completed);
    }
  }, [task]);

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      completed,
    };
    onSave(updatedTask);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Tarea</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Título</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título de la tarea"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Descripción</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción de la tarea"
            />
          </FormControl>
          <FormControl display="flex" alignItems="center" mb={4}>
            <Checkbox
              isChecked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            >
              Completada
            </Checkbox>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleSave}>
            Guardar cambios
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTaskModal;