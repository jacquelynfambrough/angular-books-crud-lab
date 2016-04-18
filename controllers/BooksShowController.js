angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id;
  $http({
    method:'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(onBooksShowSuccess, onError);

  function onBookShowSuccess(response){
    // console.log("data for book," bookId, ':', response.data);
    vm.book = response.data;
  };
  function onError(error){
    console.log('there was an error:', error);
  }
   vm.updateBook = function (bookToUpdate){
   $http({
     method: 'PUT',
     url: 'https://super-crud.herokuapp.com/books/' + bookToUpdate._id,
     data: {
       title: bookToUpdate.title,
       author: bookToUpdate.author,
       image: bookToUpdate.releaseDate
     }
   }).then(onBookUpdateSuccess, onError);

   function onBookUpdateSuccess(response){
     console.log('updated data for book', bookId, ':', repsonse.data);
     vm.book = response.data;
     $location.path('/');
   }
};

vm.deleteBook = function (book) {
  console.log ('deleting book:', book);
  $http({
    method: 'DELETE',
    url: 'https://super-crud.herokuapp.com/books/' +book._id,
  }).then(onBookDeleteSuccess, onError);

    function onBookDeleteSuccess(response){
      console.log('book delete response data:', response.data);
      $location.path('/');
    }
  };
}
