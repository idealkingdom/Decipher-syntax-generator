var codeMirror = ''
$(document).ready(function () {
var codeTextarea = $('.dataText')[0]
codeMirror = CodeMirror.fromTextArea(codeTextarea,{
lineNumbers: true,
theme: 'monokai',
htmlMode: true,
matchClosing: true,
indentWithTabs: true,
})
codeMirror.setSize(null,616);
});