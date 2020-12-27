import tw from "@tailwindcssinjs/macro"
import styled from "styled-components"

export const PageTitle = styled.h1`
	${tw`text-4xl text-black-600 font-semibold tracking-tight capitalize`};
	max-width: 30rem;
`

export const PageDescription = styled.p`
	${tw`text-lg text-black-300 font-normal mt-4 mb-12`};
	max-width: 45rem;
`

export const H4 = styled.h4`
	${tw`text-xl font-medium text-black-500`};
`

export const H3 = styled.h3`
	${tw`text-2xl font-semibold text-black-500`};
`

export const H2 = styled.h2`
	${tw`text-3xl font-semibold text-black-500`};
`

export const SubText = styled.p`
	${tw`font-normal text-black-300`};
`
