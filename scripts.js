"use strict";

const setInitialScheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('light');
        document.getElementById('darkToggle').checked = 'true';
    }
};

setInitialScheme();

const changeScheme = (event) => {
    let disabledStyle = '';
    let enabledStyle = '';
    if (document.body.classList.contains('dark')) {
        disabledStyle = 'dark';
        enabledStyle = 'light';
    } else if (document.body.classList.contains('light')) {
        disabledStyle = 'light';
        enabledStyle = 'dark';
    }
    document.body.classList.remove(disabledStyle);
    document.body.classList.add(enabledStyle);
    document.getElementById(enabledStyle).setAttribute('media', 'all');
    document.getElementById(enabledStyle).disabled = false;
    document.getElementById(disabledStyle).setAttribute('media', 'not all');
    document.getElementById(disabledStyle).disabled = true;
}

const pricingType = document.getElementById('darkToggle');
pricingType.addEventListener('change', changeScheme);