import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user_reducer',
  initialState: {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    friendsList: {},
    savedOrderList: {},
  },
  reducers: {
    //Settimg for all values of user_reducer.
    setValues: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
    },
    setValuesByKey: (state, action) => {
      switch (action.payload['key']) {
        case 'name':
          state.name = action.payload['value'];
          break;
        case 'email':
          state.email = action.payload['value'];
          break;
        case 'phoneNumber':
          state.phoneNumber = action.payload['value'];
          break;
        case 'password':
          state.password = action.payload['value'];
          break;
        default:
          throw new Error();
      }
    },
    //Add and delete friends.
    addFriend: (state, action) => {
      switch (action.payload['key']) {
        case 'add':
          state.friendsList[action.payload['value'].phoneNumber] =
            action.payload['value'];
          break;
        case 'remove':
          state.friendsList[action.payload['value'].phoneNumber] = null;
          break;
        default:
          throw new Error();
      }
    },
    addOrder: (state, action) => {
      switch (action.payload['key']) {
        case 'add':
          state.savedOrderList[action.payload['value'].phoneNumber] =
            action.payload['value'];
          break;
        case 'remove':
          state.savedOrderList[action.payload['value'].phoneNumber] = null;
          break;
        default:
          throw new Error();
      }
    },
  },
});

export const { setValuesByKey, setValues, addFriend } = userSlice.actions;
export default userSlice.reducer;
