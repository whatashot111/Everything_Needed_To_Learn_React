const initialState = {
    subscribersList: [
        { id: 1, name: "Harsh Shukla", phone: "8319610356" },
        { id: 2, name: "Harsh Shukla", phone: "8989890338" },
        { id: 3, name: "Harsh Shukla", phone: "8098666388" },
    ]
}

export default function contactReducer(store = initialState, action) {
    switch (action.type) {
        case "ADD_SUBSCRIBER":
            const newContactObj = {
                id: new Date(),
                name: action.payload.name,
                phone: action.payload.phone,
            };
            return { ...store, subscribersList: [...store.subscribersList, newContactObj] }
        case "DELETE_SUBSCRIBER":
            const filteredSubscribersList = store.subscribersList.filter(
                (contact) => contact.id !== action.payload.id
            );
            return { ...store, subscribersList: filteredSubscribersList };
        default:
            return store;
    }
}