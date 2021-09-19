'use strict';

import path from 'path';
import fs from 'fs/promises';
import { constants } from 'fs';
import { globby } from 'globby';

// this might have different behavior if not using YARN
// in /app, PWD is still the root.
const root = process.env.PWD;
const TRANSLATIONS = path.join(root, 'translations');

async function main() {
  // First, rename any straggling `yaml` files to `yml`
  for (let filePath of await globby(['**/*.yaml'], { cwd: TRANSLATIONS })) {
    await fs.rename(
      path.join(TRANSLATIONS, filePath),
      path.join(TRANSLATIONS, filePath.replace('.yaml', '.yml'))
    );
  }

  // Find all the places where translations exist
  let paths = await globby(['**/en-us.yml'], { cwd: TRANSLATIONS });

  /**
    * Determine all supported languages
    *
    * With upcoming Pipelines:
    *
    * let all = await globby(...)
    *   |> ^.map(...)
    *   |> new Set(...^)
    */
  let all = new Set(
    (await globby(['**/*.yaml', '**/*.yml'], { cwd: TRANSLATIONS }))
    .map(filePath => path.basename(filePath)));

  // ensure each of the translations exists
  for (let enUsPath of paths) {
    let fullPath = path.join(TRANSLATIONS, enUsPath);

    // locale includes the .yml file extension
    for (let locale of all) {

      // This is the source language, and we can skip it
      if (locale.includes('en-us')) continue;

      let directory = path.dirname(fullPath);
      let target = path.join(directory, locale);

      if (await exists(target)) continue;

      // locale does not exist, copy the en-us to the target locale
      await fs.copyFile(fullPath, target);
    }
  }
}

main();


// utils

async function exists(filePath) {
  try {
    await fs.access(filePath, constants.R_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
}
