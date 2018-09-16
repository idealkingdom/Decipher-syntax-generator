function elementType(kind) {
    var textsplit = codeMirror.getSelection().split('\n');
    var matchlabel = [];
    for (var i = 0; i <textsplit.length; i++) {
    	matchlabel.push(textsplit[i].substring(0,textsplit[i].indexOf('.')).replace(/\s/g, ""))
    switch(kind){
		case 'row':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<row label="r'+[i+1]+'">'+textsplit[i]+'</row>'+'\n');
				break
		case 'rowV':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<row label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i]+'</row>'+'\n');
				break
		case 'rowMatchv':
		    if (matchlabel[i]!= ''){
		    	codeMirror.replaceSelection('<row label="r'+[matchlabel[i]]+'"  value="'+matchlabel[i]+'">'+
					textsplit[i].slice(textsplit[i].indexOf('.')+1)+'</row>'+'\n');
		    }break
		case 'col':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<col label="r'+[i+1]+'">'+textsplit[i]+'</col>'+'\n');
				break
		case 'colV':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<col label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i]+'</col>'+'\n');
				break
		case 'colMatchv':
		    if (matchlabel[i]!= ''){
		    	codeMirror.replaceSelection('<col label="r'+[matchlabel[i]]+'"  value="'+matchlabel[i]+'">'+
					textsplit[i].slice(textsplit[i].indexOf('.')+1)+'</col>'+'\n');
		    }break
		case 'choice':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<choice label="r'+[i+1]+'">'+textsplit[i]+'</choice>'+'\n');
				break
		case 'choiceV':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<choice label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i]+'</choice>'+'\n');
				break
		case 'choiceMatchv':
		    if (matchlabel[i]!= ''){
		    	codeMirror.replaceSelection('<choice label="r'+[matchlabel[i]]+'"  value="'+matchlabel[i]+'">'+
					textsplit[i].slice(textsplit[i].indexOf('.')+1)+'</choice>'+'\n');
		    }break
		case 'group':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<group label="r'+[i+1]+'">'+textsplit[i]+'</group>'+'\n');
				break
		case 'groupV':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<group label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i]+'</group>'+'\n');
				break
		case 'groupMatchv':
		    if (matchlabel[i]!= ''){
		    	codeMirror.replaceSelection('<group label="r'+[matchlabel[i]]+'"  value="'+matchlabel[i]+'">'+
					textsplit[i].slice(textsplit[i].indexOf('.')+1)+'</group>'+'\n');
		    }break
				}

}

	for (var i = textsplit.length - 1; i >= 0; i--) {
		    	matchlabel.push(textsplit[i].substring(0,textsplit[i].indexOf('.')).replace(/\s/g, ""))
    switch(kind){
		case 'rowR':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<row label="r'+[i+1]+'">'+textsplit[i]+'</row>'+'\n');
				break
		case 'rowRV':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<row label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i]+'</row>'+'\n');
				break
		case 'colR':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<col label="r'+[i+1]+'">'+textsplit[i]+'</col>'+'\n');
				break
		case 'colRV':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<col label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i]+'</col>'+'\n');
				break
		case 'choiceR':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<choice label="r'+[i+1]+'">'+textsplit[i]+'</choice>'+'\n');
				break
		case 'choiceRV':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<choice label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i]+'</choice>'+'\n');
				break
		case 'groupR':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<group label="r'+[i+1]+'">'+textsplit[i]+'</group>'+'\n');
				break
		case 'groupRV':
		    if (textsplit[i]!= '')
				codeMirror.replaceSelection('<group label="r'+[i+1]+'" value="'+[i+1]+'">'+textsplit[i]+'</group>'+'\n');
				break
				}
}


}
	
function questionType(type) {
    var textsplit = codeMirror.getSelection().split('\n');
    switch(type){
    	case 'radio':
    				console.log(textsplit[0].search(/<row/))
    	    		codeMirror.replaceSelection('<radio \n   label=""\n   optional="0">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n") : 
    	    			'<title>'+textsplit[0]+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'</radio>');
    	    		break
    	case 'radioR':
    	    		codeMirror.replaceSelection('<radio \n   label=""\n   optional="0"\n   type="rating">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n") : 
    	    			'<title>'+textsplit[0]+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'</radio>');
    	    		break
    	case 'checkbox':
    	    		codeMirror.replaceSelection('<checkbox \n   label=""\n   atleast="1">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n") : 
    	    			'<title>'+textsplit[0]+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'</checkbox>');
    	    		break
    	case 'select':
    	    		codeMirror.replaceSelection('<select \n   label=""\n   optional="0">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n") : 
    	    			'<title>'+textsplit[0]+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'</select>');
    	    		break
    	case 'selectR':
    	    		codeMirror.replaceSelection('<select \n   label=""\n   optional="0"\n type="rating">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n") : 
    	    			'<title>'+textsplit[0]+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'</select>');
    	    		break
    	case 'number':
    	    		codeMirror.replaceSelection('<number \n   label=""\n  size="9"\n optional="0"\n verify="range(1,120)">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n") : 
    	    			'<title>'+textsplit[0]+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'</number>');
    	    		break
    	case 'text':
    	    		codeMirror.replaceSelection('<text \n   label=""\n  size="40"\n optional="0">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n") : 
    	    			'<title>'+textsplit[0]+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			' </text>');
    	    		break
    	case 'textarea':
    	    		codeMirror.replaceSelection('<textarea \n   label=""\n  optional="0">\n'+
    	    			(textsplit[0].search(/<row/) > -1 ? '<title></title>'+
    	    			'\n<comment>Select one</comment>\n'+textsplit.join("\n") : 
    	    			'<title>'+textsplit[0]+'</title>\n<comment>Select one</comment>\n'+textsplit.slice(1).join("\n"))+
    	    			'</textarea>');
    	    		break
    	case 'comment':
    	    		codeMirror.replaceSelection('<html \n   label="cm"\n   where="survey">\n'+
    	    			textsplit.join('\n').trim()+'\n </html>');
    	    		break
    }
}