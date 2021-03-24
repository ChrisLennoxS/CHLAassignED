import React, { createContext, useMemo, useState } from 'react';


export const CurrentUser = createContext({
	setCurrentUser: () => {},
	currentUser: 'none',
});

export const CurrentUserProvider = (props) => {
	const [value, setValue] = useState("nonwhe");

	const userValue = useMemo(() => ({ value, setValue }), [value, setValue]);

	return (
		<CurrentUser.Provider value={{value, setValue}}>
			{props.children}
		</CurrentUser.Provider>
	);
};
