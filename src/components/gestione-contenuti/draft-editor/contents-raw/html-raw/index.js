import { convertFromHTML, ContentState } from 'draft-js';

const sampleMarkup = '<html/>';

const blocksFromHTML = convertFromHTML(sampleMarkup);

const HTMLRaw = ContentState.createFromBlockArray(
  blocksFromHTML.contentBlocks,
  blocksFromHTML.entityMap
);

export default HTMLRaw;
