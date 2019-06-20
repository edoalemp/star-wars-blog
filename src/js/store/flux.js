const getState = ({ getStore, setStore }) => {
	return {
		store: {
			obj: {},
			details: {},
			favorites: []
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
			viewdetails: objdetails => {
				setStore({ details: objdetails });
			},
			setfavorites: obj => {
				let tempstore = getStore();
				let newitem = true;

				console.log(tempstore.favorites);
				if (tempstore.favorites.length >= 0) {
					for (let i = 0; i <= tempstore.favorites.length - 1; i++) {
						console.log(obj);
						console.log(tempstore.favorites[i]);
						if (obj === tempstore.favorites[i]) {
							newitem = false;
							break;
						}
					}
				}
				if (newitem) {
					tempstore.favorites.push(obj);
					setStore({ favorites: tempstore.favorites });
				}
			}
		}
	};
};

export default getState;
