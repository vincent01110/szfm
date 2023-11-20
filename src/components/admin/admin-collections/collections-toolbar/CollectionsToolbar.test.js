import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CollectionsToolbar from "./CollectionsToolbar";
import { BrowserRouter as Router } from "react-router-dom";

test("navigates to the correct route when Add button is clicked", () => {
    const { container } = render(
        <Router>
            <CollectionsToolbar />
        </Router>
    );

    const addButton = container.querySelector(".add");
    fireEvent.click(addButton);

    // Assuming the navigation path is correct
    expect(window.location.pathname).toBe("/admin/dashboard/collections/add");
});
