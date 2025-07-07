import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';

export default function ChatList() {
  const navigate = useNavigate();
  const conversations = useSelector((state) => state.chat.conversations);

  return (
    <Container className="py-5">
      <h2 className="mb-4">Chat List</h2>
      <ListGroup>
        {conversations.map((conv) => {
          const lastMsg = conv.messages[conv.messages.length - 1];
          return (
            <ListGroup.Item
              key={conv.id}
              action
              onClick={() => navigate(`/chat/${conv.id}`)}
              className="mb-2 shadow-sm"
            >
              <Card>
                <Card.Body>
                  <Card.Title className="mb-1">{conv.name}</Card.Title>
                  <Card.Text className="mb-1 text-muted">
                    {lastMsg?.text || 'No messages yet'}
                  </Card.Text>
                  <small className="text-secondary">
                    {lastMsg
                      ? new Date(lastMsg.timestamp).toLocaleString()
                      : ''}
                  </small>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}
