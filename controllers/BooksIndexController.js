angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;

  $http({
    method:'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(onBooksIndexSuccess, onError)

  function onBooks IndexSuccess(response){
    console.log("here's the get all books response data!", response.data);
    vm.books = response.data.books;
  }
  function onError(error){
    console.log('Error:', error);
  }
};
