import React from 'react';

const NoResults = ({ clearFilters }) => {
	return (
		<p 
			style={{
				fontSize: 12,
				textAlign: 'center',
			}}
		>
			Sorry, there are no results that match your filters. 
			<span 
				style={{fontWeight: 'bold', cursor:'pointer'}} 
				onClick={() => clearFilters()}
				>
					&nbsp;Clear Filters
			</span>
		</p>
	)
}

export default NoResults;