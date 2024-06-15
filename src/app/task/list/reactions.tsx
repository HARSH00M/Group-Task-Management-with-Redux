import { reactionAdded, selectAllTasks, Task } from "@/redux/features/taskSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Reactions({taskInfo}: {taskInfo : Task}) {
  const selector = useSelector(selectAllTasks);
  const dispatch = useDispatch();

  const emoji = {
    thumbsup : '👍',
    coffee : '☕',
    wow : '🤩',
    rocket : '🚀',
    heart : '❤️'
  }

  const handleButton = (selected_reaction : string)=>{
    dispatch(reactionAdded({taskId : taskInfo.id,reaction :  selected_reaction}))
  }
  const task = selector.find(task=>task.id==taskInfo.id);
  

  const spread = Object.entries(emoji).map(([key, value], k) => <button
   className="bg-blue-100/10 rounded-full p-[2px]" onClick={()=>handleButton(key)} key={key}>{value} <span>{task?.reactions[key as keyof Task['reactions']]}</span>
   </button>);
  return (
    <div className="flex gap-x-1">
      
      {spread}
    </div>
  )
}
