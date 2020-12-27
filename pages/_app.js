import { useEffect, useState } from "react"
import tw from "@tailwindcssinjs/macro"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import "../styles/base.css"
import "../styles/index.css"

function App({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default App
