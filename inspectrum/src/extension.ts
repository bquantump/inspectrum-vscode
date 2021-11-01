'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {VSCExpress} from 'vscode-express';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const vscexpress = new VSCExpress(context, 'front-end');
	const workspacePath = vscode.workspace.workspaceFolders;
	if (workspacePath === undefined) {
	  //showErrorMessage("Workdirectory is empty!");
	  throw "Workdirectory is empty!";
	}
}

// this method is called when your extension is deactivated
export function deactivate() {
}