import { useState } from 'react';
import { stateToHTML } from 'draft-js-export-html';
import {
  RichUtils,
  Editor,
  EditorState,
  convertFromRaw,
  convertToRaw,
} from 'draft-js';
import raw from './draft-editor/contents-raw/default-raw';
import { ToolbarBlockStyles } from './draft-editor/toolbar/toolbar-block-styles';
import { ToolbarInlineStyles } from './draft-editor/toolbar/toolbar-inline-styles';
import { styles, exporter, customStyleFn, customStyleMap } from './draft-editor/custom-styles';
import { contentHasTextFn } from './draft-editor/fns-utils';

const GestioneContenuti = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(raw))
  );

  const inlineStyles = exporter(editorState);
  const html = stateToHTML(editorState.getCurrentContent(), { inlineStyles });
  const HTML = () => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const toggleBlockStyles = blockType => {
    const newEditorState = RichUtils.toggleBlockType(editorState, blockType);
    setEditorState(newEditorState);
  };

  const toggleInlineStyles = inlineStyle => {
    const newEditorState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
    setEditorState(newEditorState);
  };

  const toggleGruopInlineStyles = (newValue, type) => {
    setEditorState(styles[type].toggle(editorState, newValue));
  };

  return (
    <>
      <style jsx>
        {`
          #toolbar {
            font-family: '"Inconsolata", "Menlo", "Consolas", monospace';
            max-width: max-content;
          }
          .public-DraftEditorPlaceholder-inner {
            white-space: pre-wrap;
            font-weight: bold;
            font-size: 14px;
            font-family: monospace;
            color: gray;
          }
        `}
      </style>
      <section id="gestione-contenuti">
      <div id="toolbar" className="d-flex border">
          <ToolbarInlineStyles
            editorState={editorState}
            onToggleButton={toggleInlineStyles}
            onToggleButtonGroup={toggleGruopInlineStyles}
          />
          <ToolbarBlockStyles editorState={editorState} onToggleButtonGroup={toggleBlockStyles} />
        </div>
        <div
          id="editor"
          className="border rounded-0 my-3 mx-0 pb-5 pt-2 px-1 snf-font-16 bg-light"
        >
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            customStyleFn={customStyleFn}
            customStyleMap={customStyleMap}
            editorKey="editor-key"
            placeholder={contentHasTextFn(editorState) ? null : 'Tell a Story...'}
          />
        </div>
        <div
          className="bg-secondary my-3 mx-0 pb-4 pt-2 px-2"
          style={{ flex: '1 0 25%', color: '#fff' }}
        >
          <b>[Exported To HTML]</b>
          <HTML />
        </div>
        <div
          className="my-3 mx-0 pb-4 pt-2 px-2"
          style={{ flex: '1 0 25%' }}
        >
          <b>[On HTML]</b>
          <div>{html}</div>
        </div>
        <div className="my-3 mx-0 pb-4 pt-2 px-2" style={{ flex: '1 0 25%' }}>
          <b>[Content State]</b>
          <pre>{JSON.stringify(convertToRaw(editorState.getCurrentContent()), null, 2)}</pre>{' '}
        </div>
      </section>
    </>
  );
};

GestioneContenuti.displayName = 'GestioneContenuti';
export { GestioneContenuti };
