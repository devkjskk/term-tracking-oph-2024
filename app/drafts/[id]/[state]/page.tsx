'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Box, Center } from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

const DraftState = () => {
  const { state } = useParams() as { state: string };
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content,
  });

  return (
    <Center p={32}>
      <RichTextEditor
        editor={editor}
        style={{
          pointerEvents: 'none',
        }}
      >
        <RichTextEditor.Content />
      </RichTextEditor>
    </Center>
  );
};

export default DraftState;
