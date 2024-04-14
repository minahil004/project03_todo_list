import inquirer from "inquirer";
 let        TodoList= [];
 let       condition = true;


 while     (condition)
    {
 let addTask = await inquirer.prompt(
 [
    {
         name:"TodoList",
         type:"input",
         message:"What you want to add in your Todos list?"
    },
    
    {
        name:"addMore",
        type:"confirm",
        message:"Do you want to add more?",
        default:"false"
    }
    
 ]  

)
 TodoList.push(addTask.TodoList);
            condition = addTask.addMore
  console.log(TodoList);
}