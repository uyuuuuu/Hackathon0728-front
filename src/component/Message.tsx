import {
  Box,
  FormControl,
  Input,
  VStack,
  Text,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type Message = {
  message: string;
  userName: string;
};

function Message() {
  const location = useLocation();
  const { userName } = location.state || { userName: "なずな" }; // デフォルトは「leona」
  const [messages, setMessages] = useState<Message[]>([
    { message: "こんにちは！", userName: "なずな" },
    { message: "こんにちは！こちらは相手です。", userName: "相手" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // メッセージリストの自動スクロール
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        message: inputMessage,
        userName,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <VStack align="center" justify="center" spacing={4} p={4} bg="white">
      <Box
        bg="white"
        p={6}
        borderRadius="md"
        w="full"
        maxW="1000px"
        overflowY="auto"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          なんでも掲示板
        </Text>
        <Box
          overflowY="auto"
          border="1px"
          borderColor="gray.200"
          p={2}
          maxHeight="600px"
          height="600px"
        >
          {messages.map((message, index) => (
            <Box
            key={index}
            mb={1}
            display="flex"
            alignItems="center"
            justifyContent={
              message.userName === userName ? "flex-end" : "flex-start"
            }
          >
            {message.userName !== userName && (
              <Avatar name={message.userName} size="sm" mr={2} />
            )}
            <Box
              bg={message.userName === userName ? "blue.100" : "gray.100"}
              p={2}
              borderRadius="md"
              maxW="70%"
              textAlign={message.userName === userName ? "right" : "left"}
              display="flex"
              alignItems="center"
            >
              <Text>
               {message.message}
              </Text>
            </Box>
            {message.userName === userName && (
              <Avatar name={message.userName} size="sm" ml={2} />
            )}
          </Box>
          ))}
          <div ref={messagesEndRef} />
        </Box>
        <Box
          maxW="1000px"
          bottom={0}
          left={0}
          right={0}
          bg="white"
          p={4}
          borderTop="1px"
          borderColor="gray.200"
        >
          <form onSubmit={sendMessage}>
            <FormControl display="flex">
              <Input
                variant="outline"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="メッセージを入力..."
                mr={2}
                flexGrow={1}
              />
              <IconButton
                type="submit"
                colorScheme="blue"
                aria-label="Send message"
                icon={<ChatIcon />}
              />
            </FormControl>
          </form>
        </Box>
      </Box>
    </VStack>
  );
}

export default Message;
