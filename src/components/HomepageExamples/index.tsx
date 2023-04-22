import React from "react";
import type { FileInfo } from "../MonacoEditorWorkspace";
import NextExample from "../NextExample";
import weatherApp from "../../examples/weather-app";
import styles from "./styles.module.css";

export interface ExampleInfo {
  title?: string;
  description?: string;
  files: FileInfo[];
}

export default function HomepageExamples(): JSX.Element {
  return (
    <>
      <HomepageExample
        files={[
          {
            name: "Bricks",
            code: `brick: sl-card
children:
- brick: strong
  slot: header
  properties:
    textContent: Weather of Shenzhen
- brick: div
  properties:
    textContent: ☀️ Sunny
- brick: div
  properties:
    textContent: 🌡️ 22°C - 25°C`,
          },
        ]}
      />
      <HomepageExample
        files={[
          {
            name: "Bricks",
            code: `brick: sl-card
children:
- brick: strong
  slot: header
  properties:
    textContent: Weather of Shenzhen
- brick: div
  children:
  - brick: img
    properties:
      src: <% CTX.weather.current.condition.icon %>
      style:
        width: 1.25em
  - brick: span
    properties:
      textContent: <% CTX.weather.current.condition.text %>
- brick: div
  properties:
    textContent: '<% \`🌡️ \${CTX.weather.current.temp_c}°C\` %>'`,
          },
          {
            name: "Context",
            code: `- name: weather
  resolve:
    useProvider: basic.http-request
    args:
    - |
      <%
        \`//api.weatherapi.com/v1/current.json?\${
          new URLSearchParams({
            key: '9e08e5e99e0c4b4c89023605231804',
            q: 'Shenzhen',
          })
        }\`
      %>`,
          },
        ]}
      />
      <HomepageExample files={weatherApp} />
    </>
  );
}

function HomepageExample({ files }: ExampleInfo): JSX.Element {
  return (
    <section className={styles.homeExample}>
      <div className="container">
        <div className="row">
          <div className="col">
            <NextExample files={files} />
          </div>
        </div>
      </div>
    </section>
  );
}
