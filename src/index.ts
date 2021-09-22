import { h, render } from 'preact';
import { App } from './App';
import loader from './loader';
import { Configurations } from './models';

/**
 * Default configurations that are overridden by
 * parameters in embedded script.
 */
const defaultConfig: Configurations = {
    debug: false,
    serviceBaseUrl: 'https://api.shs.com',
    minimized: false,
    disableDarkMode: false,
    text: {},
    styles: {},
    products: [
        {title: 'Cooktop', code: 'COOKTOP'},
        {title: 'Refrigerator', code: 'REFRIGBF'},
        {title: 'Dishwasher', code: 'DISHWASHBI'},
        {title: 'Washer', code: 'WASHERFL'},
        {title: 'Stacked Laundry Unit', code: 'WASHERDRYERL'},
    ],
};

// main entry point - calls loader and render Preact app into supplied element
loader(
    window,
    defaultConfig,
    window.document.currentScript,
    (el, config) => render(h(App, { ...config, element: el }), el));
