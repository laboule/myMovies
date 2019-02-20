export const toogleFavoris = (id) => {
	type:'TOGGLE_FAVORIS',
	payload:id
}


// with thunk, dispatch directly here, no need to do a mapDispatchToProps in
// view container