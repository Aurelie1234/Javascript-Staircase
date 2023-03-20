function staircase(n) {
   
 for (let i = 0; i<n; i++){
 let staircase =  " ".repeat(n-1-i) + "#".repeat(i+1);
 console.log(staircase);
         }
}
