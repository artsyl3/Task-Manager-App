import ShowTask from "./ShowTask";

function ListTask ( { onDelete , tasks } ) {
    const renderedTasks = tasks.map((task, index) => {
       return <ShowTask key={index} task={task} onDelete={onDelete} index={index}/>
    });

    return <tbody>{renderedTasks}</tbody>;
}
    
export default ListTask;