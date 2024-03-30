var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `

    body {
        background: red;
    }

    @media only screen and (max-width: 600px) {

        body {
            background: green;
        }

        .generic-component__content {
            flex-direction: column;
        }

        .template-column {
            width: 100% !important;
            flex-direction: column-reverse;
        }

    }
`;
document.getElementsByTagName('head')[0].appendChild(style);