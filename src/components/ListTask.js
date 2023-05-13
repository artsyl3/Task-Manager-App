import ShowTask from "./ShowTask";

function ListTask ( { onDelete , tasks , onEdit } ) {
    const renderedTasks = tasks.map((task, index) => {
       return <ShowTask key={index} task={task} onDelete={onDelete} index={index} onEdit={onEdit}/>
    });

    return <tbody>{renderedTasks}</tbody>;
}
    
export default ListTask;