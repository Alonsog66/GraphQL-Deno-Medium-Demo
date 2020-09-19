import React from 'https://dev.jspm.io/react@16.13.1';
import ReactDomServer from 'https://dev.jspm.io/react-dom@16.13.1/server';
import ReactDom from 'https://dev.jspm.io/react-dom@16.13.1';
import { ObsidianWrapper, useObsidian } from './ObsidianWrapper.jsx';

// 'https://deno.land/x/obsidian@v0.1.4/ObsidianWrapper/ObsidianWrapper.jsx';

import rcb from 'https://dev.jspm.io/react-code-blocks';

const realRCB: any = rcb;
const { CodeBlock, CopyBlock, dracula, monokai } = realRCB;

export {
  React,
  ReactDomServer,
  ReactDom,
  ObsidianWrapper,
  useObsidian,
  CodeBlock,
  CopyBlock,
  dracula,
  monokai,
};
