import React from "react";
import type { FileInfo } from "../MonacoEditorWorkspace";
import NextExample from "../NextExample";
import * as MyTodos1 from "../../examples/my-todos-1";
import * as MyTodos2 from "../../examples/my-todos-2";
import * as MyTodos3 from "../../examples/my-todos-3";
import * as WeatherApp from "../../examples/weather-app";
import styles from "./styles.module.css";

export interface ExampleInfo {
  title?: string;
  description?: string;
  files: FileInfo[];
  style?: string;
}

export default function HomepageExamples(): JSX.Element {
  return (
    <>
      <HomepageExample {...MyTodos1} />
      <HomepageExample {...MyTodos2} />
      <HomepageExample {...MyTodos3} />
      <HomepageExample {...WeatherApp} />
    </>
  );
}

function HomepageExample({ files, style }: ExampleInfo): JSX.Element {
  return (
    <section className={styles.homeExample}>
      <div className="container">
        <div className="row">
          <div className="col">
            <NextExample files={files} style={style} />
          </div>
        </div>
      </div>
    </section>
  );
}
