function elementType(kind) { 
    var textsplit = editor.getSelection().split('\n');
    var matchlabel = [];
    for (var i = 0; i <textsplit.length; i++) {
    	matchlabel.push(textsplit[i].substring(0,textsplit[i].indexOf('.')).replace(/\s/g, ""))
    switch(kind){
		case 'row':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<row label="r'+[i+1]+'">'+textsplit[i].trim()+'</row>'+'\n');
				break
		case 'rowV':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<row label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i].trim()+'</row>'+'\n');
				break
		case 'rowMatchv':
		    if (matchlabel[i]!= ''){
		    	editor.replaceSelection('\t<row label="r'+[matchlabel[i]]+'"  value="'+matchlabel[i]+'">'+
					textsplit[i].slice(textsplit[i].indexOf('.')+1).trim()+'</row>'+'\n');
		    }break
		case 'col':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<col label="c'+[i+1]+'">'+textsplit[i].trim()+'</col>'+'\n');
				break
		case 'colV':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<col label="c'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i].trim()+'</col>'+'\n');
				break
		case 'colMatchv':
		    if (matchlabel[i]!= ''){
		    	editor.replaceSelection('\t<col label="c'+[matchlabel[i]]+'"  value="'+matchlabel[i]+'">'+
					textsplit[i].slice(textsplit[i].indexOf('.')+1).trim()+'</col>'+'\n');
		    }break
		case 'choice':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<choice label="ch'+[i+1]+'">'+textsplit[i].trim()+'</choice>'+'\n');
				break
		case 'choiceV':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<choice label="ch'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i].trim()+'</choice>'+'\n');
				break
		case 'choiceMatchv':
		    if (matchlabel[i]!= ''){
		    	editor.replaceSelection('\t<choice label="ch'+[matchlabel[i]]+'"  value="'+matchlabel[i]+'">'+
					textsplit[i].slice(textsplit[i].indexOf('.')+1).trim()+'</choice>'+'\n');
		    }break
		case 'group':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<group label="g'+[i+1]+'">'+textsplit[i].trim()+'</group>'+'\n');
				break
		case 'groupV':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<group label="g'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i].trim()+'</group>'+'\n');
				break
		case 'groupMatchv':
		    if (matchlabel[i]!= ''){
		    	editor.replaceSelection('\t<group label="g'+[matchlabel[i]]+'"  value="'+matchlabel[i]+'">'+
					textsplit[i].slice(textsplit[i].indexOf('.')+1).trim()+'</group>'+'\n');
		    }break
				}

}
var reverse = 0
	for (var i = textsplit.length - 1; i >= 0; i--) {
		    	matchlabel.push(textsplit[i].trim().substring(0,textsplit[i].indexOf('.')).replace(/\s/g, ""))
    switch(kind){
		case 'rowR':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<row label="r'+[i+1]+'">'+textsplit[reverse].trim()+'</row>'+'\n');
				break
		case 'rowRV':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<row label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[reverse].trim()+'</row>'+'\n');
				break
		case 'colR':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<col label="c'+[i+1]+'">'+textsplit[reverse].trim()+'</col>'+'\n');
				break
		case 'colRV':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<col label="c'+[i+1]+'" value="'+[i+1]+'">'+textsplit[reverse].trim()+'</col>'+'\n');
				break
		case 'choiceR':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<choice label="ch'+[i+1]+'">'+textsplit[reverse].trim()+'</choice>'+'\n');
				break
		case 'choiceRV':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<choice label="ch'+[i+1]+'" value="'+[i+1]+'">'+textsplit[reverse].trim()+'</choice>'+'\n');
				break
		case 'groupR':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<group label="g'+[i+1]+'">'+textsplit[reverse].trim()+'</group>'+'\n');
				break
		case 'groupRV':
		    if (textsplit[i]!= '')
				editor.replaceSelection('\t<group label="g'+[i+1]+'" value="'+[i+1]+'">'+textsplit[reverse].trim()+'</group>'+'\n');
				break
				}
		reverse++
}
}



