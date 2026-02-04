import React, { useEffect, useState } from "react";
import { AskAIWidget, type WidgetTexts } from "open-ask-ai";
import "open-ask-ai/styles.css";
import { useColorMode, type ColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const exampleQuestionsEn = [
  "What is Brick Next?",
  "What is a custom template and how to use it?",
  "How to add event listeners in Brick Next?",
];

const exampleQuestionsZh = [
  "什么是 Brick Next？",
  "什么是自定义模板，如何使用？",
  "如何在 Brick Next 中添加事件监听器？",
];

const textsEn: WidgetTexts = {
  welcomeMessage: "Ask me about Brick Next",
  exampleQuestionsTitle: "Example questions:",
  inputPlaceholder: "Ask a question...",
};

const textsZh: WidgetTexts = {
  welcomeMessage: "关于 Brick Next，有什么问题可以问我",
  exampleQuestionsTitle: "示例问题 ：",
  inputPlaceholder: "请输入你的问题...",
};

export default function AskAI() {
  const { colorMode } = useColorMode();
  const [theme, setTheme] = useState<ColorMode>("light");
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  useEffect(() => {
    setTheme(colorMode);
  }, [colorMode]);

  return (
    <AskAIWidget
      className="ask-ai-navbar-item"
      theme={theme}
      project="brick-next"
      apiUrl="https://ask-ai.shenwei.xyz/api/stream"
      texts={currentLocale === "zh" ? textsZh : textsEn}
      exampleQuestions={
        currentLocale === "zh" ? exampleQuestionsZh : exampleQuestionsEn
      }
    />
  );
}
