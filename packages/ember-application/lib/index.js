import Ember from 'ember-metal/core';
import isEnabled from 'ember-metal/features';
import { runLoadHooks } from 'ember-runtime/system/lazy_load';

/**
@module ember
@submodule ember-application
*/

import DefaultResolver from 'ember-application/system/resolver';
import {
  Resolver
} from 'ember-application/system/resolver';
import Application from 'ember-application/system/application';
import Engine from 'ember-application/system/engine';

Ember.Application = Application;
Ember.Resolver = Resolver;
Ember.DefaultResolver = DefaultResolver;

if (isEnabled('ember-application-engines')) {
  Ember.Engine = Engine;
}

runLoadHooks('Ember.Application', Application);
