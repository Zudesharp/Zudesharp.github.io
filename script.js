var mcount = 0
var scount = 0
function createChat(text,pic,name){
	document.getElementById("mainchat").scrollBy(0,300);
	var posy = 15;
	if (name != "Elfinlox"){
		document.getElementById("chatbox").value = "";
	}
	var m = document.createElement("div");
	m.style.position = "absolute";
	m.style.zIndex = "2";
	m.style.top = mcount*215 + posy + 'px';
	m.style.left = "0px";
    m.style.height = "80px";
    document.getElementById("mainchat").appendChild(m);

    var img = document.createElement("img");
    img.setAttribute("src", pic);
    img.setAttribute("height", "150");
    img.setAttribute("width", "150");
    m.appendChild(img);

	var pead = document.createElement("p");
	pead.innerHTML = text;

	var mtext = document.createElement("div");
    mtext.style.position = "absolute";
	mtext.style.zIndex = "2";
	mtext.style.top = posy + 60 + 'px';
    mtext.style.left = "180px";
    mtext.style.width = "1000px";
    mtext.appendChild(pead);
    m.appendChild(mtext);

    var head = document.createElement("h3");
    head.innerHTML = name;

    var mname = document.createElement("div");
    mname.style.position = "absolute";
	mname.style.zIndex = "2";
	mname.style.top = posy - 55 + 'px';
    mname.style.left = "180px";
    mname.style.width = "1000px";
    mname.appendChild(head);
	m.appendChild(mname);

	var dead = document.createElement("font");
	dead.innerHTML = "05/22/2018";
    dead.color = "#6B6B6B";
    dead.size = "6";

    var mdate = document.createElement("div");
    mdate.style.position = "absolute";
    mdate.style.zIndex = "2";
    mdate.style.top = posy + 5 + 'px';
    if (name == "Elfinlox"){
    	mdate.style.left = "340px";
    }
    else{
    	mdate.style.left = "650px";
    }
    mdate.appendChild(dead);
    m.appendChild(mdate); 

    mcount++
}

function wishAnni(){
	var anni = document.createElement("img");
	anni.setAttribute("src","anni.png");
	anni.setAttribute("height","576");
	anni.setAttribute("width","1024");
	anni.style.position = "absolute";
	anni.style.top = mcount*215 + 55 + 'px';
	anni.style.left = "50px";
	document.getElementById("mainchat").appendChild(anni);
}

function conversation(){
	var text = document.getElementById('chatbox').value;
	var texttest = text.replace(/\s/g, "");
    switch(mcount){
    	case 2: if (texttest != ''){
        			createChat(text, 'you.png', 'NOT a sweet potato!😁');
        			storyScript();
	    		}
	    		break;
    	case 4: if (texttest != ''){
        			createChat(text, 'you.png', 'NOT a sweet potato!😁');
        			storyScript();
        			storyScript();	
	    		}
	    		break;
    	case 7: if (texttest != ''){
        			createChat(text, 'you.png', 'NOT a sweet potato!😁');
        			storyScript();	
	    		}
	    		break;
    	case 9: if (texttest != ''){
        			createChat(text, 'you.png', 'NOT a sweet potato!😁');
        			storyScript();
        			storyScript();	
	    		}
	    		break;
    	case 12: if (texttest != ''){
        			createChat(text, 'you.png', 'NOT a sweet potato!😁');
        			storyScript();
        			storyScript();	
	    		}
	    		break;
    	case 15: if (texttest != ''){
        			createChat(text, 'you.png', 'NOT a sweet potato!😁');
        			storyScript();
        			storyScript();
        			storyScript();	
	    		}
	    		break;
    	case 19: if (texttest != ''){
        			createChat(text, 'you.png', 'NOT a sweet potato!😁');
        			storyScript();	
	    		}
	    		break;
    	case 21: if (texttest != ''){
        			createChat(text, 'you.png', 'NOT a sweet potato!😁');
        			storyScript();
        			storyScript();
        			storyScript();
        			storyScript();
        			setTimeout(wishAnni,8000);		
	    		}
	    		break;
    }
}

function storyScript(){
	switch(scount){
		case 0: setTimeout(createChat, 1500, 'Uh. Hi', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 1: setTimeout(createChat, 3000, 'Do you have a second?', 'dpic.png', 'Elfinlox');
				scount++;	
			break;
		case 2: setTimeout(createChat, 2000, 'Well listen, I know I just met you but I had a vision from the future that I need to share with you.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 3: setTimeout(createChat, 3000, 'This might be awkward but well.. according to the vision we soon get to knew each other well.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 4: setTimeout(createChat, 4500, 'And.. maybe even fall in love.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 5: setTimeout(createChat, 1500, 'Weird right? Coming from a stanger.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 6: setTimeout(createChat, 3000, 'Well anyway, we also begin talking to each other everyday, often for hours.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 7: setTimeout(createChat, 4000, 'Sometimes even till late in the night.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 8: setTimeout(createChat, 2000, 'We talk about a lot of stuff. And on one of these late night talks I get a crush on you.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 9: setTimeout(createChat, 3000, 'Not too surprising right?', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 10: setTimeout(createChat, 2000, 'Well what\'s surprising is how long it sticks around. And it sure was a long time in the vision.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 11: setTimeout(createChat, 3500, 'And maybe I will also write a few poems for you.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 12: setTimeout(createChat, 5500, 'With the third one being the best. Can\'t wait to find out what that\'s gonna be about.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 13: setTimeout(createChat, 1500, 'Ah and yeah, we will also celebrate your birthday together. When\'s your birthday anyway?', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 14: setTimeout(createChat, 2000, 'Well, there were a lot of things, okay. It was a long vision. I won\'t spoil it anymore.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 15: setTimeout(createChat, 3000, 'Maybe we can just find out the long and hard way.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 16: setTimeout(createChat, 4500, 'And maybe on this day a year later we can fill in the rest of what was in it.', 'dpic.png', 'Elfinlox');
				scount++;	
			break;
		case 17: setTimeout(createChat, 6000, 'And on that day I\'ll wish you.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
	}

}