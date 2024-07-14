{
    "launch": {
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "Launch Program",
                "program": "${file}", 
                "cwd": "${workspaceRoot}",
                "outputCapture": "std" 
            },
            {
                "args":[
                    "-u",
                    "bdd",
                    "--timeout",
                    "999999",
                    "--colors",
                    "${file}"
                ],
                "internalConsoleOptions": "openOnFirstSessionStart",
                "name": "Mocha test",
                "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
                "request": "launch",
                "skipFiles": [
                    "<node_internals>/**"
                ],
                "type": "node"
            }
        ],   
        "compounds": []   
    },
    "explorer.confirmDragAndDrop": false,
    "editor.suggestSelection": "first",
    "eslint.enable": true,
    "eslint.options":{
        "overrideConfig": {
            "env": {
                "browser": true,
                "node": true,
                "mocha" : true,
                "es2021": true
            },
            "globals": {},
            "parserOptions": {
                "ecmaVersion": 12,
                "sourceType": "module",
                "ecmaFeatures": {}
            },
            "rules": {
                "semi": "error",
                "curly": "error",
                "quotes": [
                    "warn",
                    "single"
                ],
                "no-undef": "error",
                "indent": [
                    "error",
                    4
                ]
            }
        }
    },
    "debug.console.collapseIdenticalLines": false,
    "editor.minimap.enabled": false,
    "files.autoSave": "afterDelay",
    "editor.stickyScroll.enabled": false,
    "javascript.preferences.quoteStyle": "single",
    "liveServer.settings.file": "/index.html",
    "liveServer.settings.donotShowInfoMsg": true,
    "terminal.integrated.defaultProfile.windows": "Command Prompt",
    "workbench.colorTheme": "Noctis Minimus",
    "security.workspace.trust.untrustedFiles": "open",
    "workbench.sideBar.location": "right",
    "workbench.iconTheme": "material-icon-theme"
}