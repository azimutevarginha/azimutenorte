import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentFooter, ComponentSaibaMais} from "../../components"
import * as style from "./styles"

export function Layout() {

  return (
    <>
      
      <ComponentHeader />
      <style.Layout>
        <Outlet />
      </style.Layout>
      <ComponentSaibaMais />
      <ComponentFooter />
    </>
  )
}