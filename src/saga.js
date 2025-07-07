import { all, takeEvery, put, delay, select } from 'redux-saga/effects';
import { sendMessage, receiveMessage } from './slices/chatSlice';

function* handleSendMessage(action) {
  const { conversationId } = action.payload;

  yield delay(1000);

  const conversation = yield select((state) =>
    state.chat.conversations.find((c) => c.id === conversationId)
  );

  if (conversation) {
    yield put(
      receiveMessage({
        conversationId,
        message: {
          id: Date.now(),
          sender: conversation.name,
          text: 'This is an auto-reply - dummy msg',
          timestamp: Date.now(),
        },
      })
    );
  }
}

export default function* rootSaga() {
  yield all([takeEvery(sendMessage.type, handleSendMessage)]);
}
