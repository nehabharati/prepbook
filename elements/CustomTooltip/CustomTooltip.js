import * as Tooltip from '@radix-ui/react-tooltip';
import { useState } from 'react';

export const CustomTooltip = ({ text, showArrow = true, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tooltip.Provider>
      <Tooltip.Root
        delayDuration={0.5}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen);
        }}
        open={isOpen}
      >
        <Tooltip.Trigger>
          <div>{props.children}</div>
        </Tooltip.Trigger>

        <Tooltip.Content
          className="px-2 py-1 text-gray-100 bg-gray-900 rounded shadow-lg"
          side="top"
          sideOffset={5}
        >
          {showArrow && <Tooltip.Arrow className="shadow-lg" />}
          <p>{text}</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
