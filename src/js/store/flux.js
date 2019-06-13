const getState = ({ getStore, setStore }) => {
	return {
		store: {
			obj: {},
			url: ""
		},
		actions: {
			seturl: urlstring => {
				const store = getStore();
				setStore({ url: urlstring });
			}

			//string => this.store.setState({ url: string })

			/*			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
*/
		}
	};
};

export default getState;
