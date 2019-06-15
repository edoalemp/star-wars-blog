const getState = ({ getStore, setStore }) => {
	return {
		store: {
			obj: {},
			preobj: {}
		},
		actions: {
			fetchget: urlstring => {
				const store = getStore();

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
						console.log("GET");
						console.log(data);
						store.preobj = store.obj;
						store.obj = data;
						setStore(store);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
