import React from 'react'
import { Project } from '../types'

type PortfolioItemDesc = {
    project: Project
}
const PortfolioItemDesc = (project : PortfolioItemDesc) => {
    return (
    <p>
        "As a skilled front-end developer, I have been a great contributor to the development of the Red Padel app for nearly a year. I have tackled a wide range of tasks, from resolving bugs and implementing dynamic renderings to developing e2e tests and reducing testing time execution with Node. My commitment to agile methodologies and reactivity principles has helped to ensure a seamless user experience."
    </p>
  )
}

export default PortfolioItemDesc