import React from 'react';
import { Todo as TodoTypes } from '../types';

type Props = TodoTypes;

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
	return (
		<div className="view">
			<input className="toggle" checked={completed} type="checkbox" />
			<label>{title}</label>
		</div>
	);
};
