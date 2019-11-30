// import React from "react";

// const Todos = ({ todos, deleteTodo }) => {
//   const todoList = todos.length ? (
//     todos.map(todo => {
//       return (
//         <div className="collection-item" key={todo.id}>
//           <span
//             onClick={() => {
//               deleteTodo(todo.id);
//             }}
//           >
//             {todo.content}
//           </span>
//         </div>
//       );
//     })
//   ) : (
//     <p className="center">You dont have any todos left.</p>
//   );
//   return <div className="todo collection">{todoList}</div>;
// };

// export default Todos;

import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item">
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no more todos left</p>
  );
  return <div className="todo collection">{todoList}</div>;
};

export default Todos;
