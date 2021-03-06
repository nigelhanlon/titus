import React from 'react'
import {
  render,
  renderWithRouter,
  waitFor,
  waitForElementToBeRemoved,
  fireEvent
} from 'lib/test-utils'

import Login from '.'

describe('<Login />', () => {
  it('renders without crashing', () => {
    const { getByLabelText, getByText } = render(<Login />)
    expect(getByLabelText(/username/i)).toBeInTheDocument()
    expect(getByLabelText(/password/i)).toBeInTheDocument()
    expect(getByText(/login/i)).toBeInTheDocument()
  })

  it('shows required field errors', async () => {
    const { getByText } = render(<Login />)

    fireEvent.click(getByText(/login/i))
    await waitFor(() => {
      expect(getByText(/username is required/i)).toBeInTheDocument()
      expect(getByText(/password is required/i)).toBeInTheDocument()
    })
  })

  it('shows password requirements when password is inadequate', async () => {
    const { getByText, getByLabelText } = render(<Login />)

    const password = getByLabelText('Password:')
    fireEvent.change(password, { target: { value: 'Bar' } })
    fireEvent.click(getByText(/login/i))
    let error
    await waitFor(() => {
      error = getByText(/password must be/i)
    })
    fireEvent.change(password, { target: { value: 'Bar6' } })
    fireEvent.click(getByText(/login/i))
    await waitForElementToBeRemoved(error)
  })

  it('Login is successful', async () => {
    // Render with routing to detect url change
    const { getByText, getByLabelText, queryByText } = renderWithRouter(
      <Login />
    )
    await waitFor(() => {
      expect(getByText(/login/i)).toBeInTheDocument()
    })

    fireEvent.change(getByLabelText('Username:'), { target: { value: 'Foo' } })
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'Bar6' } })
    expect(queryByText(/username is required/i)).not.toBeInTheDocument()
    expect(queryByText(/password is required/i)).not.toBeInTheDocument()

    fireEvent.click(getByText(/login/i))
    await waitFor(() => {
      expect(getByText(/logout/i)).toBeInTheDocument()
    })
  })
})
