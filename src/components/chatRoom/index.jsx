import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sendMessage } from './../../slices/chatSlice';
import { Container, Card, Form, Button, Row, Col, Badge } from 'react-bootstrap';

export default function ChatRoom() {
  const { id } = useParams();
  const conversationId = parseInt(id);
  const conversation = useSelector((state) =>
    state.chat.conversations.find((c) => c.id === conversationId)
  );
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();

    if (text.trim() !== '') {
      dispatch(
        sendMessage({
          conversationId,
          message: {
            id: Date.now(),
            sender: 'You',
            text,
            timestamp: Date.now(),
          },
        })
      );
      setText('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation?.messages]);

  return (
    <Container className="py-4">
      <h2 className="mb-4">Chat with {conversation?.name}</h2>

      <Card className="mb-3 p-3" style={{ height: '400px', overflowY: 'auto' }}>
        {conversation?.messages.map((msg) => {
          const isUser = msg.sender === 'You';

          return (
            <Row key={msg.id} className="mb-2">
              <Col xs={isUser ? { span: 6, offset: 6 } : 6}>
                <div
                  className={`p-2 rounded ${
                    isUser ? 'bg-primary text-white text-center' : 'bg-light'
                  }`}
                >
                  <div className="fw-bold mb-1">{msg.sender}</div>
                  <div>{msg.text}</div>
                  <small className="text-muted">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </small>
                </div>
              </Col>
            </Row>
          );
        })}
        <div ref={messagesEndRef} />
      </Card>

      <Form onSubmit={handleSend}>
        <Row>
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Type your message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Col>
          <Col xs={3}>
            <Button variant="primary" type="submit" className="w-100">
              Send
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
