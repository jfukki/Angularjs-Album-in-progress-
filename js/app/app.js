var app = angular.module("app",["ngRoute"]);



app.config(function($routeProvider){
    $routeProvider.
    when("/albums",{
        controller:"albums",
        templateUrl:"add_list_partial.html"
    })
    . when("/album/:album_name",{
        controller:"AlbumViewController",
        templateUrl:"album_view_partial.html"
    })
    .when("/",{
        redirectTo:"/albums"
    })
    .when ("/404_page",{
        controller:"controller404",
        templateUrl:"404_page_partial.html"
    })
    .otherwise({
        redirectTo:"/404_page"
    });
});



app.controller('AlbumViewController',function($scope,$routeParams){
   $scope.load_error_text = "";
    $scope.album_name = $routeParams.album_name;
    
    var photos = {
        
        thialand03:[
            {
                filename:'1.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF THIALANDTHIS IS DESCRIPTION OF THIALAND'
            },
            {
                filename:'2.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF THIALANDTHIS IS DESCRIPTION OF THIALAND'
            },
            {
                filename:'3.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF THIALANDTHIS IS DESCRIPTION OF THIALAND'
            },
             {
                filename:'4.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF THIALANDTHIS IS DESCRIPTION OF THIALAND'
            },  
            {
                filename:'5.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF THIALANDTHIS IS DESCRIPTION OF THIALAND'
            },
               {
                filename:'6.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF THIALANDTHIS IS DESCRIPTION OF THIALAND'
            },
            
        ],
        iceland548:[
            {
                filename:'ice1.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF ICE LAND'
            },
            {
                filename:'ice2.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF ICE LAND'
            }
            
        ],
        john_wick7864:[
            {
                filename:'john.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF JOHN WICK'
            },
            {
                filename:'john1.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF JOHN WICK'
            }
            
        ],
        pakistan_wedding:[
            {
                filename:'p3.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF Pakistan Wedding'
            },
            {
                filename:'p1.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF PAKISTAN WEDDING'
            }
            
        ],
        
        Latest_Clicks:[
            {
                filename:'92.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF LATEST CLICKS'
            },
            {
                filename:'new.jpg',
                date:'',
                des:'THIS IS DESCRIPTION OF CLICKS'
            }
            
        ]
    };
    
    if(photos[$scope.album_name]){
        $scope.photos = photos[$scope.album_name];
    }else {
        $scope.load_error_text = "I cant find an album of that name";
    }
    
    
})

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
             name:'pakistan_wedding',
              title:'title 3',
              des:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500 when an unknown printer farrukh took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
              date:'2013-09-10'
          },
            { 
            name:'john_wick7864',
             title:'title 4',
              des:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
              date:'2013-09-10'
             },{
             name:'Latest_Clicks',
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


