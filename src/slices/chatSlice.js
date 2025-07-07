import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversations: [
    {
      id: 1,
      name: 'Arun',
      messages: [
        { id: 1, sender: 'Arun', text: 'Hi there!', timestamp: Date.now() },
      ],
    },
    {
      id: 2,
      name: 'Bhuvan',
      messages: [
        { id: 1, sender: 'Bhuvan', text: 'Hey!', timestamp: Date.now() },
      ],
    },
    {
      id: 3,
      name: 'Tamilselvan',
      messages: [
        { id: 1, sender: 'Tamilselvan', text: 'Hi there!', timestamp: Date.now() },
      ],
    }
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage(state, action) {
      const { conversationId, message } = action.payload;
      const conv = state.conversations.find((c) => c.id === conversationId);
      if (conv) {
        conv.messages.push(message);
      }
    },
    receiveMessage(state, action) {
      const { conversationId, message } = action.payload;
      const conv = state.conversations.find((c) => c.id === conversationId);
      if (conv) {
        conv.messages.push(message);
      }
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
