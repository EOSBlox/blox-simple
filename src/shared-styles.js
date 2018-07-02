import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
    <template>
        <style>
            .container{
                max-width: 1400px;
                margin: 0px auto;
                background-color: white;
                box-shadow: inset 0 1px 0 #f5f5f5, 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
                padding: 13px 12px;
                border-bottom: 1px solid #f5f5f5;
                min-height: 100%;
            }
            input.text {
                padding: 8px;
                background: #F0F1F3;
                display: block;
                width: 100%;
                box-shadow: inset 0 1px 1px rgba(0,0,0,.02);
                border: 1px solid;
                border-color: #C9CCD0 #CFD2D6 #CFD2D6;
                border-radius: 3px;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                font-size: 14px;
                height: auto;
                margin:10px 0 10px 0;
            }
            input.text:focus {
                background: #FFF;
                border 1px solid #8bd2d0 !important;
                box-shaddow: 0 0 0 2pz rgba(133, 176, 212, 0.4)
            }
            button{
                cursor: pointer;
                vertical-align: middle;
                outline: none;
            }
            .btn-main {
                display: block;
                width: 100%;
                font-weight: bold;
                padding: 0 12px;
                line-height: 36px;
                font-size: 14px;
                border: 1px solid;
                border-radius: 3px;
                color: #5A616F;
                text-shadow: 0 1px 0 #FFF;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
                border-color: #d1d3d6 #d2d3d5 #bdbec0;
                background: #F4F4F5;
                background: -webkit-linear-gradient(top,#FFF,#F6F7F8);
                background: -ms-linear-gradient(top,#FFFFFF,#f9f9f9);
                background: -moz-linear-gradient(top,#FFFFFF,#f9f9f9);
                background: -o-linear-gradient(top,#FFFFFF,#f9f9f9);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF',endColorstr='#f9f9f9');
            }
            .btn-main:hover {
                text-decoration: none;
                border-color: #CCCED2 #C7C8C9 #B6B7B9;
                background: -webkit-linear-gradient(top, #ffffff, #f9fafa);
                background: -ms-linear-gradient(top, #ffffff, #f9fafa);
                background: -moz-linear-gradient(top, #ffffff, #f9fafa);
                background: -o-linear-gradient(top, #ffffff, #f9fafa);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f9fafa');
            }
            h1 {
                font-size: 32px;
                color: #4c505a;
                line-height: 26px;
            }

        </style>
    </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
