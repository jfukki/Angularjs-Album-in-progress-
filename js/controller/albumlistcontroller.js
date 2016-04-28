(function(){
    
    
app.controller('controller404',function($scope){
    $scope.error = "This is 404 Error Page";
})
app.controller('user',function($scope){
    $scope.name = 'Farrukh';
})


app.controller('albums',function($scope){
   
    $scope.adding_album={};
    $scope.add_album_error = "";
    $scope.albums=[
          
          { 
            name:'thialand03',
             title:'title 1',
              des:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
              date:'2013-09-10'
          },{ 
            name:'iceland548',
             title:'title 2',
              des:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
              date:'2013-09-10'
          },
             {
             name:'pakistan wedding',
              title:'title 3',
              des:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500 when an unknown printer farrukh took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
              date:'2013-09-10'
          },
            { 
            name:'john wick7864',
             title:'title 4',
              des:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
              date:'2013-09-10'
             },{
             name:'Latest Clicks',
             title:'title 5',
              des:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
              date:'2013-09-10'
          }
          
          ];
        
        $scope.addAlbum =function(new_album){
         
            $scope.albums.push(new_album);
                $scope.adding_album={};    
            
           
            
        };

});

    
    
});