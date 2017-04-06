var data = [{
  label: "Brooklyn",
  votes: 46.7
},{
  label: "Lower Manhattan",
  votes: 13.3
}, {
  label: "New Jersey",
  votes: 13.3
}, {
  label: "Upper Manhattan",
  votes: 20
}]


var g = d3.select('#chart')
  .selectAll("g")
  .data(data)
  .enter()
  .append('g')
g.append("circle")
  .attr('cy', 40)
  .attr('cx', (d, i)=> (i+1) * 120)
  .attr('r', (d)=> d.votes)
g.append("text")
  .attr('y', 120)
  .attr('x', (d, i)=> (i+1) * 120)
  .text((d)=> d.label)

d3.select("text:nth-child(1)").attr('x', (d, i)=> (i+1) * 50);
d3.select("circle:nth-child(1)").attr('cx', (d, i)=> (i+1) * 50);

function randomColor(){
 r = Math.floor(Math.random() * (256));
 g = Math.floor(Math.random() * (256));
 b = Math.floor(Math.random() * (256));
 jQuery('body').css('fill','rgb('+r+','+g+','+b+')');
}

jQuery(document).ready(function(){

$("#chart").attr('width', '90%').attr('text-align', 'center').attr('padding-left', 'auto').attr('padding-right','auto');
$("#chart").attr('height', '.7 * width');
 randomColor();
 var t = setInterval(randomColor,10000000);
});


