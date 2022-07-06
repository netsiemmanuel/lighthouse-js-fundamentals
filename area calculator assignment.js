function calculateRectangleArea(length, width){
  if (length < 0 || width < 0){
    return undefined; }
  var areaR = length * width 
  return areaR; 
}
function calculateTriangleArea(base, height){
  if(base < 0 || height < 0){
    return undefined;
  }
  var areaT = 0.5 * base * height
  return areaT;
}
function calculateCircleArea(radius){
  if ( radius < 0 ){
    return undefined; }
  var areaC = (radius * radius) * 3.1415926536
  return areaC;
} 