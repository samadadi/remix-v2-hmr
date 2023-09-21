import * as tooltip from "@zag-js/tooltip"
import { useMachine, normalizeProps } from "@zag-js/react"
import { useId } from "react";

export default function Tooltip() {
  const [state, send] = useMachine(tooltip.machine({ id: useId() }))

  const { isOpen, triggerProps, positionerProps, contentProps } = tooltip.connect(state, send, normalizeProps);


  return (
    <>
      <button {...triggerProps}>Hover me</button>
      {isOpen && (
        <div {...positionerProps}>
          <div {...contentProps}>Tooltip</div>
        </div>
      )}
    </>
  )
}
