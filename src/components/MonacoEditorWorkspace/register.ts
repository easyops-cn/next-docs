// https://microsoft.github.io/monaco-editor/playground.html?source=v0.37.1#example-extending-language-services-custom-languages
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { conf as confYaml, language as languageYaml } from './nextYaml';
import { conf as confJs, language as languageJs } from './nextJs';
import { conf as confTs, language as languageTs } from './nextTs';

monaco.languages.register({ id: "yaml" });
monaco.languages.setLanguageConfiguration("yaml", confYaml);
monaco.languages.setMonarchTokensProvider("yaml", languageYaml);

monaco.languages.register({ id: "javascript" });
monaco.languages.setLanguageConfiguration("javascript", confJs);
monaco.languages.setMonarchTokensProvider("javascript", languageJs);

monaco.languages.register({ id: "typescript" });
monaco.languages.setLanguageConfiguration("typescript", confTs);
monaco.languages.setMonarchTokensProvider("typescript", languageTs);
