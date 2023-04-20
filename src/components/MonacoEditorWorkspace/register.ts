// https://microsoft.github.io/monaco-editor/playground.html?source=v0.37.1#example-extending-language-services-custom-languages
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { conf, language } from './nextYaml';

// Register a new language
monaco.languages.register({ id: "nextYaml" });

monaco.languages.setLanguageConfiguration("nextYaml", conf);

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider("nextYaml", language);