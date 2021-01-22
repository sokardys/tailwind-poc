/**
 * Global styles get added in the wrong order when using styled-components.
 * Exporting the styles from this file is the current workaround to this issue.
 * https://github.com/ben-rogerson/twin.macro/issues/277#issuecomment-754240911
 */

import React from "react";
import { GlobalStyles as TWGlobalStyles } from "twin.macro";

export const GlobalStyles = () => {
  return <TWGlobalStyles />;
};
