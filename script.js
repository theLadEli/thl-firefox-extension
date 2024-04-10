// Add Plugin Loaded Notice

var loginContainer = document.getElementById('login-container');

if (loginContainer) {
    var newDiv = document.createElement("div");
    newDiv.id = "plugin-loaded-notice";
    newDiv.innerText = "The CSS plugin has successfully loaded!";
    
    document.getElementById("login-container").appendChild(newDiv);
} else {
    console.log('Not on login page.');
}

// Apply Custom CSS

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `

    #plugin-loaded-notice {
        margin-top: 25px;
        padding: 15px 30px;
        background-color: #c9fac8;
        border-left: solid 3px #03a800;
        font-size: 12px
    }

    @media only screen and (max-width: 600px) {

        /* Dashboard */

        .generic-component__content {
            flex-direction: column;
        }

        .template-column {
            width: 100% !important;
        }

        .smallTitle {
            font-size: 12px
        }

        .ui-generic-block__content .smallValue {
            font-size: 16px
        }

        /* Login Screen */

        #plugin-loaded-notice {
            margin-bottom: 25px
        }

    }
`;
document.getElementsByTagName('head')[0].appendChild(style);