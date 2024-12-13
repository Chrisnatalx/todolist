import React from 'react';
import { TodoTitle } from '../types';
import { CreateTodo } from './CreateTodo';

interface Props {
	onAddTodo: ({ title }: TodoTitle) => void;
}
export const Header: React.FC<Props> = ({ onAddTodo }) => {
	return (
		<header className="header">
			<h1>
				todo
				<img
					src="data:image/png;base64,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"
					style={{ width: '60px', height: 'auto', filter: 'invert(1)' }}
					alt="Typescript image"
				/>
			</h1>
			<CreateTodo saveTodo={onAddTodo} />
		</header>
	);
};
