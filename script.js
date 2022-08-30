//bai1 
/* alert('so nguyen');
var songuyen1 = prompt("Nhap so nguyen so 1")
var songuyen2 = prompt("nhap so nguyen so 2")
if(songuyen1 % songuyen2 ==0){
    alert(' so nguyen 1 chia het cho so nguyen 2')
}
else{
    alert('so nguyen 1 khong chia het cho so nguyen 2')
}
*/
// bai 2
/*var songuyen1 = prompt("Nhap so nguyen so 1")
var songuyen2 = prompt("nhap so nguyen so 2")
var songuyen3 = prompt("nhap so nguyen so 3")
var a;
if(songuyen1 > songuyen2 && songuyen1 > songuyen3){
    alert('so nguyen 1 long nhat')
}
else if(songuyen1 < songuyen2 && songuyen2 > songuyen3){
    alert('so nguyen 2 lon nhat')
}
else{
    alert('so nguyen 3 lon nhat')
}
*/
//bai 3
var x1,x2;
var x,y,z,delta;
var a = prompt('nhap a')
var b = prompt('nhap b')
var c = prompt('nhap b')
x= parseInt(a);
y= parseInt(b);
z= parseInt(c);
delta=(y*y-4*x*z)
if(delta ==0){
  alert("phuong trinh co nghiem kep");
   x1=-y/(2*x) ;
   x2=-y/(2*x);
   alert(x1);
   alert(x2);
}
else if(delta<0){
  alert("phuong trinh vo nghiem");
} 
else{
   alert("phuong trinh co hai nghiem");
   x1=(-y-Math.sqrt(delta))/(2*x);
   x2=(-y+Math.sqrt(delta))/(2*x);
   alert(x1);
   alert(x2);
}
