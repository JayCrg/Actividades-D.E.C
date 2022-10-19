//---------------------2
function dado(cara=6){
    return Math.floor((Math.random() * cara)+1);
}
document.write(dado());

//----------------------------4
let uno=0, dos=0, tres=0,cua=0,cin=0,seis=0;
for (i=0; i<6000;i++){
    if(dado()==1)
    uno += 1;
    if(dado()==2)
    dos += 1;
    if(dado()==3)
    tres += 1;
    if(dado()==4)
    cua += 1;
    if(dado()==5)
    cin += 1;
    if(dado()==6)
    seis += 1;
}
document.write('<br>');
document.write(`uno: ${uno/6000}<br>dos: ${dos/6000}<br>tres: ${tres/6000}<br>
cuatro: ${cua/6000}<br>cinco: ${cin/6000}<br>seis: ${seis/6000}<br>`)

//--------------------------------------------
document.write('----------------------<br>')
function recurpow(num, pow){
    if(pow == 1 || pow == 0)
    return num
    else
    return recurpow(num, pow-1)*num;
}
document.write(recurpow(2,0));
document.write('<br>----------------------<br>');

function factorial(num){
    if(num == 1 || num == 0)
    return 1;
    else
    return factorial(num-1)*num;
}
document.write("<table  border = \"1\" cellspacing = \" 2 \" bgcolor = \" white \" width = \" 200 \">");
for(i=0; i<=10; i++){
    document.write(`<tr bgcolor = \" white\" height = \" 50 \">`);

    document.write(`<td widht=\"50\"> ${i} </td>`);
    document.write(`<td widht=\"50\"> ${factorial(i)} </td>`);

    document.write("</tr>");
};
document.write('</table>');