declare module "@talkjs/react" {
  import Talk from "talkjs";

  export const Session: any;
  export const Chatbox: any;

  interface ChatboxProps {
    conversationBuilder?: (
      conversationBuilder: Talk.ConversationBuilder
    ) => void;
    className?: string;
    // Include other props as needed
  }
}