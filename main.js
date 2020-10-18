add = document.querySelector('#add');
function getk() {
    console.log('getk');
    title=document.getElementById('title').value;
    desc=document.getElementById('desc').value;
   
 //   let tlrow=document.createElement('tr');
 //   tlrow.innerHTML=`
            
  
 let info;
 if(localStorage.getItem('info')==null){
     infoar=[];
     infoar.push([title,desc]);
     localStorage.setItem('info',JSON.stringify(infoar));
 }
 else{
     infostr=localStorage.getItem('info')
     infoar=JSON.parse(infostr);
     infoar.push([title,desc]);
     localStorage.setItem('info',JSON.stringify(infoar));

 }
 keep();
}
function keep() {

               
     
    let info;
    let tablebody= document.getElementById('tlbody');
    if(localStorage.getItem('info')==null){
        infoar=[];
    
        localStorage.setItem('info',JSON.stringify(infoar));
    }
    else{
        infostr=localStorage.getItem('info')
        infoar=JSON.parse(infostr);

    }
    let str="";
    infoar.forEach((element,index) => {
          str+=` 
          <tr>
          <th scope="row">${index+1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
          </tr>
          `;
           
        
    });
    tablebody.innerHTML=str;
     
    
    }
    add.addEventListener("click",getk);
    keep();

function deleted(itemindex){
    infostr=localStorage.getItem('info');
    infoar=JSON.parse(infostr);

    infoar.splice(itemindex,1);
    localStorage.setItem('info',JSON.stringify(infoar));
    keep();

}
function clearstr(){
    if(confirm("Are you sure?")){
        localStorage.clear();
        keep();
    }
}

function myFunction() {
    // Declare variables
    var input, filter, tblbody, tr, td, i, txtValue;
    input = document.getElementById("sb");
    filter = input.value.toUpperCase();
    tblbody = document.getElementById("tlbody");

    tr = tblbody.getElementsByTagName("tr");
  
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        
    }
  }
}


function sortTable() { 
    var tableb, i, x, y; 
    tableb = document.querySelector("#tlbody"); 
    var switching = true; 

    // Run loop until no switching is needed 
    while (switching) { 
        switching = false; 
        var rows = tableb.rows; 

        // Loop to go through all rows 
        for (i = 1; i < (rows.length - 1); i++) { 
            var Switch = false; 

            // Fetch 2 elements that need to be compared 
            x = rows[i].getElementsByTagName("TD")[2]; 
            y = rows[i + 1].getElementsByTagName("TD")[2]; 

            // Check if 2 rows need to be switched 
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                { 

                // If yes, mark Switch as needed and break loop 
                Switch = true; 
                break; 
            } 
        } 
        if (Switch) { 
            // Function to switch rows and mark switch as completed 
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
            switching = true; 
        } 
        console.log('switch');
    } 
} 



  

// add.addEventListener("click", () => {
//     console.log('doing');
//     let tle=document.getElementById('title').value;
//     let desc=document.getElementById('desc').value;
//     if(localStorage.getItem('items')==null){
//         itemArray=[];
//         itemArray.push([tle,desc]);
//         localStorage.setItem('items',JSON.stringify(itemArray));
//     }
//     else{
//         itemStr=localStorage.getItem('items');
//         itemArray=JSON.parse('itemStr');
//         itemArray.push([tle,desc]);
//         localStorage.setItem('items',JSON.stringify(itemArray));
//     }

//     let tb=document.getElementById('tlbody');
//     let str="";
//     itemArray.forEach((element,index) => {
//         str+=`
//         <tr>
//                 <th scope="row">${index}</th>
//                 <td>${element[0]}</td>
//                 <td>${element[1]}</td>
//                 <td><button class="btn btn-sm btn-primary">Delete</button></td>
//               </tr>
//         `;
//         tb.innerHtml=str;

//     });

// }
