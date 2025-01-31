import {render,screen} from "@testing-library/react";
import Works from "./works";
import { MemoryRouter } from "react-router-dom";

test("check how many projects are being rendered",()=>{
    render (
        <MemoryRouter>
        <Works/>
        </MemoryRouter>
);

    const section=screen.getAllByTestId(/project/i);

    expect(section).toHaveLength(5);
})