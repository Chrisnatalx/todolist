import React from 'react';
import { type TodoId, Todo as TodoType } from '../types';

interface Props extends TodoType {
	onRemoveTodo: ({ id }: TodoId) => void;
	onToggleCompleted: ({
		id,
		completed,
	}: Pick<TodoType, 'id' | 'completed'>) => void;
}

export const Todo: React.FC<Props> = ({
	id,
	title,
	completed,
	onRemoveTodo,
	onToggleCompleted,
}) => {
	const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onToggleCompleted({
			id,
			completed: event.target.checked,
		});
	};

	return (
		<div className="view">
			<input
				className="toggle"
				checked={completed}
				type="checkbox"
				onChange={handleCheckBox}
			/>
			<label>{title}</label>
			<button
				className="destroy"
				onClick={() => {
					onRemoveTodo({ id });
				}}
			></button>
		</div>
	);
};
