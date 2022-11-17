function blockFn(editorState) {
  const selection = editorState.getSelection();
  return editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
}

export function blockTypeFn(editorState) {
  const selection = editorState.getSelection();
  return blockFn(editorState, selection).getType();
}

export function currentStyleFn(editorState) {
  return editorState.getCurrentInlineStyle();
}

export function contentHasTextFn(editorState) {
  const contentState = editorState.getCurrentContent();
  return contentState.hasText();
}