import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postUser = createAsyncThunk('userReducer/fetchUser', async () => {
  const user = await axios.post('http://localhost:3001/RestDataFormats_Obj', {
    type: 'User',
  });
  return user.data;
});
export const userSlice = createSlice({
  name: 'userReducer',
  initialState: {
    obj: {},
    status: null,
  },
  reducers: {
    //Settimg for all values of user_reducer.
    setValues: (state, action) => {
      state.obj = action.payload;
      //window.localStorage('user', state);
    },
    setValuesByKey: (state, action) => {
      state.obj[action.payload['key']] = action.payload['value'];
      /*switch (action.payload['key']) {
        case 'firstName':
          state.obj.firstName = action.payload['value'];
          break;
        case 'lastName':
          state.obj.lastName = action.payload['value'];
          break;
        case 'email':
          state.obj.email = action.payload['value'];
          break;
        case 'phoneNumber':
          state.obj.phoneNumber = action.payload['value'];
          break;
        case 'password':
          state.obj.password = action.payload['value'];
          break;
        default:
          throw new Error();
      }*/
    },
    //Add and delete friends.
    addFriend: (state, action) => {
      switch (action.payload['key']) {
        case 'add':
          state.obj.friendsList[action.payload['value'].phoneNumber] =
            action.payload['value'];
          break;
        case 'remove':
          state.obj.friendsList[action.payload['value'].phoneNumber] = null;
          break;
        default:
          throw new Error();
      }
    },
    addOrder: (state, action) => {
      switch (action.payload['key']) {
        case 'add':
          state.obj.savedOrderList[action.payload['value'].phoneNumber] =
            action.payload['value'];
          break;
        case 'remove':
          state.obj.savedOrderList[action.payload['value'].phoneNumber] = null;
          break;
        default:
          throw new Error();
      }
    },
  },
  extraReducers: {
    [postUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postUser.fulfilled]: (state, action) => {
      state.obj = action.payload.obj;
      state.status = 'success';
    },
    [postUser.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { setValuesByKey, setValues, addFriend } = userSlice.actions;
export default userSlice.reducer;
