// https://microsoft.github.io/monaco-editor/playground.html?source=v0.37.1#example-extending-language-services-custom-languages
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { conf, language } from './nextYaml';
import { conf as confJs, language as languageJs } from './nextJs';

// Register a new language
monaco.languages.register({ id: "nextYaml" });

monaco.languages.setLanguageConfiguration("nextYaml", conf);

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider("nextYaml", language);


// Register a new language
monaco.languages.register({ id: "nextJs" });

monaco.languages.setLanguageConfiguration("nextJs", confJs);

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider("nextJs", languageJs);
