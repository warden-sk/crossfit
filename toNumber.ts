/*
 * Copyright 2022 Marek Kobida
 */

function toNumber(input: null | string): number | undefined {
  if (input && /[0-9]+/.test(input)) {
    return +input;
  }
}

export default toNumber;
