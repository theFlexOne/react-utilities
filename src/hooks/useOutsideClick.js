import { useState } from "react";
import useEventListener from "./useEventListener";

const useOutsideClick = (ref, callback) => {
  useEventListener(
    "click",
    (event) => {
      if (ref.current == null || ref.current.contains(event.target)) return;
      callback(event);
    },
    document
  );

  return;
};

export default useOutsideClick;
