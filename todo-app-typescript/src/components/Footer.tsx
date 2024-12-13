import React from 'react';
import { Filters } from './Filters';
import { FilterValue } from '../types';

interface Props {
	activeCount: number;
	completedCount: number;
	onClearCompleted: () => void;
	filterSelected: FilterValue;
	handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
	onClearCompleted,
	completedCount = 0,
	activeCount = 0,
	filterSelected,
	handleFilterChange,
}) => {
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>Tareas pendientes:{activeCount}</strong>
			</span>
			<Filters
				filterSelected={filterSelected}
				onFilterChange={handleFilterChange}
			/>
		</footer>
	);
};
