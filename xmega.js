#!/usr/bin/env node

/*!
 * Xmegadrive.js
 * Copyright (c) 2023
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

// Add env vars as a preliminary

const input = require("input");
const { download } = require("./lib/index");

async function getLink() {
  let url;

  // Input

  do {
    url = await input.text("Enter Xmegadrive link:", { default: null });
    if (url == null) {
      console.log("Enter a valid Xmegadrive link.");
    } else if (!url.match(/^https:\/\/www\.xmegadrive\.com\/videos\/.*$/)) {
      console.log("Enter a valid Xmegadrive link.");
      url = null;
    }
  } while (url == null);
  return url;
}

async function getDownload() {
  try {
    const url = await getLink();
    const downloadLink = await download(url);
    console.log(downloadLink);
  } catch (error) {
    console.error(error);
  }
}

getDownload();
