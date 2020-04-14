import { noteData } from "./firebaseConnect";
let redux = require("redux");

const noteInitialState = {
  isEdit: false,
  editItem: {},
};
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      noteData.push(action.item);
      return state;
    case "CHANGE_EDIT_STATUS":
      // if(state.isEdit===true) return state;
      return { ...state, isEdit: !state.isEdit };
    case "GET_EDIT_DATA":
      return { ...state, editItem: action.editItem };
    case "EDIT":
      noteData.child(action.editItem.key).update({
        title: action.editItem.title,
        content: action.editItem.content,
      });
      return { ...state, editItem: {} };
    case "FORMAT_FORM":
      return { ...state, editItem: {} };
    case "DELETE":
      noteData.child(action.key).remove();
      return { ...state, editItem: action.editItem };
    default:
      return state;
  }
};
let store = redux.createStore(allReducer);
// store.subscribe(()=>console.log(store.getState()));
export default store;
