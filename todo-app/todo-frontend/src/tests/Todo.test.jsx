import { render, fireEvent, getByText } from '@testing-library/react'
import { screen } from '@testing-library/react'
import Todo from '../Todos/Todo.jsx'

test("check setups", () => {
  expect(3).toBe(3);
})

test("simplest test for rendering todo correctly", () => {
  const todo = {
    text: "Testing todo",
    done: false,
  }
  const deleteTodo = vi.fn()
  const completeTodo = vi.fn()

  render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
  expect(screen.getByText("Testing todo")).toBeInTheDocument()
  expect(screen.getByText("This todo is not done")).toBeInTheDocument()
  expect(screen.getByText("Testing todo")).toBeDefined()
})