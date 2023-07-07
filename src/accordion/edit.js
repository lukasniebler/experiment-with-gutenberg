import { TextControl } from "@wordpress/components";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

export default function Edit({ blockProps, attributes, setAttributes }) {
  const props = useBlockProps();

  return (
    <>
      <div {...props}>
        <div className="accordion" id="accordion-1">
              <InnerBlocks 
                allowedBlocks={['rrze-elements/accordion']}
                template={[
                    ['rrze-elements/collapse', {}],
                    ['rrze-elements/collapse', {}]
                  ]} />
        </div>
      </div>
    </>
  );
}
