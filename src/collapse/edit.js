import { TextControl } from "@wordpress/components";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";

function Edit({
  blockProps,
  attributes,
  setAttributes,
  selectedBlock,
  blockParents,
  siblingBlocks,
}) {
  const props = useBlockProps();
  const [isActive, setIsActive] = useState(false);
  const { sameBlockCount, title } = attributes;

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const onChangeTitle = (newText) => {
    if (newText === "") {
      setAttributes({ title: " " });
    } else {
      setAttributes({ title: newText });
    }
  };

  let sameTypeSiblingsBefore = 0;
  if (selectedBlock && blockParents.length > 0) {
    for (const block of siblingBlocks) {
      if (block.clientId === selectedBlock.clientId) {
        break;
      }
      if (block.name === selectedBlock.name) {
        sameTypeSiblingsBefore++;
      }
    }
    if (sameTypeSiblingsBefore !== attributes.sameBlockCount) {
      setAttributes({ sameBlockCount: sameTypeSiblingsBefore });
    }
  }

  console.log(
    `Es gibt ${sameTypeSiblingsBefore} Geschwisterblöcke des gleichen Typs vor diesem Block.`
  );

  return (
    <>
      <div {...props}>
        <div className="accordion-group">
          <h2 className="accordion-heading">
            <span className="read-mode-only">{title}</span>
            <RichText
              className={`accordion-toggle ${isActive ? "active" : ""}`}
              onChange={onChangeTitle}
              value={title}
              placeholder={__("Your Text", "text-box")}
              href={`#collapse_${sameTypeSiblingsBefore}`}
              tagName="button"
              allowedFormats={[]}
              onRemove={() => {}}
              onReplace={() => {}}
              onMerge={() => {}}
              onSplit={() => {}}
              onKeyDown={(event) => {
                if (event.key === "Backspace" && !title) {
                  event.stopPropagation();
                }
              }}
            />
          </h2>
          <div
            id={`collapse_${sameTypeSiblingsBefore}`}
            className={`accordion-body ${isActive ? "active" : ""}`}
          >
            <div className="accordion-inner clearfix">
              <InnerBlocks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withSelect((select, ownProps) => {
  const { getBlock, getBlockParents, getBlocks } = select("core/block-editor");
  const selectedBlockClientId = ownProps.clientId;
  const blockParents = getBlockParents(selectedBlockClientId, true);
  const parentClientId = blockParents[0];

  return {
    selectedBlock: getBlock(selectedBlockClientId),
    blockParents: blockParents,
    siblingBlocks: getBlocks(parentClientId),
  };
})(Edit);
