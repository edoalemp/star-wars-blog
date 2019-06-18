const getState = ({ getStore, setStore }) => {
	return {
		store: {
			obj: {},
			preobj: {}
		},
		actions: {
			fetchget: urlstring => {
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
							preobj: getStore().obj,
							obj: data
						});
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
