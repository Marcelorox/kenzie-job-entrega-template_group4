import { HTMLAttributes, forwardRef, ForwardedRef } from "react";
import { StyledUpdateAlertSchema } from "./StyledAlertSchema";

interface IPropsTextArea extends HTMLAttributes<HTMLTextAreaElement> {
  error?: any;
  value?: string;
}

export const TextArea = forwardRef(
  (
    { error, value, ...rest }: IPropsTextArea,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <>
        <textarea ref={ref} {...rest} />
        {error ? <StyledUpdateAlertSchema>{error.message}</StyledUpdateAlertSchema> : null}
      </>
    );
  }
);