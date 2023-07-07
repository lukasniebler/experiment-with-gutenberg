import { TextControl } from "@wordpress/components";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

export default function Edit({ blockProps, attributes, setAttributes }) {
  const props = useBlockProps();

  return (
    <>
      <div {...props}>
        <div className="accordion-group">
          <h2 className="accordion-heading">
            <span className="read-mode-only">Test </span>
            <button
              className="accordion-toggle"
              data-toggle="collapse"
              href="#collapse_0"
            >
              {" "}
              Test{" "}
            </button>
          </h2>
          <div
            id="collapse_0"
            className="accordion-body"
            style={{ display: "none" }}
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
