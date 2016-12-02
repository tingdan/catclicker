var click=0;
var cats = [{name:'Andy',picLocate:'bigcat.jpg',clicked:0 },
            {name:'William',picLocate:'cat2.jpg',clicked:0},
            {name:'Lizzy',picLocate:'cat3.jpg',clicked:0},
            {name:'Benny',picLocate:'cat4.jpg',clicked:0},
            {name:'Jorge',picLocate:'cat5.jpg',clicked:0}];
var catHtml = '';
var catListHtml = '<h3>Choose your cat</h3><div id="catList"><ul>';
//show cat pics in div
for(var i=0;i<cats.length;i++){
          catListHtml += '<li>'+cats[i].name+'</li>'

}
      catListHtml += '</ul></div>'
      $('#title').after(catListHtml);



$('li').one('click',function(){
    var index = $('li').index(this);
    var catname = $(this).text();
    var showHtml = catname+'<img class ='+catname+ ' src="'+cats[index].picLocate+'">';
    $('#catpic').append(showHtml);
    $('#output').append(catname +'  clicked: <span class='+catname+'>0</span><br>');
});





$('#catpic').on('click','img',function(){

  //  console.log(c);
  var getname =  $(this).attr('class');
  var select = 'span.'+getname;
  var parseClick = parseInt($(select).text());
  parseClick++;
  console.log(select);
  $(select).html(parseClick);
  //$('span .'+getname).html('bozo');
  //  $(this).next().html('Clicked : '+ click);

});
