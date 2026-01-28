import React from "react";
import { AskAIWidget } from "open-ask-ai";
import { useColorMode } from "@docusaurus/theme-common";

const exampleQuestions = [
  "What is Brick Next?",
  "How do I integrate Brick Next?",
  "Show me an example of using the Brick Next",
];

export default function AskAI() {
  const { colorMode } = useColorMode();
  return (
    <AskAIWidget
      className="ask-ai-navbar-item"
      theme={colorMode}
      projectId="brick-next"
      apiUrl="https://lab.shenwei.xyz"
      exampleQuestions={exampleQuestions}
      systemPrompt="You are a documentation assistant for Brick Next. Be concise and accurate. Output in markdown format, use proper formatting such as inline code when referring to code elements. Use the user's language for responses."
    />
  );
}
