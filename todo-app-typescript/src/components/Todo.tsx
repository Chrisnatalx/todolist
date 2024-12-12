import React from 'react';
import { type TodoId, Todo as TodoTypes } from '../types';

interface Props extends TodoTypes {
	onRemoveTodo: ({ id }: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
	id,
	title,
	completed,
	onRemoveTodo,
}) => {
	return (
		<div className="view">
			<input className="toggle" checked={completed} type="checkbox" />
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
