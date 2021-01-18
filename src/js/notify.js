import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { defaults } from '@pnotify/core';
import { info, error } from '@pnotify/core';

defaults.delay = 3000;
defaults.maxTextHeight = null;

function Info() {
    info({
        title: "Enter the request",
    });
}

function Error() {
    error({
        title: "Try again",
        text: "No pictures found.",
    });
};


export {Info, Error };
