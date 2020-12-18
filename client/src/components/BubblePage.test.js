import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {act} from "react-dom/test-utils"

test("Fetches data and renders the bubbles", async() => {
  render (<BubblePage />)

  await act (async ()=>{

    setTimeout( ()=>{
    let lilac=screen.queryByText(/lilac/i)
  expect(lilac).toBeInTheDocument();
  }, 2000)
    
  })
  
});
