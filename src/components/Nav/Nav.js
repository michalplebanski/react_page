import React from 'react';

const Nav = (props) => {
	return (
		<nav>
			<ul>
				{props.navItems.map((item) =>
					<li key={item.key}>
						<a href={item.src}>{item.name}</a>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Nav;