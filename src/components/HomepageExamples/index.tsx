import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import type { FileInfo } from "../../interfaces";
import NextExample from "../NextExample";
import * as MyTodos1 from "../../examples/my-todos-1";
import * as MyTodos2 from "../../examples/my-todos-2";
import * as MyTodos3 from "../../examples/my-todos-3";
import * as WeatherApp from "../../examples/weather-app";
import styles from "./styles.module.css";

export interface ExampleInfo {
  files: FileInfo[];
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  postDescription?: string | JSX.Element;
  styleText?: string;
  showButton?: boolean;
}

export default function HomepageExamples(): JSX.Element {
  return (
    <>
      <HomepageExample {...MyTodos1} />
      {/* <HomepageExample {...MyTodos2} /> */}
      <HomepageExample {...MyTodos3} />
      <HomepageExample showButton {...WeatherApp} />
    </>
  );
}

function HomepageExample({
  files,
  title,
  description,
  postDescription,
  styleText,
  showButton,
}: ExampleInfo): JSX.Element {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h2 className={styles.title}>{title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <NextExample
              files={files}
              styleText={styleText}
              className={styles.homeExample}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className={`styles.description`}>{postDescription}</p>
          </div>
        </div>
        {showButton && (
          <div className={clsx("row", styles.buttonContainer)}>
            <div className="col col--8 col--offset-2">
              <Link
                className="button button--outline button--primary button--lg"
                to="/docs/intro"
              >
                Getting Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
