import React, { useState } from 'react';

// Child Form Component (for form input)
function ChildForm({ onFormSubmit }) {
    const [inputValue, setInputValue] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(inputValue);  // Send the data back to the parent
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Child Form</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}  // Update local state
                placeholder="Enter something..."
            />
            <button type="submit">Submit</button>
        </form>
    );
}

// Child Button Component (for button click)
function ButtonComponent({ onClick }) {
    return (
        <div>
            <h2>Child Button</h2>
            <button onClick={onClick}>Click Me!</button>
        </div>
    );
}

// Parent Component
function Parent() {
    const [message, setMessage] = useState("No message yet");
    const [formData, setFormData] = useState("");
    const [count, setCount] = useState(0);

    // Callback function to handle form data from ChildForm
    const handleFormData = (data) => {
        setFormData(data);
    };

    // Callback function to handle message from ButtonComponent
    const handleButtonClick = () => {
        setMessage("Hello from Child Button!");
    };

    // Callback function to handle count increment from ButtonComponent
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Parent Component</h1>

            {/* Display message from ButtonComponent */}
            <p>Message from child: {message}</p>
            <ButtonComponent onClick={handleButtonClick} />

            {/* Display form data from ChildForm */}
            <p>Received from child form: {formData}</p>
            <ChildForm onFormSubmit={handleFormData} />

            {/* Display button click count */}
            <p>Button clicked {count} times</p>
            <ButtonComponent onClick={incrementCount} />
        </div>
    );
}

export default Parent;
