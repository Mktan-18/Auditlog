
		var xhr = new XMLHttpRequest();
		xhr.open("GET","http://localhost:8081/audit");
		xhr.send();
		 
		xhr.onload = function(){
		var d=JSON.parse(xhr.response);
		console.log(d);		
	    
	    var tbody=document.querySelector('.table > tbody')
	     
	    d.forEach((currentElement,index,arr) =>{
		
			console.log(currentElement);
			var tr=document.createElement('tr');
			var td1=document.createElement('td');
			td1.innerHTML=currentElement.id;
			var td2=document.createElement('td');
			td2.innerHTML=currentElement.name;
			var td3=document.createElement('td');
			td3.innerHTML=currentElement.description;
			var td4=document.createElement('td');
			td4.innerHTML=currentElement.validity;
			
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tbody.appendChild(tr);
		
		});
		}
	 