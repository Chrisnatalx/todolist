import { useState } from 'react';
import './App.css';
import { Todos } from './components/Todos';
import { FilterValue, TodoId, Todo as TodoType, TodoTitle } from './types';
import { Footer } from './components/Footer';
import { TODO_FILTERS } from './const';
import { Header } from './components/Header';
const mockTodos = [
	{
		id: '1',
		title: 'todo 1',
		completed: false,
	},
	{
		id: '3',
		title: 'todo 3',
		completed: false,
	},
	{
		id: '2',
		title: 'todo 2',
		completed: false,
	},
];

const App = (): JSX.Element => {
	const [todos, setTodos] = useState(mockTodos);
	const [filterSelected, setFilterSelected] = useState<FilterValue>(
		TODO_FILTERS.ALL
	);

	const handleRemove = ({ id }: TodoId) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const handleCompleted = ({
		id,
		completed,
	}: Pick<TodoType, 'id' | 'completed'>): void => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const handleFilterChange = (filter: FilterValue): void => {
		setFilterSelected(filter);
	};

	const filteredTodos = todos.filter((todo) => {
		if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
		if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
		return todo;
	});

	const handleRemoveAllCompleted = (): void => {
		const newTodos = todos.filter((todo) => !todo.completed);
		setTodos(newTodos);
	};

	const handleAddTodo = ({ title }: TodoTitle): void => {
		const newTodo = {
			title,
			id: crypto.randomUUID(),
			completed: false,
		};
		const newTodos = [...todos, newTodo];
		setTodos(newTodos);
	};
	const activeCount = todos.filter((todo) => !todo.completed).length;
	const completedCount = todos.length - activeCount;
	return (
		<div className="todoapp">
			<Header onAddTodo={handleAddTodo} />
			<Todos
				todos={filteredTodos}
				onRemoveTodo={handleRemove}
				onToggleCompleted={handleCompleted}
			/>
			<Footer
				activeCount={activeCount}
				filterSelected={filterSelected}
				completedCount={completedCount}
				handleFilterChange={handleFilterChange}
				onClearCompleted={handleRemoveAllCompleted}
			/>
		</div>
	);
};

export default App;
