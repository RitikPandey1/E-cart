import React from 'react';
import spinner from './spinner2.gif';

export default () => {
	return (
		<div style={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto' }}>
			<img
				src={spinner}
				alt='Loading...'
				style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
			/>
		</div>
	);
};
