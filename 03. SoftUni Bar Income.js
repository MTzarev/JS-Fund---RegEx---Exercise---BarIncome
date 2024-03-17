function barIncome(input){

    let pattern = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<qty>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/
 
    let token = input.shift()
    let totalSum = 0
    while(token !== "end of shift"){
       
       let matches = pattern.exec(token)
       if(matches !== null){
       totalSum += (Number(matches.groups.qty) * Number(matches.groups.price))
       console.log(`${matches.groups.name}: ${matches.groups.product} - ${(Number(matches.groups.qty) * Number(matches.groups.price)).toFixed(2)}`)
       }
    token = input.shift()
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`)
    
 
 }
 barIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])