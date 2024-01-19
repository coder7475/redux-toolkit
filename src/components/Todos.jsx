import { useSelector } from "react-redux";

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state.todos);
    console.log(isLoading, todos, error)
    return (
        <div>
            {isLoading && <h3>Loading...</h3> }
            {error && <h3>{error}</h3> }
            <section>
            {
               todos && todos.map(todo => {
                return <article key={todo.id}>
                    <h4>{todo.title}</h4>
                </article>
               })
            }
            </section>
            
        </div>
    );
};

export default Todos;