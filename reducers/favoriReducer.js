const favoriReducer = (state={},action) => {

	switch(action.type)
	{
		case 'TOGGLE_FAVORIS' :

		{
			
			const { favMovies } = state;
			// copy of favMovies
			let newfavMovies = favMovies.slice();
			const id = action.payload;
			// Check if id is present in favMovies
			const index = newfavMovies.indexOf(id)
			if(index > -1)
			{
				// it is present, let's remove it
				newfavMovies.splice(index,1);
			}
			else
			{
				// It is not present
				newfavMovies.push(id);
			}

			// short syntax : favMovies.indexOf(id) > -1 ? favMovies.splice(index,1) : favMovies.push(id)

			return {...state, favMovies:newfavMovies}
		}
	

		default :
		return state

	}

}

export default favoriReducer;