'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * @module
 * @description
 * This module is used for writing tests for applications written in Angular.
 *
 * This module is not included in the `angular2` module; you must import the test module explicitly.
 *
 */
__export(require('./src/testing/testing'));
var test_component_builder_1 = require('./src/testing/test_component_builder');
exports.ComponentFixture = test_component_builder_1.ComponentFixture;
exports.TestComponentBuilder = test_component_builder_1.TestComponentBuilder;
__export(require('./src/testing/test_injector'));
__export(require('./src/testing/fake_async'));
var view_resolver_mock_1 = require('angular2/src/mock/view_resolver_mock');
exports.MockViewResolver = view_resolver_mock_1.MockViewResolver;
var xhr_mock_1 = require('angular2/src/compiler/xhr_mock');
exports.MockXHR = xhr_mock_1.MockXHR;
var ng_zone_mock_1 = require('angular2/src/mock/ng_zone_mock');
exports.MockNgZone = ng_zone_mock_1.MockNgZone;
var mock_application_ref_1 = require('angular2/src/mock/mock_application_ref');
exports.MockApplicationRef = mock_application_ref_1.MockApplicationRef;
var directive_resolver_mock_1 = require('angular2/src/mock/directive_resolver_mock');
exports.MockDirectiveResolver = directive_resolver_mock_1.MockDirectiveResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtalBrcmlIM1UudG1wL2FuZ3VsYXIyL3Rlc3RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxpQkFBYyx1QkFBdUIsQ0FBQyxFQUFBO0FBQ3RDLHVDQUFxRCxzQ0FBc0MsQ0FBQztBQUFwRixxRUFBZ0I7QUFBRSw2RUFBa0U7QUFDNUYsaUJBQWMsNkJBQTZCLENBQUMsRUFBQTtBQUM1QyxpQkFBYywwQkFBMEIsQ0FBQyxFQUFBO0FBRXpDLG1DQUErQixzQ0FBc0MsQ0FBQztBQUE5RCxpRUFBOEQ7QUFDdEUseUJBQXNCLGdDQUFnQyxDQUFDO0FBQS9DLHFDQUErQztBQUN2RCw2QkFBeUIsZ0NBQWdDLENBQUM7QUFBbEQsK0NBQWtEO0FBQzFELHFDQUFpQyx3Q0FBd0MsQ0FBQztBQUFsRSx1RUFBa0U7QUFDMUUsd0NBQW9DLDJDQUEyQyxDQUFDO0FBQXhFLGdGQUF3RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBpcyB1c2VkIGZvciB3cml0aW5nIHRlc3RzIGZvciBhcHBsaWNhdGlvbnMgd3JpdHRlbiBpbiBBbmd1bGFyLlxuICpcbiAqIFRoaXMgbW9kdWxlIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYGFuZ3VsYXIyYCBtb2R1bGU7IHlvdSBtdXN0IGltcG9ydCB0aGUgdGVzdCBtb2R1bGUgZXhwbGljaXRseS5cbiAqXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vc3JjL3Rlc3RpbmcvdGVzdGluZyc7XG5leHBvcnQge0NvbXBvbmVudEZpeHR1cmUsIFRlc3RDb21wb25lbnRCdWlsZGVyfSBmcm9tICcuL3NyYy90ZXN0aW5nL3Rlc3RfY29tcG9uZW50X2J1aWxkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvdGVzdGluZy90ZXN0X2luamVjdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3Rlc3RpbmcvZmFrZV9hc3luYyc7XG5cbmV4cG9ydCB7TW9ja1ZpZXdSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svdmlld19yZXNvbHZlcl9tb2NrJztcbmV4cG9ydCB7TW9ja1hIUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3hocl9tb2NrJztcbmV4cG9ydCB7TW9ja05nWm9uZX0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svbmdfem9uZV9tb2NrJztcbmV4cG9ydCB7TW9ja0FwcGxpY2F0aW9uUmVmfSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay9tb2NrX2FwcGxpY2F0aW9uX3JlZic7XG5leHBvcnQge01vY2tEaXJlY3RpdmVSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svZGlyZWN0aXZlX3Jlc29sdmVyX21vY2snO1xuIl19