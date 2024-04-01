import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/react'
import Todo from '../Todos/Todo.jsx'

test("check setups", () => {
  expect(3).toBe(3);
})

test("simplest test for rendering todo correctly", () => {
  const todo = {
    text: "Test todo",
    done: false,
  }
  const deleteTodo = vi.fn()
  const completeTodo = vi.fn()

  render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
  expect(screen.getByText("Test todo")).toBeInTheDocument()
})