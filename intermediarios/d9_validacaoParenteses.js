/* Validação de Parênteses */

var isValid = function(s) {    

       while(s.search(/\(\)|\{\}|\[\]/g) >= 0)
           s=s.replace(/\(\)|\{\}|\[\]/g,'')
       return (s.length==0) ? true : false
   }
   
   print(isValid(gets()))