const getState = ({ getStore, setStore }) => {
	return {
		store: {
			obj: {},
			preobj: {},
			cond: ""
		},
		actions: {
			fetchget: urlstring => {
				const tstore = getStore();
				console.log(tstore);
				console.log("ok");
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
						tstore.preobj = tstore.obj;
						tstore.obj = data;
						console.log(tstore);
						setStore({
							preobj: tstore.preobj,
							obj: tstore.obj
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
