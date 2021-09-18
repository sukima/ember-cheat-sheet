import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import Application from 'ember-cheat-sheet/app';
import config from 'ember-cheat-sheet/config/environment';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();
