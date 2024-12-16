import {
  AuthGetCurrentUserServer,
  cookiesClient,
} from "@/utils/amplifyServerUtils";
import { revalidatePath } from "next/cache";
import Logout from "./components/Logout";

async function App() {
  const { data: todos } = await cookiesClient.models.Todo.list();

  async function addTodo(data: FormData) {
    "use server";
    const user = await AuthGetCurrentUserServer();
    console.log(user);
    const title = data.get("title") as string;
    await cookiesClient.models.Todo.create({
      content: title,
    });
    revalidatePath("/server-component");
  }

  return (
    <>
      <h1>Hello, Amplify 👋</h1>

      <form action={addTodo}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </ul>
      <Logout />
    </>
  );
}

export default App;
