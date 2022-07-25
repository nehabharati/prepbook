import classNames from 'classnames';
import { CustomTooltip } from '../../elements';
import {
  BiItalic,
  BiBold,
  BiTable,
  BiChevronRight,
  BiChevronLeft,
} from 'react-icons/bi';
import {
  FaMinus,
  FaListUl,
  FaListOl,
  FaUndo,
  FaRedo,
  FaHighlighter,
} from 'react-icons/fa';
import {
  FiCode,
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
} from 'react-icons/fi';
import { MdStrikethroughS } from 'react-icons/md';
import { IoMdUndo, IoMdRedo } from 'react-icons/io';
import {
  FcAddColumn,
  FcDeleteColumn,
  FcAddRow,
  FcDeleteRow,
} from 'react-icons/fc';
import { CgQuoteO } from 'react-icons/cg';
import { TbTableOff } from 'react-icons/tb';
import { RiMergeCellsHorizontal, RiSplitCellsHorizontal } from 'react-icons/ri';

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const formatButton = () =>
    'p-2 w-10 h-10 flex justify-center items-center border border-gray-900 rounded-md cursor-pointer my-1 hover:bg-gray-900 hover:text-white bg-white text-black mx-1';

  return (
    <div className="flex mx-6 flex-wrap border border-black p-2 rounded-md justify-center w-auto">
      <CustomTooltip text="h1">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={classNames(
            formatButton(),
            editor.isActive('heading', { level: 1 })
              ? 'is-active'
              : '' + '  hover:bg-black'
          )}
        >
          h1
        </button>
      </CustomTooltip>

      <CustomTooltip text="h2">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={classNames(
            formatButton(),
            editor.isActive('heading', { level: 2 })
              ? 'is-active'
              : '' + '  hover:bg-black'
          )}
        >
          h2
        </button>
      </CustomTooltip>

      <CustomTooltip text="h3">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={classNames(
            formatButton(),
            editor.isActive('heading', { level: 3 })
              ? 'is-active'
              : '' + '  hover:bg-black'
          )}
        >
          h3
        </button>
      </CustomTooltip>

      <CustomTooltip text="h4">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={classNames(
            formatButton(),
            editor.isActive('heading', { level: 3 })
              ? 'is-active'
              : '' + '  hover:bg-black'
          )}
        >
          h4
        </button>
      </CustomTooltip>

      <CustomTooltip text="h5">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={classNames(
            formatButton(),
            editor.isActive('heading', { level: 3 })
              ? 'is-active'
              : '' + '  hover:bg-black'
          )}
        >
          h5
        </button>
      </CustomTooltip>

      <CustomTooltip text="h6">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={classNames(
            formatButton(),
            editor.isActive('heading', { level: 3 })
              ? 'is-active'
              : '' + '  hover:bg-black'
          )}
        >
          h6
        </button>
      </CustomTooltip>

      <CustomTooltip text="paragraph">
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={classNames(
            formatButton(),
            editor.isActive('paragraph') ? 'is-active' : ''
          )}
        >
          p
        </button>
      </CustomTooltip>

      <CustomTooltip text="Code">
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={classNames(
            formatButton(),
            editor.isActive('code') ? 'is-active' : ''
          )}
        >
          {'<>'}
        </button>
      </CustomTooltip>

      <CustomTooltip text="Bold">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={classNames(
            'font-bold',
            formatButton(),
            editor.isActive('bold') ? 'is-active' : ''
          )}
        >
          <BiBold />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Italics">
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={classNames(
            'italic',
            formatButton(),
            editor.isActive('italic') ? 'is-active' : ''
          )}
        >
          <BiItalic />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Strikethrough">
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={classNames(
            'line-through',
            formatButton(),
            editor.isActive('strike') ? 'is-active' : ''
          )}
        >
          <MdStrikethroughS />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Bullet list">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={classNames(
            formatButton(),
            editor.isActive('bulletList') ? 'is-active' : ''
          )}
        >
          <FaListUl />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Numbered list">
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={classNames(
            formatButton(),
            editor.isActive('orderedList') ? 'is-active' : ''
          )}
        >
          <FaListOl />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Code block">
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={classNames(
            formatButton(),
            editor.isActive('codeBlock') ? 'is-active' : ''
          )}
        >
          <FiCode />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Blockquote">
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={classNames(
            formatButton(),
            editor.isActive('blockquote') ? 'is-active' : ''
          )}
        >
          <CgQuoteO />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Divider">
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={formatButton()}
        >
          <FaMinus />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Next line">
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className={formatButton()}
        >
          \n
        </button>
      </CustomTooltip>

      <CustomTooltip text="Undo">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className={formatButton()}
        >
          <FaUndo />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Redo">
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className={formatButton()}
        >
          <FaRedo />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Highlighter">
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={classNames(
            formatButton(),
            editor.isActive('highlight') ? 'is-active' : ''
          )}
        >
          <FaHighlighter />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Left">
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={classNames(
            formatButton(),
            editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''
          )}
        >
          <FiAlignLeft />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Center">
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={classNames(
            formatButton(),
            editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
          )}
        >
          <FiAlignCenter />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Right">
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={classNames(
            formatButton(),
            editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''
          )}
        >
          <FiAlignRight />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Justify">
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={classNames(
            formatButton(),
            editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
          )}
        >
          <FiAlignJustify />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Add Table">
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
          <BiTable />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Add Column Before">
        <button
          className={classNames('flex items-center p-2', formatButton())}
          onClick={() => editor.chain().focus().addColumnBefore().run()}
        >
          <IoMdUndo /> <FcAddColumn />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Add Column After">
        <button
          className={classNames('flex items-center', formatButton())}
          onClick={() => editor.chain().focus().addColumnAfter().run()}
        >
          <FcAddColumn /> <IoMdRedo />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Delete Column">
        <button
          className={formatButton()}
          onClick={() => editor.chain().focus().deleteColumn().run()}
        >
          <FcDeleteColumn />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Add Row Before">
        <button
          className={classNames('flex items-center', formatButton())}
          onClick={() => editor.chain().focus().addRowBefore().run()}
        >
          <IoMdUndo /> <FcAddRow />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Add Row After">
        <button
          className={classNames('flex items-center', formatButton())}
          onClick={() => editor.chain().focus().addRowAfter().run()}
        >
          <FcAddRow /> <IoMdRedo />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Delete Row">
        <button
          className={formatButton()}
          onClick={() => editor.chain().focus().deleteRow().run()}
        >
          <FcDeleteRow />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Delete Table">
        <button
          className={formatButton()}
          onClick={() => editor.chain().focus().deleteTable().run()}
        >
          <TbTableOff />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Merge Cells">
        <button
          className={formatButton()}
          onClick={() => editor.chain().focus().mergeCells().run()}
        >
          <RiMergeCellsHorizontal />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Split Cells">
        <button
          className={formatButton()}
          onClick={() => editor.chain().focus().splitCell().run()}
        >
          <RiSplitCellsHorizontal />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Go to Previous Cell">
        <button
          className={formatButton()}
          onClick={() => editor.chain().focus().goToNextCell().run()}
        >
          <BiChevronRight />
        </button>
      </CustomTooltip>

      <CustomTooltip text="Go to Next Cell">
        <button
          className={formatButton()}
          onClick={() => editor.chain().focus().goToPreviousCell().run()}
        >
          <BiChevronLeft />
        </button>
      </CustomTooltip>
    </div>
  );
};
