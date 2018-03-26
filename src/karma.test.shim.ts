console.error('-= KARMA SHIM START =-');  // this is never shown in console

// Uncaught Error: Module name "@angular/core/testing" has not been loaded yet for context: _. Use
// require([])
////////////////////////////////////////////////////////////////////////////////////////
// var testing = require('@angular/core/testing');
// var browser = require('@angular/platform-browser-dynamic/testing');
// testing.TestBed.initTestEnvironment(
//   browser.BrowserDynamicTestingModule,
//   browser.platformBrowserDynamicTesting());

// Failed: Cannot read property 'injector' of null
//           var compilerFactory = this.platform.injector.get(TestingCompilerFactory);
//                                               ^
////////////////////////////////////////////////////////////////////////////////////////
import {TestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

console.error('-= KARMA SHIM END =-');  // this is never shown in console
