// const products = [
//   {
//     name: "cucumber",
//     type: "vegetable",
//     quantity: 0,
//     price: 10,
//   },
//   { name: "banana", type: "fruit", quantity: 0, price: 5 },
//   { name: "celery", type: "vegetable", quantity: 5, price: 20 },
//   { name: "orange", type: "fruit", quantity: 10, price: 15 },
// ];

// const fruit = products.filter(
//   (e) => e.type === "vegetable" && e.quantity < 10 && e.price >= 10
// );
// console.log(fruit);

// const post = { id: 4, title: "New Post" };

// const comments = [
//   { postId: 4, content: "awesome post" },
//   { postId: 3, content: "it was ok" },
//   { postId: 4, content: "neat" },
// ];

// function commentsForPost(post, comments) {
//   return comments.filter((comment) => comment.postId === post.id);
// }

// const postComments = commentsForPost(post, comments);
// console.log(postComments);

function reject(array, iteratorFunction) {
  return array.filter((arr) => !iteratorFunction(arr));
}

const numbers = [10, 20, 30];
const lessThanFifteen = reject(numbers, function (number) {
  return number > 15;
});
// const lessThanFifteen = reject(
//   numbers,
//   numbers.filter((number) => number > 15)
// );
console.log(lessThanFifteen);
