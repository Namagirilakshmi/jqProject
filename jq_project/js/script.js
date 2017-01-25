
    $(document).ready(function(){
   
                function displaydetail(){
                                $('.listblock .row a').removeClass('hyperitem');
                                $('.listblock .row a').addClass('displayhere');
                }
                function displayhere(){
                                $('.listblock .row a').removeClass('displayhere');
                                $('.listblock .row a').addClass('hyperitem');
                }
                function replaceClass(){
                                var windowWidth = $(window).width();
                                if(windowWidth >= 768){
                                                displaydetail();
                                }
                                else{
                                                displayhere();
                                }
                }
                function retrieveData(currentItem){
                                var custhtml = '';
                                                $.each(inputData, function(i, dinoDetails) {
                                                if(i==currentItem){
                                                                custhtml += '<div class="detailHead">'+i+'</div>';
                                                                custhtml += '<table>';
                                                                                $.each(dinoDetails, function(key, value) {
                                                                                                custhtml += '<tr><td>'+key+'</td><td>'+value+'</td></tr>';
                                                                                });
                                                                                               
                                                }
                                                });
                                                custhtml += '</table>';
                                                return custhtml;
                }
                $(document).on('click','.listblock .row p a',function(e){
                                var clsname =$(this).attr('class');
                                var curentItem =$(this).text();
                               
                                if(clsname=="hyperitem"){
                                                custhtml = retrieveData(curentItem);
                                                $('.seperateDiv').html('');
                                                custhtml += '<div class="centerblock"><button type="button" class="btn btn-info">Close</button></div>';
                                                $('.seperateDiv').append(custhtml);
                                                $('.seperateDiv').show();
                                }
                                else {
                                                custhtml = retrieveData(curentItem);
                                                $('.detailblock').html('');
                                                $('.detailblock').append(custhtml);
 
 
 
                                }
                });
                

                
                $(document).ready(function() {
 
                                $.getJSON('https://dinosaur-facts.firebaseio.com/dinosaurs.json', function (data) {
                                                                window.inputData = data;
                                                  $.each(inputData, function(index, element) {
                                                   var custhtml = '<div class="row">';
                                                                   custhtml += '<p><a href="#" class="hyperitem">'+index+'</a></p>';
                                                                                custhtml +='</div>';
                                                   $('.listblock').append(custhtml);
                                                   replaceClass();
                                                                });
                                  });
                               
 
                });
                $(window).on('resize', function(event){
                                replaceClass();
 
                });
                $(document).on('click','.centerblock button',function(){
                                $('.seperateDiv').hide();
                });
            });