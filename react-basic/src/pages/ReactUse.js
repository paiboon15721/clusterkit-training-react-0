import React from "react";
import { useSpeech } from "react-use";

export default () => {
  const state = useSpeech("Hello world!");

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
