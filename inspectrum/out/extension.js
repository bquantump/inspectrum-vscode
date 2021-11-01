'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const vscode_express_1 = require("vscode-express");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const vscexpress = new vscode_express_1.VSCExpress(context, 'front-end');
    const workspacePath = vscode.workspace.workspaceFolders;
    if (workspacePath === undefined) {
        //showErrorMessage("Workdirectory is empty!");
        throw "Workdirectory is empty!";
    }
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map