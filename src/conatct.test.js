import { screen,render } from "@testing-library/react";
import user from "@testing-library/user-event"
import Contact from "../src/contact"
import { MemoryRouter } from "react-router-dom";

test("ensure contact page form works as expected",()=>{
    const mock=jest.fn();

    render(
        <MemoryRouter>
            <Contact onClick={mock}/>
        </MemoryRouter>
    );

    const nameInput=screen.getByRole("textbox",{name:/fullname/i});
    const emailInput=screen.getByRole("textbox",{name:/email/i});
    const message=screen.getByRole("textbox",{name:/message/i});

    user.click(nameInput);
    user.keyboard("alameen kareem")

    user.click(emailInput);
    user.keyboard("ayomidekareem563@gmail.com")

    user.click(message);
    user.keyboard("ill like to work with you")

    const button=screen.getByRole("button");

    user.click(button);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
        name:"alameen kareem",
        email:"ayomidekareem563@gmail.com",
        message:"ill like to work with you"
    })


})