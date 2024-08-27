import { render, screen, fireEvent } from '@testing-library/react';
import Button from './components/Button';

test('render button and handle click event', ()=>{
    // write the logic of testing
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click</Button>);

    const renderedButton = screen.getByText('Click');
    fireEvent.click(renderedButton);

    expect(handleClick).toHaveBeenCalledTimes(1);

});