function questionType(type) {
    var textsplit = editor.getSelection().split('\n');
    switch(type){
    	case 'radio':
    				console.log($('.openFile')[0].path)
    	    		editor.replaceSelection('<radio \n   label=""\n   optional="0">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n").trim() : 
    	    			'<title>'+textsplit[0].trim()+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'\n</radio>\n<suspend/>\n');
    	    		break
    	case 'radioR':
    	    		editor.replaceSelection('<radio \n   label=""\n   optional="0"\n   type="rating">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n").trim() : 
    	    			'<title>'+textsplit[0].trim()+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'\n</radio>\n<suspend/>\n');
    	    		break
    	case 'checkbox':
    	    		editor.replaceSelection('<checkbox \n   label=""\n   atleast="1">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select all that apply</comment>\n'+textsplit.join("\n").trim() : 
    	    			'<title>'+textsplit[0].trim()+'</title>\n<comment>Select all that apply</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'\n</checkbox>\n<suspend/>\n');
    	    		break
    	case 'select':
    	    		editor.replaceSelection('<select \n   label=""\n   optional="0">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n").trim() : 
    	    			'<title>'+textsplit[0].trim()+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n").trim())+
    	    			'\n</select>\n<suspend/>\n');
    	    		break
    	case 'selectR':
    	    		editor.replaceSelection('<select \n   label=""\n   optional="0"\n type="rating">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n").trim() : 
    	    			'<title>'+textsplit[0].trim()+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n").trim())+
    	    			'\n</select>\n<suspend/>\n');
    	    		break
    	case 'number':
    	    		editor.replaceSelection('<number \n   label=""\n  size="9"\n optional="0"\n verify="range(1,120)">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Please enter a whole number</comment>\n'+textsplit.join("\n").trim() : 
    	    			'<title>'+textsplit[0].trim()+'</title>\n<comment>Please enter a whole number</comment>\n'+textsplit.slice(1).join("\n").trim())+
    	    			'\n</number>\n<suspend/>\n');
    	    		break
    	case 'text':
    	    		editor.replaceSelection('<text \n   label=""\n  size="40"\n optional="0">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n").trim() : 
    	    			'<title>'+textsplit[0].trim()+'</title>\n<comment>Please be as specific as possible</comment>\n'+textsplit.slice(1).join("\n").trim())+
    	    			'\n</text>\n<suspend/>\n');
    	    		break
    	case 'textarea':
    	    		editor.replaceSelection('<textarea \n   label=""\n  optional="0">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n").trim() : 
    	    			'<title>'+textsplit[0].trim()+'</title>\n<comment>Please be as specific as possible</comment>\n'+textsplit.slice(1).join("\n").trim())+
    	    			'\n</textarea>\n<suspend/>\n');
    	    		break
    	case 'comment':
    	    		editor.replaceSelection('<html \n   label="cm"\n   where="survey">\n'+
    	    			textsplit.join('\n').trim()+'\n </html>\n<suspend/>\n');
    	    		break
    }
}

function loopBlock(type) {

 
var textsplit = editor.getSelection().split('\n');
switch(type){
	case 'loop':
		editor.replaceSelection('<loop\n   label=""\n   vars="">\n\n<block\n   label="">\n\n'+
			textsplit.join('\n').trim()+'\n\n</block>\n<looprow label="" cond="">\n<loopvar name=""></loopvar>\n</looprow>'
			);
			break
	case 'block':
	    editor.replaceSelection('<block\n    label=""\n    cond="">\n\n'+textsplit.join('\n').trim()+'\n\n</block>');
	    	break
}

}




var filename = ''

function openFile(event) {
	var file = event.target.files[0];
	var reader = new FileReader();
	console.log(file)
	if (file.name.substr(-3) !='xml' && file.name.substr(-3) !='txt'){
		alert("Wrong file uploaded!")
		}
	else{
		    reader.onload = function(event){
		editor.setValue(event.target.result)
	}

	}
	reader.readAsText(file);
	filename = file.name
}



function makeFile(text) {
		var textFile=null
	    var data = new Blob([text], {type: 'text/plain'});
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;

}

function downloadText() {
	console.log(editor.getValue())
    var link = document.getElementById('downloadtext');
    link.href = makeFile(editor.getValue());
    downloadtext.click();

}