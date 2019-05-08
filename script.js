var mcount = 0
var scount = 0
function createChat(text,pic,name){
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
	anni.style.top = mcount*200 + 55 + 'px';
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
		case 0: setTimeout(createChat, 1500, 'Hey there.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 1: setTimeout(createChat, 3000, 'It\'s the 22nd of may, 2018 today isn\'t it?', 'dpic.png', 'Elfinlox');
				scount++;	
			break;
		case 2: setTimeout(createChat, 2000, 'Well listen, I may have just met you but I have had a vision from the future that I feel like I must share with you.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 3: setTimeout(createChat, 3000, 'Its pretty awkward but in the vision we soon get to knew each other well and eventually we both fell in love.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 4: setTimeout(createChat, 4500, 'Weird, right? Coming from a stranger.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 5: setTimeout(createChat, 1500, 'Wonder if you think that\'s creepy? Wouldn\'t blame you if you did.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 6: setTimeout(createChat, 3000, 'Anyway, from what i saw, looks like in a few months we will begin talking to each other almost everyday, often for hours.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 7: setTimeout(createChat, 4000, 'Sometimes even till late in the night.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 8: setTimeout(createChat, 2000, 'We talk about a bunch of stuff. And somehow on one of these late night talks i apparently develop a mild crush on you.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 9: setTimeout(createChat, 3000, 'Pretty commonplace, eh?', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 10: setTimeout(createChat, 2000, 'Well what\'s not common is that how long it apparently will stick around. And it sure was a long time in the vision.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 11: setTimeout(createChat, 3500, 'I also saw that I will also write a few poems for you.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 12: setTimeout(createChat, 5500, 'With the third one being the best. Can\'t wait to find out what that\'s gonna be about.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 13: setTimeout(createChat, 1500, 'Oh yeah and we will also celebrate your birthday together. When\'s your birthday anyway?', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 14: setTimeout(createChat, 2000, 'Well, there were a lot of things. It was a long vision. I won\'t spoil it anymore.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 15: setTimeout(createChat, 3000, 'We can just find out the long and hard way.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
		case 16: setTimeout(createChat, 4500, 'Maybe on this day a year later we can fill the rest of what was in it.', 'dpic.png', 'Elfinlox');
				scount++;	
			break;
		case 17: setTimeout(createChat, 6000, 'And on that day I\'ll wish you.', 'dpic.png', 'Elfinlox');
				scount++;
			break;
	}

}