import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  IconButton,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Select,
  Heading
} from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { getTasks, saveTask, updateTask, deleteTask } from '../../services/task';
import AgregarTask from './agregar';
import EditTaskModal from './editar';

const ListTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [filter, setFilter] = useState('all');
    
    const fetchTasks = async () => {
        try {
            const response = await getTasks('todas');
            setTasks(response);
        } catch (error) {
            setErrorMessage(`Error al cargar tareas: ${error.message}`);
        }
    }
    
    useEffect(() => {
        fetchTasks();
    }, []);
    
    const addTask = async (newTask) => {
        console.log(newTask)
        if (!newTask.title) {
            setErrorMessage('El título es obligatorio.');
            return;
        }
        try {
            const response = await saveTask(newTask);
            setTasks([...tasks, response]);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Error al agregar la tarea. Inténtalo nuevamente.');
        }
    }
    
    const openEditModal = (task) => {
        setEditingTask(task);
        setEditModalOpen(true);
    }
    const closeEditModal = () => {
        setEditModalOpen(false);
        setEditingTask(null);
    }
    const saveEdit = async (updatedTask) => {
        if (!updatedTask.title) {
            setErrorMessage('El título de la tarea es obligatorio.');
            return;
        }
        try {
            await updateTask(updatedTask._id, updatedTask);
            setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
            setSuccessMessage('Tarea actualizada exitosamente.');
            closeEditModal();
        } catch (error) {
            setErrorMessage(`Error al actualizar tarea: ${error.message}`);
        }
    }
    
    const removeTask = async (taskId) => {
        try {
        await deleteTask(taskId);
        setTasks(tasks.filter((task) => task._id !== taskId));
        setSuccessMessage('Tarea eliminada exitosamente.');
        } catch (error) {
        setErrorMessage(`Error al eliminar tarea: ${error.message}`);
        }
    }
    
    const closeAlert = () => {
        setErrorMessage('');
        setSuccessMessage('');
    }
    
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    })

  return (
    <Box maxWidth="800px" margin="0 auto" padding="4">
      <Heading as="h1" size="lg"textAlign="center">
        Tasks by Nataly Morales
      </Heading>
      {errorMessage && (
        <Alert status="error" >
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Box>
          <CloseButton onClick={closeAlert} />
        </Alert>
      )}
      {successMessage && (
        <Alert status="success" >
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Éxito</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Box>
          <CloseButton onClick={closeAlert} />
        </Alert>
      )}
      <AgregarTask onAddTask={addTask} />
      <Select
        placeholder="Filtrar por estado"
        mb={4}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </Select>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Tarea</Th>
            <Th>Estado</Th>
            <Th>Fecha de creación</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredTasks.map((task) => (
            <Tr key={task._id}>
              <Td>{task.title}</Td>
              <Td>
                <Checkbox isChecked={task.completed} />
              </Td>
              <Td>{new Date(task.createdAt).toLocaleString()}</Td>
              <Td>
                <HStack>
                  <IconButton
                    aria-label="Editar"
                    icon={<FaEdit />}
                    onClick={() => openEditModal(task)}
                  />
                  <IconButton
                    aria-label="Eliminar"
                    icon={<FaTrash />}
                    onClick={() => removeTask(task._id)}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {editingTask && (
        <EditTaskModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          task={editingTask}
          onSave={saveEdit}
        />
      )}
    </Box>
  );
};

export default ListTasks;
