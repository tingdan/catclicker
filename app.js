var click=0;
var cats = [{name:'Andy',picLocate:'bigcat.jpg',clicked:0 },
            {name:'William',picLocate:'cat2.jpg',clicked:0},
            {name:'Lizzy',picLocate:'cat3.jpg',clicked:0},
            {name:'Benny',picLocate:'cat4.jpg',clicked:0},
            {name:'Jorge',picLocate:'cat5.jpg',clicked:0}];
var index;
var catHtml = '';
var catListHtml = '<h3>Choose your cat</h3><div id="catList"><ul>';

//show cat pics in div
for(var i=0;i<cats.length;i++){
          catListHtml += '<li>'+cats[i].name+'</li>'

}
      catListHtml += '</ul></div>'
      $('#title').after(catListHtml);



$('li').on('click',function(){
    index = $('li').index(this);
    var catname = $(this).text();
    var showHtml = '<img class ='+catname+ ' src="'+cats[index].picLocate+'">';
    $('#catpic').html(showHtml);
    $('#output').html(catname +'  clicked: <span>'+cats[index].clicked+'</span><br>');
});





$('#catpic').on('click','img',function(){

  //  console.log(c);
  var getname =  $(this).attr('class');
//  var select = 'span.'+getname;
//  var parseClick = parseInt($(select).text());
  var getNumClick = cats[index].clicked;
  getNumClick = getNumClick+1;
   cats[index].clicked = getNumClick;
  //console.log(select);
  $('span').html(getNumClick);
  //$('span .'+getname).html('bozo');
  //  $(this).next().html('Clicked : '+ click);

});
