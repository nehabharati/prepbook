import { tableHTML } from './constants';
import classNames from 'classnames';
import { TableCell } from './TableCell';

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const formatButton = () =>
    'px-2 py-1 border border-gray-900 rounded-md my-1 hover:bg-gray-900 hover:text-white bg-white text-black mx-1';

  return (
    <div className="flex flex-wrap border border-black p-2 rounded-md justify-center w-auto">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={classNames(
          formatButton(),
          editor.isActive('heading', { level: 1 })
            ? 'is-active'
            : '' + '  hover:bg-gray-200 '
        )}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={classNames(
          formatButton(),
          editor.isActive('heading', { level: 2 })
            ? 'is-active'
            : '' + '  hover:bg-gray-200 '
        )}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={classNames(
          formatButton(),
          editor.isActive('heading', { level: 3 })
            ? 'is-active'
            : '' + '  hover:bg-gray-200 '
        )}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={classNames(
          formatButton(),
          editor.isActive('heading', { level: 3 })
            ? 'is-active'
            : '' + '  hover:bg-gray-200 '
        )}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={classNames(
          formatButton(),
          editor.isActive('heading', { level: 3 })
            ? 'is-active'
            : '' + '  hover:bg-gray-200 '
        )}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={classNames(
          formatButton(),
          editor.isActive('heading', { level: 3 })
            ? 'is-active'
            : '' + '  hover:bg-gray-200'
        )}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={classNames(
          formatButton(),
          editor.isActive('paragraph') ? 'is-active' : ''
        )}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={classNames(
          formatButton(),
          editor.isActive('code') ? 'is-active' : ''
        )}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={classNames(
          formatButton(),
          editor.isActive('bold') ? 'is-active' : ''
        )}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={classNames(
          formatButton(),
          editor.isActive('italic') ? 'is-active' : ''
        )}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={classNames(
          formatButton(),
          editor.isActive('strike') ? 'is-active' : ''
        )}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={classNames(
          formatButton(),
          editor.isActive('bulletList') ? 'is-active' : ''
        )}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={classNames(
          formatButton(),
          editor.isActive('orderedList') ? 'is-active' : ''
        )}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={classNames(
          formatButton(),
          editor.isActive('codeBlock') ? 'is-active' : ''
        )}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={classNames(
          formatButton(),
          editor.isActive('blockquote') ? 'is-active' : ''
        )}
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={formatButton()}
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={formatButton()}
      >
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className={formatButton()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className={formatButton()}
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={classNames(
          formatButton(),
          editor.isActive('highlight') ? 'is-active' : ''
        )}
      >
        highlight
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={classNames(
          formatButton(),
          editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''
        )}
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={classNames(
          formatButton(),
          editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
        )}
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={classNames(
          formatButton(),
          editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''
        )}
      >
        right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={classNames(
          formatButton(),
          editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
        )}
      >
        justify
      </button>
      <button
        className={formatButton()}
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
      >
        insertTable
      </button>
      <button
        className={formatButton()}
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertContent(tableHTML, {
              parseOptions: {
                preserveWhitespace: false,
              },
            })
            .run()
        }
      >
        insertHTMLTable
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        disabled={!editor.can().addColumnBefore()}
      >
        addColumnBefore
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        disabled={!editor.can().addColumnAfter()}
      >
        addColumnAfter
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().deleteColumn().run()}
        disabled={!editor.can().deleteColumn()}
      >
        deleteColumn
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().addRowBefore().run()}
        disabled={!editor.can().addRowBefore()}
      >
        addRowBefore
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().addRowAfter().run()}
        disabled={!editor.can().addRowAfter()}
      >
        addRowAfter
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().deleteRow().run()}
        disabled={!editor.can().deleteRow()}
      >
        deleteRow
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().deleteTable().run()}
        disabled={!editor.can().deleteTable()}
      >
        deleteTable
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().mergeCells().run()}
        disabled={!editor.can().mergeCells()}
      >
        mergeCells
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().splitCell().run()}
        disabled={!editor.can().splitCell()}
      >
        splitCell
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        disabled={!editor.can().toggleHeaderColumn()}
      >
        toggleHeaderColumn
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().toggleHeaderRow().run()}
        disabled={!editor.can().toggleHeaderRow()}
      >
        toggleHeaderRow
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().toggleHeaderCell().run()}
        disabled={!editor.can().toggleHeaderCell()}
      >
        toggleHeaderCell
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().mergeOrSplit().run()}
        disabled={!editor.can().mergeOrSplit()}
      >
        mergeOrSplit
      </button>
      <button
        className={formatButton()}
        onClick={() =>
          editor
            .chain()
            .focus()
            .setCellAttribute('backgroundColor', '#FAF594')
            .run()
        }
        disabled={!editor.can().setCellAttribute('backgroundColor', '#FAF594')}
      >
        setCellAttribute
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().fixTables().run()}
        disabled={!editor.can().fixTables()}
      >
        fixTables
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().goToNextCell().run()}
        disabled={!editor.can().goToNextCell()}
      >
        goToNextCell
      </button>
      <button
        className={formatButton()}
        onClick={() => editor.chain().focus().goToPreviousCell().run()}
        disabled={!editor.can().goToPreviousCell()}
      >
        goToPreviousCell
      </button>
    </div>
  );
};
