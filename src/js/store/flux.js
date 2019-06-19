const getState = ({ getStore, setStore }) => {
	return {
		store: {
			obj: {},
			details: {},
			favoritos: {}
		},
		actions: {
			fetchget: urlstring => {
				//let tempstore = getStore();
				fetch(urlstring, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({
							obj: data
						});
					})
					.catch(error => {
						console.log(error);
					});
			},
			setdetails: arraydetails => {
				setStore({ details: arraydetails });
			},
			setfavorites: () => {}
		}
	};
};

export default getState;
