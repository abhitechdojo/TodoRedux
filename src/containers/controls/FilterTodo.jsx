import React, {PropTypes} from 'react';

const FilterTodo = ({visibilityStates, onFilterClick}) => {
	return (
		<div>
			<div style={{float:'left'}}> Show:&nbsp;</div>
			{visibilityStates.map((visState)=> {
				return (
					<div key={visState} style={{float:'left'}}>
						<a key={visState} href="#" onClick={e => {
							e.preventDefault();
							onFilterClick(visState)}}>{visState.toLowerCase().replace('show_', '')}
						</a>
						&nbsp;&nbsp;&nbsp;
					</div>
				)
			})}
		</div>
	)
}

FilterTodo.propTypes = {
	visibilityStates: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	onFilterClick: PropTypes.func.isRequired
}

export default FilterTodo;
